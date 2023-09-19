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
<img width="770" alt="Screenshot (919)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/93ccae2c-b860-4a3f-81c1-766b2fe1687b">

<br />

receive error on invalid login
<br />
<img width="769" alt="Screenshot (920)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/a7a4cb55-ca1f-4053-9d3b-ade95be29d79">

<br />

on successful login you get directed to home page
<br />
<img width="768" alt="Screenshot (921)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/d1dba7a6-bee7-4f85-85e2-4e53e4424765">
<br />

add new user as "administrator", "editor" or "viewer"
<br />
<img width="768" alt="Screenshot (923)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/d19ebf29-2eee-47f9-be7c-bfdc2a4da26d">


<br />
<img width="769" alt="Screenshot (924)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/12e86d35-b3d5-44fb-b064-67514871e1c7">

<br />
<img width="770" alt="Screenshot (925)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/4a4bc11e-1000-4f8d-a15a-32110d5f48c8">


<br />
<img width="771" alt="Screenshot (926)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/3ab2b6cd-6f80-45e0-be17-6457edd006e0">

<br />
<img width="771" alt="Screenshot (927)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/0fd527da-da9d-400e-8877-ad8df08d14fe">


<br />

after successful addition all the users can be seen on the home page
<br />
<img width="770" alt="Screenshot (932)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/80c6f744-0458-4637-bbde-188308ce8dbb">

<br />

- "administrator" can add new user, edit user, or delete user
- "editors" can only edit users
- "viewers" can only view users
<br />
<img width="769" alt="Screenshot (933)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/7100e600-c539-4e8c-a1a7-870fffb92e66">


<br />

any user can be searched on the basis of their attributes
<br /><img width="769" alt="Screenshot (934)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/28a17c91-9d17-46d7-b71b-d45127bc374c">


<br />
<img width="770" alt="Screenshot (935)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/59fb195a-04fc-4640-8c32-5f8e246ab39f">


<br />


<br />
<img width="770" alt="Screenshot (936)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/3062362a-4d05-4b54-9838-20d6c5371d80">


<br />
<img width="768" alt="Screenshot (937)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/6db47fb7-dc32-4d19-9f91-f70e14d233cf">


<br />
<img width="769" alt="Screenshot (940)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/aff77c60-24bf-4222-9d4f-969a54ba2b81">



<br />
<img width="770" alt="Screenshot (941)" src="https://github.com/a2rp/user-management-dashboard/assets/5670738/06134b23-5291-455b-928c-cde83304eba5">



