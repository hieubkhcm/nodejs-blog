// Package ExpressJS de rut ngan thoi gian dev va don gian hoa Code
const express = require('express')

// Khai bao mot Object co template ExpressJS
const app = new express()

// Phai co path thi cac folder public va views moi duoc npm nhan ra
const path = require('path')
const ejs = require('ejs')
app.set('view engine', 'ejs')

// chua cac file expose ra ngoai Internet - insecure
app.use(express.static('public'))

// Mo server va listen tai port 3000
app.listen(3000, () => {
    console.log("App listening on port 3000")
})


// Cach routing khi dung sendFile API

// app.get('/', (request, response) => {
//     response.sendFile(path.resolve(__dirname, 'pages/index.html'))
// })
// app.get("/about", (req, res) => {
//     res.send('The about page')
// })
// app.get("/contact", (req, res) => {
//     res.send('The contact page')
// })
// app.get("/contact", (req, res) => {
//     res.send('The contact page')
// })
// app.get('/', (request, response) => {
//     response.render('index')
// })


// Khi co request toi / thi npm se tim trong folder Views de tim cac file co format .ejs
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/index', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})
app.get('/post', (req, res) => {
    res.render('post')
})

// Tat ca cac request khi khong duoc dac biet routing thi se tra ve 404
app.get('*', function (req, res) {
    res.header(404)
    res.send('page not found')
});


// 
