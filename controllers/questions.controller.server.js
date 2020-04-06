
const questionsService = require("../services/questions.service.server");

module.exports = (app) => {
    // app.get("/api/quizzes/:qzid/questions", (req,res) => {
    //     const quizId = req.params['qzid']
    //     const questions = questionsService.findQuestionsForQuiz(quizId)
    //     res.json(questions)
    // })

    app.get('/api/questions', (req,res) => {
        questionsService.findAllQuestions()
            .then(allQuestions => res.send(allQuestions))
    } )
}
