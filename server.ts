import mongoose from 'mongoose'

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1.27017/test')
    console.log(`Database connected successfully`)
  } catch (error) {
    console.log(`Failed to connect database `, error)
  }
}
main()
