// const autoprefixer = require("autoprefixer")

const list = document.querySelector(".list")
const key = "8bc2be7fce9f45c3be5446f60af3b87c"
const mainUrl = "http://newsapi.org"
const backV = "v2"
const endpoint = "everything"
const endpoint1 = "top-headlines"
const endpoint2 = "sources"
const query = "bitcoin"
const query1 = "italy"
const query2 = "moon"
const options = {
    method: "GET", // __ МЕТОДЫ__:"GET" "POST", "PUT", "PATCH", "DELETE"
    // _______________________URL____| +  |   +    |  +   |   +   |    +    |
    // ____________________OPTIONS___| +/-|   +    |  +   |   +   |    +    |
    headers: {
        //___ ЗАГОЛОВКИ (ВСЕГДА ОБЬЕКТ)_____ все ключи прописывать тут
        // "X-Api-Key": key,
        "Authorization": key
    },
    // body: {
    //  ТЕЛО (ВСЕГДА ОБЬЕКТ)
    // }
}
const url = `${mainUrl}/${backV}/${endpoint}?q=${query}&from=2020-09-02&sortBy=publishedAt&apiKey=${key}`
const url1 = `${mainUrl}/${backV}/${endpoint1}?q=${query1}&from=2020-09-02&sortBy=publishedAt&apiKey=${key}`
const url2 = `${mainUrl}/${backV}/${endpoint2}?q=${query2}&from=2020-09-02&sortBy=publishedAt&apiKey=${key}`
const url3 = `${mainUrl}/${backV}/${endpoint}?q=${query}&from=2020-09-02&sortBy=publishedAt`

// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))

// fetch(url1)
//     .then(res => res.json())
//     .then(data => console.log(data))

// fetch(url2)
//     .then(res => res.json())
//     .then(data => console.log(data))

fetch(url3, options)
    .then(res => res.json())
    .then(data => data.articles)
    .then(articles => createItem(articles))

function createItem(data) {
    data.map((obj) => {
        const title = document.createElement("h2")
        title.textContent = obj.title;
        const link = document.createElement("a")
        link.setAttribute("href", obj.url)
        link.append(title)
        const content = document.createElement("p")
        content.textContent = obj.content
        const author = document.createElement("p")
        author.textContent = obj.author
        const published = document.createElement("p")
        published.textContent = obj.publishedAt
        const source = document.createElement("p")
        source.textContent = obj.source.name
        const item = document.createElement("li")
        item.append(link, content, author, published, source)
        list.append(item)
    })
}

    // < !-- < template >
//<ul>
//         <li>
    //     <a href="url">
    //         <h2>title</h2>
    //     </a>
    //     <p>content</p>
    //     <p>author</p>
    //     <p>published</p>
    //     <p>source.name</p>
    // </li>
    // </ul>
    // </template > -->
