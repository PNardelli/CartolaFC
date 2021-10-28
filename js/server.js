const express = require('express')
const bodyparser = require('body-parser')
const ObjectId = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb+srv://admin:root@clusterapi.pflbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

MongoClient.connect(uri, (err, client) => {
    if (err) return console.log('err runninigg')
    db = client.db('Cartola')
    app.listen(3000, () => {
        console.log('<--- Servidor aberto e rodando na porta 3000 --->')
    })
}
)




const app = express()

app.use(bodyparser.urlencoded({ extended: true }))

/*
app.listen(3000)
console.log('<--- Servidor aberto e rodando na porta 3000 --->')
*/

app.get('/', function (req, res) {
    res.render('index.ejs')
})

app.set('views engine', 'ejs')

/*
app.post('/show', (req, res)=>{
    db.collection('times').save(req.body, (err, result) =>{
        if(err) return console.log('Erro no banco de dados')
        console.log('Salvo com sucesso no banco de dados MongoDB')
        res.redirect('/show')
    })
});
*/

app.get('/', (req, res) => {
    var cursor = db.collection('times').find()
})
 
app.get('/', (req, res) => {
    db.collection('times').find().toArray((err, results) => {
        if (err) return console.log(err)
        res.render('index.html', { data: results })
 
    })
})
