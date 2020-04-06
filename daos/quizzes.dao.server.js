const quizzesModel = require('../models/quizzes/quizzes.model.server')
// const questionModel = require('../models/questions/question.model.server')
const findAllQuizzes = () =>
    quizzesModel.find()
        .populate('questions')

const findQuizById = (quizId) => quizzesModel.findById(quizId)

const createQuiz = (quiz) => quizzesModel.create(quiz)

module.exports = {
    findAllQuizzes,
    findQuizById,
    createQuiz
}