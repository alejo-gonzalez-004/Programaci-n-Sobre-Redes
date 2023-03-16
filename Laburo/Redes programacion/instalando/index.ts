import express from "express"

var bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pageIndex', {products: 'ok, asi funciona, mb'})
})
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})

app.post('/form', (req, res) => {
    
    if(req.body.edad < 0 || req.body.edad == ""){
        res.render('pageIndex', {products: "edad invalida"})
        return;
    }
    if(req.body.nombre ==""){
        res.render('pageIndex', {products: "complete el campo de nombre"})
        return;
    }
    res.send("todo piola")
    console.log(1)
    res.render('datos')
})