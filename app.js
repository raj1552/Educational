import express from 'express'
import bodyParser from 'body-parser'
import nodemailer from 'nodemailer'
import cors from 'cors'
import router from './src/router/router.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.sendFile(process.cwd() + '/views/index.html')
})

app.get('/presentation', (req, res) =>{
    res.sendFile(process.cwd() + '/views/presentation.html')
})

app.get('/questionsolution', (req, res) =>{
    res.sendFile(process.cwd() + '/views/question.html')
})

app.get('/about', (req, res) =>{
    res.sendFile(process.cwd() + '/views/about.html')
})

app.get('/contact', (req, res) =>{
    res.sendFile(process.cwd() + '/views/contact.html')
})

app.get('/assignmentreport', (req, res) =>{
    res.sendFile(process.cwd() + '/views/Report.html')
})

app.use('/message', router)

app.listen(port, (req, res) =>{
    console.log(`Iam listening to port ${port}`)
})
