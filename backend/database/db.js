const aws  = require('aws-sdk');

// Configure the AWS SDK
aws.config.update({
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
    region: 'us-east'
});
  
// Create a DynamoDB client once
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports = docClient;