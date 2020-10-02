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


function setRequest(method, regUrl, body = "null") {
    return new Promise((res, rej) => {
        const xmlReq = new XMLHttpRequest()
        console.log(xmlReq);
        xmlReq.open(method, regUrl)
        xmlReq.responseType = "json"
        xmlReq.onload = () => {
            if (xmlReq.status >= 400) {
                rej(xmlReq.response);
            } else {
                res(xmlReq.response);
            }
        }
        xmlReq.onerror = () => {
            rej(xmlReq.response);
        }

        xmlReq.send(JSON.stringify(body))
    })
}
setRequest("GET")
setRequest("POST", url, meComment).then(data => console.log(data))
setRequest("POST", url, user).then(data => console.log(data))

