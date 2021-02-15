import express from 'express'
import cleanUserInput from './../../../services/cleanUserInput.js'
import { Event } from './../../../models/index.js'
import objection from 'objection'
const { ValidationError } = objection

const eventsRouter = new express.Router()

eventsRouter.post('/', async (req, res) => {
  const { body } = req
  const cleanedFormData = cleanUserInput(body)
  try{
    const newEvent = await Event.query().insertAndFetch(cleanedFormData)
    return res.status(201).json({ event: newEvent })
  } catch(error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

eventsRouter.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const event = await Event.query().findById(id)
    return res.status(200).json({ event: event })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default eventsRouter
