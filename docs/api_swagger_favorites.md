## Favorites

<details>

<summary><b><span style="color:#008000">POST</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/articles/{slug}/favorite</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Favorite an article</summary>
&nbsp;

**Parameters:**
<table>
    <thead>
        <tr>
            <th><h5>Name</h5></th>
            <th><h5>Description</h5></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=2>
            <p>
                <h6>Slug<sup><span style="color:#EE4B2B"> * required</span></sup>
                <br>
                <br>
                string
                <br>
                (path)
                </h6>
            </p>
            </td>
            <td><h5>this-is-my-article-1</h5></td>
        </tr>
</table>

**Responses:**
**<h5>Curl</h5>**
```
curl -X 'POST' \
  'http://localhost:3000/api/articles/this-is-my-article-1/favorite' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4'\
  -d ''
```
**<h5>Request URL</h5>**
http://localhost:3000/api/articles/this-is-my-article-1/favorite

**<h5>Server response</h5>**

 <table>
    <thead>
        <tr>
            <th><h5>Code</h5></th>
            <th><h5>Details</h5></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4><b><h5>200</h5</b></td>
            <td><b><h5>Response Body</h5></b></td>
        </tr>
        <tr>
            <td rowspan=1>
            {
                <br>
                &nbsp;&nbsp; &nbsp; &nbsp; "article":
                <br>
                &nbsp; &nbsp;&nbsp; &nbsp; {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "slug": "this-is-my-article-1",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "title": "This is my article",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "description": "nothing really",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "body": "# This is the title\n\nThis is the body\n\n## Also subtitle here\n\nHey you",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "tagList": [ ],
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "createdAt": "2023-08-09T17:20:17.753Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "updatedAt": "2023-08-09T17:20:17.753Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "favorited": true,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "favoritesCount": 1,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "author": {
                            <br>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                            "username": "gutentag2012",
                            <br>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                            "bio": "",
                            <br>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                            "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
                            <br>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                            "following": false
                            <br>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }
                    <br>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                }
            <br>
            }
            </td>
        </tr>
        <tr>
            <td><b><h5>Response headers</h5</b></td>
        </tr>
        <tr>
            <td>content-type: application/json</td>
        </tr>
</table>

**<h5>Responses</h5>**

| <h5> Code </h5> | <h5> Description </h5>         | <h5> Links </h5>    |
| :-------------- | :----------------------------- | :------------------ |
| 200             | Article favorited successfully | <em> No links </em> |
| 401             | Unauthorized                   | <em> No links </em> |
| 422             | Unexpected error               | <em> No links </em> |

</details>
