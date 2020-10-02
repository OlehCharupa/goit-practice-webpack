const name = "users";
const url = `https://jsonplaceholder.typicode.com/${name}`;
const meComment = {
    body: "Lorem ipsun dolor amet...",
    email: "smoke@gmail.com",
    name: "Oleh",
    postId: "501"
}
const user = {
    name: "Oleh",
    age: "27"
}


function setRequest(method, regUrl, headers = null, body = "null") {
    const options = {
        method: method,
        headers: headers,
        body: body
    }
    return fetch(regUrl, options)
};
// setRequest("GET")
setRequest("POST", url, meComment)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));


setRequest("POST", url, user)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

