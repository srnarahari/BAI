let stripCntrl = require('../../controllers/strileCntrl/strikeCntrl');


module.exports = (app)=>{
  var default_url_path = '/api/v1/Stripe/';
  app.get(`${default_url_path}getBalance`,stripCntrl.getBalance);
  app.post(`${default_url_path}charge`,stripCntrl.getCharge);
}
