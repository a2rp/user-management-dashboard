import { Button, Input, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

const DisplayAllUsers = () => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const [role, setRole] = useState("");
    const [allUsers, setAllUsers] = useState([]);
    const [allUsersUnfiltered, setAllUsersUnfiltered] = useState([]);
    const [search, setSearch] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        let active = true;

        const loadUsers = async () => {
            try {
                const { data: session } = await api.get("/session");
                if (!active) return;

                setUserEmail(session.user.email);
                setRole(session.user.role);
                window.localStorage.setItem("email", session.user.email);
                window.localStorage.setItem("role", session.user.role);

                const { data: users } = await api.get("/user-all");
                if (!active) return;
                setAllUsers(users);
                setAllUsersUnfiltered(users);
            } catch (error) {
                if (!active) return;
                if (error.response?.status === 401 || error.response?.status === 403) {
                    window.localStorage.removeItem("email");
                    window.localStorage.removeItem("role");
                    navigate("/login", { replace: true });
                    return;
                }
                setErrorMessage(error.response?.data?.message || "Could not load users. Check that the API is running.");
            }
        };

        loadUsers();
        return () => {
            active = false;
        };
    }, [navigate]);

    const handleSearch = (event) => {
        const searchText = event.target.value.trim().toLowerCase();
        setSearch(event.target.value);
        setAllUsers(allUsersUnfiltered.filter((user) =>
            [user.name, user.userid, user.role, user.email]
                .some((value) => value.toLowerCase().includes(searchText))
        ));
    };

    const editUser = (email) => navigate("/edit", { replace: true, state: { email } });
    const deleteUser = (email) => navigate("/delete", { replace: true, state: { email } });

    return (
        <div>
            <Input
                type="search"
                name="search"
                placeholder="Search users"
                onChange={handleSearch}
                value={search}
                marginLeft="15px"
                width="500px"
                aria-label="Search users"
            />
            {errorMessage && <p role="alert">{errorMessage}</p>}

            <TableContainer style={{ border: "3px solid #000", margin: "15px" }}>
                <Table variant="striped">
                    <Thead>
                        <Tr style={{ backgroundColor: "#000", color: "#fff", textAlign: "center" }}>
                            <Th style={{ textAlign: "center", color: "#fff" }}>User ID</Th>
                            <Th style={{ textAlign: "center", color: "#fff" }}>Name</Th>
                            <Th style={{ textAlign: "center", color: "#fff" }}>Email</Th>
                            <Th style={{ textAlign: "center", color: "#fff" }}>Role</Th>
                            <Th style={{ textAlign: "center", color: "#fff" }}>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {allUsers.map((user) => (
                            <Tr key={user.userid} style={{ textAlign: "center" }}>
                                <Td style={{ textAlign: "center" }}>{user.userid}</Td>
                                <Td style={{ textAlign: "center" }}>{user.name}</Td>
                                <Td style={{ textAlign: "center" }}>{user.email}</Td>
                                <Td style={{ textAlign: "center" }}>{user.role}</Td>
                                <Td style={{ textAlign: "center" }}>
                                    {user.email !== userEmail && (role === "administrator" || role === "editor") && (
                                        <Button mt={4} colorScheme="teal" onClick={() => editUser(user.email)}>
                                            Edit {user.email}
                                        </Button>
                                    )}
                                    {user.email !== userEmail && role === "administrator" && (
                                        <Button mt={4} colorScheme="red" marginLeft="15px" onClick={() => deleteUser(user.email)}>
                                            Delete {user.email}
                                        </Button>
                                    )}
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DisplayAllUsers;
