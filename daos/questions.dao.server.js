const questionsModel = require('../models/questions/question.model.server')

const findAllQuestions = () =>
    questionsModel.find()

module.exports = {
    findAllQuestions
}