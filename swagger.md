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
      <td>User logged in successfully</td>
      <td><em>No links</em></td>
    </tr>
    <tr>
  </tbody>
</table>
</details>

<details>
<summary>
<span style="color:#0096FF"><b>GET</span>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /user</b>
&nbsp; &nbsp; &nbsp; </summary>
<br>

**Parameters:** No parameters 

**Responses:** 

##### **Curl** #####

```
curl -X 'GET' \ 
  'http://localhost:3000/api/user' \ 
  -H 'accept: */*' \ 
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4' 
```

##### **Request URL** #####

http://localhost:3000/api/user

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
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTI0MDh9.FkPKCwyvaMP1MftEFUaIHdx_fhmM_I46Bl7kuaASDuk",
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
      <td>Current user retrieved successfully</td>
      <td><em>No links</em></td>
    </tr>
    <tr>
  </tbody>
</table>
</details>

<details>
<summary>
<span style="color:#F28C28"><b>PUT</span>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /user</b>
&nbsp; &nbsp; &nbsp; Update user</summary>
<br>

**Parameters:** No parameters 

**Request Body:**
```
{ 
  "user": { 
    "email": "user518_updated@testing.com" 
  } 
} 
```

**Responses:** 

##### **Curl** #####

```
curl -X 'PUT' \ 
  'http://localhost:3000/api/user' \ 
  -H 'accept: */*' \ 
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4' \ 
  -H 'Content-Type: application/json' \ 
  -d '{ 
  "user": { 
    "email": "user518_updated@testing.com" 
  } 
}' 
```

##### **Request URL** #####

http://localhost:3000/api/user

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
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTQ4Mjl9.yXS6DAQavtiwMcU5KFBg6syVuFmK1lqg_Db7CK2eiFA",
      <br>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
      "bio": null,
      <br>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
      "image": "null" 
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
      <td>User updated successfully</td>
      <td><em>No links</em></td>
    </tr>
    <tr>
  </tbody>
</table>
</details>

<details>
<summary>
<span style="color:#0096FF"><b>GET</span>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /articles</b>
&nbsp; &nbsp; &nbsp; Get all articles</summary>
<br>

**Parameters:** No parameters 

**Responses:** 

##### **Curl** #####

```
curl -X 'GET' \ 
  'http://localhost:3000/api/articles' \ 
  -H 'accept: */*' 
```

##### **Request URL** #####

http://localhost:3000/api/articles

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
      <span style="margin-left:1em">
      "articles": [
      </span>
      <br>
      <span style="margin-left:6.5em">
      {
      </span>
      <br>
      <span style="margin-left:7.5em">
      "slug": "how-to-train-your-dragon-1",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "title": "How to train your dragon",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "description": "Ever wonder how?",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "body": "With two hands",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "tagList": [
      </span>
      <br>
      <span style="margin-left:12.5em">
      "dragons",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "training"
      </span>
      <br>
      <span style="margin-left:7.5em">
      ],
      </span>
      <br>
      <span style="margin-left:7.5em">
      "createdAt": "2023-08-10T17:45:10.407Z",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "updatedAt": "2023-08-10T17:45:14.632Z",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "favorited": true,
      </span>
      <br>
      <span style="margin-left:7.5em">
      "favoritesCount": 1,
      </span>
      <br>
      <span style="margin-left:7.5em">
      "author": {
      </span>
      <br>
      <span style="margin-left:12.5em">
      "username": "u1691689493",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "bio": null,
      </span>
      <br>
      <span style="margin-left:12.5em">
      "image": null,
      </span>
      <br>
      <span style="margin-left:12.5em">
      "following": false
      </span>
      <br>
      <span style="margin-left:7.5em">
      }
      </span>
      <br>
      <span style="margin-left:6.5em">
      },
      </span>
      <br>
      <span style="margin-left:6.5em">
      {
      </span>
      <br>
      <span style="margin-left:7.5em">
      "slug": "new-one-2",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "title": "New one",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "description": "Slugs",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "body": "# Slugs\n\n## What is a slug\n\n### Wrong syntax (fixed)\n\n```javascript\nconsole.log(\"HEY\")\n```\n\n- Point 1\n- Point 2\n\n1. First\n2. Second",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "tagList": [
      </span>
      <br>
      <span style="margin-left:12.5em">
      "can you change me?",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "markdown",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "test"
      </span>
      <br>
      <span style="margin-left:7.5em">
      ],
      </span>
      <br>
      <span style="margin-left:7.5em">
      "createdAt": "2023-08-09T21:08:11.735Z",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "updatedAt": "2023-08-09T21:19:06.178Z",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "favorited": false,
      </span>
      <br>
      <span style="margin-left:7.5em">
      "favoritesCount": 0,
      </span>
      <br>
      <span style="margin-left:7.5em">
      "author": {
      </span>
      <br>
      <span style="margin-left:12.5em">
      "username": "gutentag2012",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "bio": "",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "following": true
      </span>
      <br>
      <span style="margin-left:7.5em">
      }
      </span>
      <br>
      <span style="margin-left:6.5em">
      },
      </span>
      <br>
      <span style="margin-left:6.5em">
      {
      </span>
      <br>
      <span style="margin-left:7.5em">
      "slug": "this-is-my-article-1",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "title": "This is my article",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "description": "nothing really",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "body": "# This is the title\n\nThis is the body\n\n## Also subtitle here\n\nHey you",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "tagList": [
      </span>
      <br>
      <span style="margin-left:12.5em">
      "needed",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "no",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "tags"
      </span>
      <br>
      <span style="margin-left:7.5em">
      ],
      </span>
      <br>
      <span style="margin-left:7.5em">
      "createdAt": "2023-08-09T17:20:17.753Z",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "updatedAt": "2023-08-09T17:20:17.753Z",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "favorited": false,
      </span>
      <br>
      <span style="margin-left:7.5em">
      "favoritesCount": 0,
      </span>
      <br>
      <span style="margin-left:7.5em">
      "author": {
      </span>
      <br>
      <span style="margin-left:12.5em">
      "username": "gutentag2012",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "bio": "",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "following": true
      </span>
      <br>
      <span style="margin-left:7.5em">
      }
      </span>
      <br>
      <span style="margin-left:6.5em">
      },
      </span>
      <br>
      <span style="margin-left:6.5em">   
      {
      </span>
      <br>
      <span style="margin-left:7.5em">
      "slug": "Try-to-transmit-the-HTTP-card-maybe-it-will-override-the-multi-byte-hard-drive!-120863",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "title": "Try to transmit the HTTP card, maybe it will override the multi-byte hard drive!",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "description": "Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel quo. Earum odit rem natus totam atque cumque. Sint dolorem facere non.",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "body": "Sunt excepturi ut dolore fuga.\\nAutem eum maiores aut nihil magnam corporis consectetur sit. Voluptate et quasi optio eos et eveniet culpa et nobis.\\nSint aut sint sequi possimus reiciendis nisi.\\nRerum et omnis et sit doloribus corporis voluptas error.\\nIusto molestiae tenetur necessitatibus dolorem omnis. Libero sed ut architecto.\\nEx itaque et modi aut voluptatem alias quae.\\nModi dolor cupiditate sit.\\nDelectus consectetur nobis aliquid deserunt sint ut et voluptas.\\nCorrupti in labore laborum quod. Ipsa laudantium deserunt. Ut atque harum inventore natus facere sed molestiae.\\nQuia aliquid ut.\\nAnimi sunt rem et sit ullam dolorem ab consequatur modi. Cupiditate officia voluptatum.\\nTenetur facere eum distinctio animi qui laboriosam.\\nQuod sed voluptatem et cumque est eos.\\nSint id provident suscipit harum odio et. Et fuga repellendus magnam dignissimos eius aspernatur rerum. Quo perferendis nesciunt.\\nDolore dolorem porro omnis voluptatibus consequuntur et expedita suscipit et.\\nTempora facere ipsa.\\nDolore accusamus soluta officiis eligendi.\\nEum quaerat neque eum beatae odio. Ad voluptate vel.\\nAut aut dolor. Cupiditate officia voluptatum.\\nTenetur facere eum distinctio animi qui laboriosam.\\nQuod sed voluptatem et cumque est eos.\\nSint id provident suscipit harum odio et.",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "tagList": [
      </span>
      <br>
      <span style="margin-left:12.5em">
      "ducimus", 
      </span>
      <br>
      <span style="margin-left:12.5em">
      "hic",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "rerum",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "voluptate"
      </span>
      <br>
      <span style="margin-left:7.5em">
      ],
      </span>
      <br>
      <span style="margin-left:7.5em">
      "createdAt": "2022-12-09T13:46:24.264Z",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "updatedAt": "2022-12-09T13:46:24.264Z",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "favorited": true,
      </span>
      <br>
      <span style="margin-left:7.5em">
      "favoritesCount": 1,
      </span>
      <br>
      <span style="margin-left:7.5em">
      "author": {
      </span>
      <br>
      <span style="margin-left:12.5em">
      "username": "Anah Benešová",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "bio": null,
      </span>
      <br>
      <span style="margin-left:12.5em">
      "image": "https://api.realworld.io/images/demo-avatar.png",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "following": true
      </span>
      <br>
      <span style="margin-left:7.5em">
      }
      </span>
      <br>
      <span style="margin-left:6.5em">
      },
      </span>
      <br>
      <span style="margin-left:6.5em">
      {
      </span>
      <br>
      <span style="margin-left:7.5em">
      "slug": "If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "title": "If we quantify the alarm, we can get to the FTP pixel through the online SSL interface!",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "description": "Omnis perspiciatis qui quia commodi sequi modi. Nostrum quam aut cupiditate est facere omnis possimus. Tenetur similique nemo illo soluta molestias facere quo. Ipsam totam facilis delectus nihil quidem soluta vel est omnis.",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "body": "Quia quo iste et aperiam voluptas consectetur a omnis et.\\nDolores et earum consequuntur sunt et.\\nEa nulla ab voluptatem dicta vel. Temporibus aut adipisci magnam aliquam eveniet nihil laudantium reprehenderit sit.\\nAspernatur cumque labore voluptates mollitia deleniti et. Quos pariatur tenetur.\\nQuasi omnis eveniet eos maiores esse magni possimus blanditiis.\\nQui incidunt sit quos consequatur aut qui et aperiam delectus.\\nPraesentium quas culpa.\\nEaque occaecati cumque incidunt et. Provident saepe omnis non molestiae natus et.\\nAccusamus laudantium hic unde voluptate et sunt voluptatem.\\nMollitia velit id eius mollitia occaecati repudiandae. Voluptatum tempora voluptas est odio iure odio dolorem.\\nVoluptatum est deleniti explicabo explicabo harum provident quis molestiae. Sed dolores nostrum quis. Aut ipsa et qui vel similique sed hic a.\\nVoluptates dolorem culpa nihil aut ipsam voluptatem. Cupiditate officia voluptatum.\\nTenetur facere eum distinctio animi qui laboriosam.\\nQuod sed voluptatem et cumque est eos.\\nSint id provident suscipit harum odio et. Facere beatae delectus ut.\\nPossimus voluptas perspiciatis voluptatem nihil sint praesentium.\\nSint est nihil voluptates nesciunt voluptatibus temporibus blanditiis.\\nOfficiis voluptatem earum sed. Deserunt ab porro similique est accusamus id enim aut suscipit.\\nSoluta reprehenderit error nesciunt odit veniam sed.\\nDolore optio qui aut ab.\\nAut minima provident eius repudiandae a quibusdam in nisi quam.",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "tagList": [
      </span>
      <br>
      <span style="margin-left:12.5em">
      "maiores",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "omnis",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "quae",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "rerum"
      </span>
      <br>
      <span style="margin-left:7.5em">
      ],
      </span>
      <br>
      <span style="margin-left:7.5em">
      "createdAt": "2022-12-09T13:46:24.264Z",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "updatedAt": "2022-12-09T13:46:24.264Z",
      </span>
      <br>
      <span style="margin-left:7.5em">
      "favorited": true,
      </span>
      <br>
      <span style="margin-left:7.5em">
      "favoritesCount": 1,
      </span>
      <br>
      <span style="margin-left:7.5em">
      "author": {
      </span>
      <br>
      <span style="margin-left:12.5em">
      "username": "Anah Benešová",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "bio": null,
      </span>
      <br>
      <span style="margin-left:12.5em">
      "image": "https://api.realworld.io/images/demo-avatar.png",
      </span>
      <br>
      <span style="margin-left:12.5em">
      "following": true
      </span>
      <br>
      <span style="margin-left:7.5em">
      }
      </span>
      <br>
      <span style="margin-left:6.5em">
      }
      </span>
      <br>
      <span style="margin-left:1em">
      ],
      </span>
      <br>
      <span style="margin-left:1em">
      "articlesCount": 200 
      </span>
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
      <td>Articles retrieved successfully</td>
      <td><em>No links</em></td>
    </tr>
    <tr>
  </tbody>
</table>
</details>