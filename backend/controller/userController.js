const db = require("../database/db");

const getUserByName = async (name) => {
    const params = {
      TableName: 'users', 
      IndexName: 'username',
      KeyConditionExpression: 'name = :name',
      ExpressionAttributeValues: {
        ':name': name
      }
    };
    try {
      const data = await db.get(params).promise();
      return data.Item;
    } catch (error) {
      console.error('Error retrieving user:', error);
      //throw new Error('Failed to retrieve user');
    }
};

const getUser = async (req, res, next) => {
    const user = await getUserByName(req.params.username);
    res.send(user);
}


  
module.exports = {
    getUser
}
