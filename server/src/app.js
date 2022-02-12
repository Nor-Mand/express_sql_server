import express from 'express'
import config from './config'

const app = express()
let port = 5000;
// Settings
app.set('port', config.port)
app.set('port', config.port)

export default app