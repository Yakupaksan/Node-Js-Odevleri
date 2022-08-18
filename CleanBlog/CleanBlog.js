const express = require('express')

const app = express()

app.get('/', (req, res) => {
    const blog = { id: 1, title: "Blog title", description: "Blog description" }
    res.send(blog)
})




const post = 3000;
app.listen(post, () => {
    console.log(`${post} numarali post basarili bir sekilde acildi. `)
})