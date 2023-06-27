import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { UserRoutes } from './app/Modules/user/user.routes'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/users', UserRoutes)

app.get('/', async (req: Request, res: Response) => {
  res.send('University Server successfully connected')
})
app.use(globalErrorHandler)

export default app
