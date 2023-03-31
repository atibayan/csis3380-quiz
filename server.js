const express = require('express')
const mongoose = require('mongoose')
const port = process.env.PORT || 7000
const app = express()

mongoose.connect(`mongodb+srv://tempuser:123@cluster0.f9d6o.gcp.mongodb.net/Exam`)
  .then(()=> console.log(`Successfully connected to database`))

const quizSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sid: {
    type: String,
    required: true
  }
})

const QuizModel = mongoose.model(`Quizes`, quizSchema)

app.get('/test', async(req, res)=>{
  const docs = await QuizModel.find();
  console.log(docs)
  res.send(`read successfully: ${docs}`)
})

app.get('/', async (req, res)=>{
  const docs = await QuizModel.create({
    name: 'Mia Tibayan',
    sid: '300367726'
  })
  console.log(docs)
  res.send(`<h2>Document added! Document ID: ${docs._id}</h2>`)
})

app.listen(port, (err)=>{
  if(err) console.log(err)
  else console.log(`Server listening on port ${port}`)
})