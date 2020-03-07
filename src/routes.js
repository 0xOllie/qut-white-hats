const cipher = require('../controllers/cipher')
module.exports = (app) => {
  // get challenges
  app.get('/', cipher.getChallenge)
  app.get('/ch1', cipher.getChallenge)
  app.get('/ch2', cipher.getChallenge)
  app.get('/ch3', cipher.getChallenge)
  // check answers
  app.post('/ch1', cipher.checkAnswer)
  app.post('/ch2', cipher.checkAnswer)
  app.post('/ch3', cipher.checkAnswer)
}
