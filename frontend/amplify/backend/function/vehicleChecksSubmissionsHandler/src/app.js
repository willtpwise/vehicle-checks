/* Amplify Params - DO NOT EDIT

Amplify Params - DO NOT EDIT */

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const { formatSubmissionToEmailBody } = require('./formatSubmissionToEmailBody');
const { getVehicleCallSign } = require('./getVehicleCallSign');
const api_key = process.env.MAILGUN_PRIVATE_API_KEY;
const domain = 'tech.williamwise.net';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

app.post('/submissions', async (req, res) => {

  const { submission } = req.body

  console.log('Received submission', JSON.stringify(submission, null, '\t'))

  if (!submission) {
    res.status(400).json({
      code: 'BadInput',
      message: 'Empty submission',
    })
  }

  const to = submission.recipients.splice(0, 1)
  const cc = submission.recipients.filter(recipient => !!recipient)
  const callSign = getVehicleCallSign(submission)

  const data = {
    to,
    cc,
    'h:Reply-To': submission.createdBy,
    from: 'Vehicle Checks <vehicle.checks@tech.williamwise.net>',
    subject: `${callSign} - Vehicle Check`,
    text: formatSubmissionToEmailBody(submission, callSign),
  };

  mailgun.messages().send(data, (error, body) => {

    if (error) {
      res.status(500).json({
        code: error.code,
        message: error.message,
      })
    } else {
      res.status(200).json({
        code: 'Success',
        message: 'Submission sent',
      })
    }
  });

});

app.listen(3000, function() {
  console.log("App started")
});

module.exports = app
