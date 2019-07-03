const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const altilly = require('./controllers/altilly')
// const isAuthenticated = require('./policies/isAuthenticated')
module.exports = (app) => {
  app.post('/withdraw',altilly.postWithdraw)
  app.post('/marketbuy',altilly.postMarketbuy)
  app.post('/priceinfo',altilly.getPriceInfo)
  app.post('/getallorders',altilly.getAllOrders)
  app.post('/getallbalances',altilly.getAllBalances)
  app.post('/limitbuy',altilly.postLimitbuy)
  app.post('/limitsell',altilly.postLimitsell)
  app.post('/accounttransactions',altilly.accountTransactions)
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
  app.post('/login', AuthenticationController.login)
  app.get('/users', AuthenticationController.findall)

}
