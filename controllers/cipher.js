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
            res.status(200).send(ctfData.flags.challenge3.call)
            break
        case '/ch4':
            res.status(200).send(ctfData.flags.challenge4.call)
            break
        case '/ch5':
            res.status(200).send(ctfData.flags.challenge5.call)
            break
        case '/ch6':
            res.status(200).send(ctfData.flags.challenge6.call)
            break
        case '/ch7':
            res.status(200).send(ctfData.flags.challenge7.call)
            break
        case '/ch8':
            res.status(200).send(ctfData.flags.challenge8.call)
            break
        case '/ch9':
            res.status(200).send(ctfData.flags.challenge9.call)
            break
        case '/ch11':
            res.status(200).send(ctfData.flags.challenge11.call)
            break
        case '/ch12':
            res.status(200).send(ctfData.flags.challenge12.call)
            break
    }
}
//NOTE TO OLI
//Your old code wasn't working and was only returning challenge1's answer everytime. 
//I found the best thing do to was to hard code everything lol it works though
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
        case '/ch4':
            challenge = ctfData.flags.challenge4
            break
        case '/ch5':
            challenge = ctfData.flags.challenge5
            break
        case '/ch6':
            challenge = ctfData.flags.challenge6
            break
        case '/ch7':
            challenge = ctfData.flags.challenge7
            break
        case '/ch8':
            challenge = ctfData.flags.challenge8
            break
        case '/ch9':
            challenge = ctfData.flags.challenge9
            break
        case '/ch11':
            challenge = ctfData.flags.challenge11
            break
        case '/ch12':
            challenge = ctfData.flags.challenge12
            break
    }

    if (req.body.answer == challenge.response.plaintext){
        res.status(200).send(challenge.response)
    } else {
        res.status(200).send(ctfData.flags.wrong)
    }
}
