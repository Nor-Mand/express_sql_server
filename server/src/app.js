import express from 'express'
import config from './config'
import contactsRoutes from "./routes/contactsRoutes";

const app = express()


// Settings
app.set('port', config.port)

app.use(contactsRoutes)

export default app