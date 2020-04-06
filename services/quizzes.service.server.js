const quizzesDao = require('../daos/quizzes.dao.server')

findAllQuizzes = () => quizzesDao.findAllQuizzes()

findQuizById = (quizId) =>
    quizzesDao.findQuizById(quizId)
        .populate('questions')

module.exports = {
    findAllQuizzes,
    findQuizById
}