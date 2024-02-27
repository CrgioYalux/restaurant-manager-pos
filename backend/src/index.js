import http from 'http'
import cors from 'cors'
import express from 'express'

const app = express()
app.disable('x-powered-by')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/ping', (req, res) => {
	res.status(200).send('pong')
})

const server = http.createServer(app)
const port = process.env.PORT || 4000;

server.listen(port, () => {
	console.log(`Server listening on port :${port}`)
})
