import mongoose from 'mongoose'

export { Flight }

const Schema = mongoose.Schema

const flightSchema = new Schema(
  {
    airline: {type: String, enum: ['American', 'Southwest', 'United'] },
    airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'] },
    flightNo: {type: Number, min: 10, max: 9999},
    departs: Date,
  },
  { timestamps: true }
)

const Flight = mongoose.model('Flight', flightSchema)
