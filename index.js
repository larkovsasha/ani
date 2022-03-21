const express = require('express')
const app = express()
fs = require('fs')
const PORT = process.env.PORT || 8080

app.use(express.static('static'));

app.get('https://school-project2.herokuapp.com/', (req, res) => {
    const html = '<a>https://gentle-chamber-10032.herokuapp.com/html/Gepard</a>'
    res.end(html)
})
app.get('/html/*', (req, res) => {
    const html = fs.readFileSync('./index.html')
    res.end(html)
})
app.get('/index.css', (req, res) => {
    const css = fs.readFileSync('./index.css')
    res.end(css)
})
app.get('/script.js', (req, res) => {
    const js = fs.readFileSync('./script.js')
    res.end(js)
})
app.get('/assets/best_music.mp3', (req, res) => {
    // res.set({'Content-Type': 'json'});
    // let readStream = fs.createReadStream('./assets/best_music.mp3');
    // readStream.pipe(res);
    try {
        const mp3 = fs.readFileSync('./assets/best_music.mp3')
        res.set({
            "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
            'accept-ranges': 'bytes',
            'Content-Length': '163584',
            'Content-Range': 'bytes 0-163583/163584',
            'content-type': 'audio/mpeg'
        }).status(206).sendFile('G:\\dev\\school project\\assets\\best_music.mp3')
    }catch (e){
        console.log(e)
    }
})




app.get('/about', (req, res) => {
    res.end('<h1>about<h1/>')
})



app.listen(PORT, () => {
    console.log('server has been started')
})