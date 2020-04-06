const mongoose = require('mongoose')
const questionsSchema = require('./questions.schema.server')
const questionModel = mongoose.model(
    'QuestionModel',
    questionsSchema
)
module.exports = questionModel

