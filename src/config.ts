export const APP_CONFIG = {
  accessTokenExpires: '1h',
  refreshTokenExpires: '8h',
  jwtSecret: 'MyS3cr3tK3Y',
  jwtSession: {
    session: false
  },
  databaseURL:
    'mongodb://admin:admin@nest-rest-api-shard-00-00-2rnby.mongodb.net:27017,nest-rest-api-shard-00-01-2rnby.mongodb.net:27017,nest-rest-api-shard-00-02-2rnby.mongodb.net:27017/chat?ssl=true&replicaSet=nest-rest-api-shard-0&authSource=admin'
    // 'mongodb://balagan:PxzdUr3eBDKGU3ve@nest-rest-api-shard-00-00-2rnby.mongodb.net:27017,nest-rest-api-shard-00-01-2rnby.mongodb.net:27017,nest-rest-api-shard-00-02-2rnby.mongodb.net:27017/chat?ssl=true&replicaSet=nest-rest-api-shard-0&authSource=admin'
};


// PxzdUr3eBDKGU3ve
//balagan 

// mongorestore --host Cluster0-shard-0/cluster0-shard-00-00-48agi.mongodb.net:27017,cluster0-shard-00-01-48agi.mongodb.net:27017,cluster0-shard-00-02-48agi.mongodb.net:27017 --ssl --username balagan --password <PASSWORD> --authenticationDatabase admin 
// mongodump --host Cluster0-shard-0/cluster0-shard-00-00-48agi.mongodb.net:27017,cluster0-shard-00-01-48agi.mongodb.net:27017,cluster0-shard-00-02-48agi.mongodb.net:27017 --ssl --username balagan --password <PASSWORD> --authenticationDatabase admin --db <DATABASE>