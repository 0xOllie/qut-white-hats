const ctfData = require('../config/flags')

exports.getChallenge = function (req, res) {
    switch(req.route.path) {
        case '/ch1':
            res.status(200).send(ctfData.flags.challenge1.call)
            break
        case '/ch2':
            res.status(200).send(ctfData.flags.challenge2.call)
            break
        case '/ch3':
            res.status(200).send(ctfData.flags.challenge2.call)
            break
    }
}

exports.checkAnswer = function (req, res) {
    let challenge
    switch(req.route.path) {
        case '/ch1':
            challenge = ctfData.flags.challenge1
            break
        case '/ch2':
            challenge = ctfData.flags.challenge2
            break
        case '/ch3':
            challenge = ctfData.flags.challenge3
            break
    }

    if (req.body.answer == challenge.response.plaintext){
        res.status(200).send(ctfData.flags.challenge1.response)
    } else {
        res.status(200).send(ctfData.flags.wrong)
    }
}