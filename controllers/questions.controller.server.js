const questionsService = require("../services/questions.service.server");
const quizzesService = require("../services/quizzes.service.server")

module.exports = (app) => {

    app.get('/api/quizzes/:qid/questions', (req, res) =>
        quizzesService.findQuizById(req.params['qid'])
            .then(quiz => res.send(quiz.questions))
    )

    app.get('/api/questions', (req,res) => {
        questionsService.findAllQuestions()
            .then(allQuestions => res.send(allQuestions))
    } )

    app.get('/api/questions/:qid', (req, res) =>
        questionsService.findQuestionById(req.params['qid'])
            .then(question => res.json(question)))

}
