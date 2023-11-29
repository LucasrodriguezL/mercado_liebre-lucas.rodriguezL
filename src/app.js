const path = require("path");

const express = require("express")

const app = express();

const publicPath = path.resolve(__dirname, "../public")

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3030, () => console.log("Servidor corriendo en el puerto http://localhost:3030/"));


app.get("/", (req, res) => {
res.sendFile(path.resolve(__dirname, "./views/index.html"))
})

app.get('/register' , (req , res) =>{
    res.sendFile(path.resolve(__dirname , './views/register.html'))
});

app.get('/login' , (req , res) =>{
    res.sendFile(path.resolve(__dirname , './views/login.html'))
});

app.post("/login", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
}),

app.use('/public/css', express.static(path.join(__dirname, 'public', 'css')));

app.use(express.static(path.join(__dirname, 'public'), { 'extensions': ['html', 'css'] }));
