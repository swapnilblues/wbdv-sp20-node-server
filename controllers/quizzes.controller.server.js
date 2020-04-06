const quizzesService = require("../services/quizzes.service.server")
module.exports = function (app) {

    app.get('/api/quizzes/:qid/questions', (req, res) =>
        quizzesService.findQuizById(req.params['qid'])
            .then(quiz => res.send(quiz.questions))
    )

    app.get('/api/quizzes/:qid', (req, res) =>
        quizzesService.findQuizById(req.params['qid'])
            .then(quiz => res.send(quiz))
    )

    app.get('/api/quizzes', (req, res) =>
        quizzesService.findAllQuizzes()
            .then(allQuizzes => res.send(allQuizzes)))
}