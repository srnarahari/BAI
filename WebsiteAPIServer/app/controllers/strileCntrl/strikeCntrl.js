const stripe = require("stripe")("sk_test_00ew7OQC3FcLeT2PbScvyuTz00dYgjKCWv");
var CustomerModel = require('mongoose').model('customerModel');

exports.getBalance = (req,res)=>{
  stripe.tokens.create({
    card: {
      number: '4242424242424242',
      exp_month: 12,
      exp_year: 2020,
      cvc: '123'
    }
  }, function(err, token) {
    console.log(err,"<----- err========5555555response ---------> ",token);
    stripe.charges.create({
      amount: 2000,
      currency: "usd",
      source: token.id, // obtained with Stripe.js
      metadata: {'order_id': '6735'}
    },(err,response)=>{
      console.log(err,"<----- err========response ---------> ",response);
    });
  });


  // stripe.balance.retrive((err,balance)=>{
  //   console.log('balance',balance)
  // })
}

exports.getCharge = function(req, res, next) {
  console.log('/charge req.body', req.body)
  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer => stripe.charges.create({
    amount: req.body.amount,
    description: 'Web Development Ebook',
    currency: 'usd',
    customer: customer.id
  }))
  .then(charge => {
    console.log('charge', charge)
    //res.render('success')
    //res.status(200);
    //res.send();
    updateCustomerTransaction(req, res, charge)
  })
}

function updateCustomerTransaction(req, res, charge) {
  // body...
  console.log('updateCustomerTransaction', req.body.stripeEmail)
  var cursor = CustomerModel;
    if (!cursor){
        return next(new restify.errors.InternalServerError('Model instance(s) is not defined'));
    }else{
        cursor.findOneAndUpdate({ email: req.body.stripeEmail },{ "$push": { "transactions": charge } },function (err, th) {
            // console.log(insertedArticle);
            if (err) {
                return next(new restify.errors.InternalServerError(err));
            } else {
                res.status(200);
                res.send();
            }
        });
    }
}
