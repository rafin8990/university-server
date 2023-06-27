import mongoose from 'mongoose'
import { errorlogger, logger } from './Shared/logger'
import app from './app'
import config from './config'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`🛢   Database is connected successfully`)

    app.listen(config.port, () => {
      logger.info(`Application  listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error('Failed to connect database', err)
  }
}
main()
