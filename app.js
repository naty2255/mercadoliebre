const express = require("express");
const path = require("path")
const app = express()
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Servidor Corriendo en el puerto ${PORT}`);
})

app.use(express.static(path.resolve(__dirname,'./public')))

app.get("/",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})