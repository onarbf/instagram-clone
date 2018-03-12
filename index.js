import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import {makeExecutableSchema} from 'graphql-tools';

import typeDefs from './schemas';
import resolvers from './resolvers';
import models from './models';

mongoose.Promise = global.Promise;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const IP = process.env.IP || HOST;
const HOSTPORT = '27017';
const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context:{
    models
  } }));
app.get('/graphiql', graphiqlExpress({endpointURL: '/graphql' }));
app.get('/', (req,res)=>{
  res.send('works');
});
mongoose.connect(`mongodb://${IP}:${HOSTPORT}/instagram-clone`,()=>{
  console.log('Connected to MongoDB');
});
app.listen(PORT,HOST,()=>{console.log('Running GraphQl Server... on port ' + PORT +' '+ HOST );});
