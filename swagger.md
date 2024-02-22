## Swagger ##

<details>
<summary>
<span style="color:#008000"><b>PUT</span>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /users</b>
&nbsp; &nbsp; &nbsp; Register a new user </summary>
<br>

**Parameters:** No parameters 

**Request Body:**
```
{ 
  "user": { 
    "email": "user518@testing.com", 
    "password": "Testing151!", 
    "username": "user518" 
  } 
} 
```

**Responses:** 

##### **Curl** #####

```
curl -X 'POST' \ 
  'http://localhost:3000/api/users' \ 
  -H 'accept: */*' \ 
  -H 'Content-Type: application/json' \ 
  -d '{ 
  "user": { 
    "email": "user518@testing.com", 
    "password": "Testing151!", 
    "username": "user518" 
  } 
}' 
```

##### **Request URL** #####

http://localhost:3000/api/users 

##### **Server response** #####

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan=4>200</th>
      <th>Response body</th>
    </tr>
    <tr>
      <td> {
      <br>
      &nbsp; &nbsp;
      "user": { 
      <br>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
      "email": "user518@testing.com",
      <br>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
      "username": "user518", 
      <br>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDgzNTMxNjB9.qvYt8vvmA-Q6JCCjL0MSAvtw2iiO4Kmzna9ai6_BqxQ", 
      <br>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
      "bio": null,
      <br>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
      "image": "https://api.realworld.io/images/smiley-cyrus.jpeg" 
      <br>
      &nbsp; &nbsp;
      }
      <br>
      }
      </td>
    </tr>
    <tr>
      <th>Response headers</th>
    </tr>
    <tr>
      <td>content-type: application/json </td>
    </tr>
  </tbody>
</table>

##### **Responses** #####
<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
      <th>Links</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>200</td>
      <td>User registered successfully</td>
      <td><em>No links</em></td>
    </tr>
    <tr>
  </tbody>
</table>
</details>

<details>
<summary>
<span style="color:#008000"><b>PUT</span>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /users/login</b>
&nbsp; &nbsp; &nbsp; Login </summary>
<br>

**Parameters:** No parameters 

**Request Body:**
```
{ 
  "user": { 
    "email": "user518@testing.com", 
    "password": "Testing151!" 
  } 
} 
```

**Responses:** 

##### **Curl** #####

```
curl -X 'POST' \ 
  'http://localhost:3000/api/users/login' \ 
  -H 'accept: */*' \ 
  -H 'Content-Type: application/json' \ 
  -d '{ 
  "user": { 
    "email": "user518@testing.com", 
    "password": "Testing151!" 
  } 
}' 
```

##### **Request URL** #####

http://localhost:3000/api/users/login

##### **Server response** #####

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan=4>200</th>
      <th>Response body</th>
    </tr>
    <tr>
      <td> {
      <br>
      &nbsp; &nbsp;
      "user": { 
      <br>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
      "email": "user518@testing.com",
      <br>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
      "username": "user518", 
      <br>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4", 
      <br>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
      "bio": null,
      <br>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
      "image": "https://api.realworld.io/images/smiley-cyrus.jpeg" 
      <br>
      &nbsp; &nbsp;
      }
      <br>
      }
      </td>
    </tr>
    <tr>
      <th>Response headers</th>
    </tr>
    <tr>
      <td>content-type: application/json </td>
    </tr>
  </tbody>
</table>

##### **Responses** #####
<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
      <th>Links</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>200</td>
      <td>User logged in successfully </td>
      <td><em>No links</em></td>
    </tr>
    <tr>
  </tbody>
</table>
</details>
