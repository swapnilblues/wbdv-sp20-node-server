const questions = require("./questions")
const questionsDao = require("../daos/questions.dao.server")

findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId)

findAllQuestions = () =>
    questionsDao.findAllQuestions()

module.exports = {
    findQuestionsForQuiz,
    findAllQuestions
}