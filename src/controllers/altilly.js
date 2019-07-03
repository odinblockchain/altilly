const request = require('request');
module.exports = {
  async postWithdraw(req, res) {
    var options = {
      url: req.body.altillyurl
    }
    auth = "Basic " + new Buffer.from(req.body.username + ":" + req.body.password).toString("base64")
    request.post(
      {
        url: options.url,
        headers: {
          "Authorization": auth
        },
        json:
        {
          currency: req.body.currency,
          amount: req.body.amount,
          address: req.body.address,
          autoCommit: true
        }
      },
      function (error, response, body) {
        if (error) {
          console.log(error)
        }
        if (response.statusCode == 400) //bad request
        {
          res.status(400).json({ error: body.error.message })
        }
        // Do more stuff with 'body' here
        res.status(200).json({ withdrawal: body })
      }
    )
  },
  async postMarketbuy(req, res) {
    var options = {
      url: req.body.altillyurl
    }
    auth = "Basic " + new Buffer.from(req.body.username + ":" + req.body.password).toString("base64")
    request.post(
      {
        url: options.url,
        headers: {
          "Authorization": auth
        },
        json:
        {
          symbol: "ODINBTC",
          side: "buy",
          type: "market",
          quantity: req.body.quantity,
          timeInForce: "GTC"
        }
      },
      function (error, response, body) {
        if (error) {
          console.log(error)
        }
        if (response.statusCode == 400) //bad request
        {
          res.status(400).json({ error: body.error.description })
          return
        }
        // Do more stuff with 'body' here
        res.status(200).json({ marketbuy: body })

        // return body
      }
    )
  },
  async postLimitbuy(req, res) {
    var options = {
      url: req.body.altillyurl
    }
    auth = "Basic " + new Buffer.from(req.body.username + ":" + req.body.password).toString("base64")
    request.post(
      {
        url: options.url,
        headers: {
          "Authorization": auth
        },
        json:
        {
          symbol: "ODINBTC",
          side: "buy",
          type: "limit",
          quantity: req.body.quantity,
          price: req.body.price,
          timeInForce: "GTC"
        }
      },
      function (error, response, body) {
        if (error) {
          console.log(error)
        }
        if (response.statusCode == 400) //bad request
        {
          res.status(400).json({ error: body.error.description })
          return
        }
        // Do more stuff with 'body' here
        res.status(200).json({ marketbuy: body })

        // return body
      }
    )
  },
  async postLimitsell(req, res) {
    var options = {
      url: req.body.altillyurl
    }
    auth = "Basic " + new Buffer.from(req.body.username + ":" + req.body.password).toString("base64")
    request.post(
      {
        url: options.url,
        headers: {
          "Authorization": auth
        },
        json:
        {
          symbol: "ODINBTC",
          side: "sell",
          type: "limit",
          quantity: req.body.quantity,
          price: req.body.price,
          timeInForce: "GTC"
        }
      },
      function (error, response, body) {
        if (error) {
          console.log(error)
        }
        if (response.statusCode == 400) //bad request
        {
          res.status(400).json({ error: body.error.description })
          return
        }
        // Do more stuff with 'body' here
        res.status(200).json({ marketbuy: body })

        // return body
      }
    )
  },
  async getPriceInfo(req, res) {
    request(req.body.altillyurl, function (err, priceres) {
      if (err) {
        console.dir(err)
        return
      }
      res.status(200).json(JSON.parse(priceres.body))
    })
  },
  async getAllOrders(req, res) {
    var options = {
      url: req.body.altillyurl
    }
    auth = "Basic " + new Buffer.from(req.body.username + ":" + req.body.password).toString("base64")
    request.get(
      {
        url: options.url,
        headers: {
          "Authorization": auth
        }
      },
      function (error, response, body) {
        if (error) {
          console.log(error)
        }
        if (response.statusCode == 400) //bad request
        {
          res.status(400).json({ error: body.error.description })
          return
        }
        // Do more stuff with 'body' here
        res.status(200).json.parse(body)

        // return body
      }
    )
  },
  async getAllBalances(req, res) {
    var options = {
      url: req.body.altillyurl
    }
    auth = "Basic " + new Buffer.from(req.body.username + ":" + req.body.password).toString("base64")
    request.get(
      {
        url: options.url,
        headers: {
          "Authorization": auth
        }
      },
      function (error, response, body) {
        if (error) {
          console.log(error)
        }
        if (response.statusCode == 400) //bad request
        {
          res.status(400).json({ error: body.error.description })
          return
        }
        // Do more stuff with 'body' here
        res.status(200).json(JSON.parse(body))

        // return body
      }
    )
  },
  async accountTransactions(req, res) {
    var options = {
      url: req.body.altillyurl
    }
    auth = "Basic " + new Buffer.from(req.body.username + ":" + req.body.password).toString("base64")
    request.get(
      {
        url: options.url,
        headers: {
          "Authorization": auth
        },
        json:
        {
          currency: req.body.currency
        }
      },
      function (error, response, body) {
        if (error) {
          console.log(error)
        }
        if (response.statusCode == 400) //bad request
        {
          res.status(400).json({ error: body.error.description })
          return
        }
        // Do more stuff with 'body' here
        res.status(200).json({ accountWithdrawals: body })

        // return body
      }
    )
  }
}
