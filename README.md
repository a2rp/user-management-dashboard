# user-management-dashboard

to run this application

run backend
- open the "backend" folder in vscode
- open integrated terminal in root of the folder
- in terminal type command "npm install" and press enter to install the node packages
- after installation is complete type "npm run devStart" and press enter to run the application
- open "postman" and run the endpoint
<br />
http://localhost:1198/api/v1/user-add<br />
Content-Type: application/json<br />
{<br />
    "name":"ashish ranjan",<br />
    "email": "admin@mail.com",<br />
    "password": "12345678",<br />
    "password_confirm": "12345678",<br />
    "role": "administrator"<br />
}<br />
this will add user "admin" with password "12345678" into the mongodb
<br /><br />

to run frontend
- open the folder in vscode
- open integrated terminal in root of the folder
- in terminal type command "npm install" and press enter to install the node packages
- after installation is complete type "npm run start" and press enter to run the application

login
<br />
<img width="770" alt="Screenshot (919)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/f2073815-b15e-4199-9cfe-09a852f52c40">
<br />

receive error on invalid login
<br />
<img width="769" alt="Screenshot (920)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/5faff44e-07a6-4458-a234-0bd1bc9d4433">
<br />

on successful login you get directed to home page
<br />
<img width="768" alt="Screenshot (921)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/3af89207-e7f2-42fe-9f42-d6bb8be4d969">
<br />

add new user as "administrator", "editor" or "viewer"
<br />
<img width="768" alt="Screenshot (923)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/07a91474-fe74-4f6a-add0-3166b3449019">

<br />
<img width="769" alt="Screenshot (924)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/3537fb37-501a-4098-9712-365213e1cfef">

<br />
<img width="770" alt="Screenshot (925)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/61c60884-ca25-4c2e-8c2f-c9dd35f326e0">

<br />
<img width="771" alt="Screenshot (926)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/986fc084-f14d-4758-a957-722181f7cf7a">

<br />
<img width="771" alt="Screenshot (927)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/615c5ece-eba7-434c-a640-7927cc2312d8">
<br />

after successful addition all the users can be seen on the home page
<br />
<img width="770" alt="Screenshot (932)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/77df1e8c-0b2a-4510-a935-559da6967a68">
<br />

- "administrator" can add new user, edit user, or delete user
- "editors" can only edit users
- "viewers" can only view users
<br />
<img width="769" alt="Screenshot (933)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/2a12baf3-098e-4503-b9f0-26ac89abaeef">
<br />

any user can be searched on the basis of their attributes
<br />
<img width="769" alt="Screenshot (934)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/5b9d4dcc-0e57-4522-bc54-ce07457502bb">
<br />


<br />
<img width="770" alt="Screenshot (935)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/d84e23eb-fd85-45b4-ab76-68483a5ff1d9">

<br />
<img width="770" alt="Screenshot (936)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/6cfc0294-ed6f-4e31-b738-6ad7f8b522d0">

<br />
<img width="768" alt="Screenshot (937)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/a2f3a74d-54bb-4362-a850-4b678a6a3acf">

<br />
<img width="769" alt="Screenshot (940)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/cfe1d2fc-2738-4bca-a21c-d9c402daa70c">

<br />
<img width="770" alt="Screenshot (941)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/aa0e17aa-80c6-4d0a-adc1-ba829ecd47f1">
