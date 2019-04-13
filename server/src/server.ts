import 'reflect-metadata';

import * as Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { buildSchemaSync } from 'type-graphql';
import { TodoResolver } from './graphql/todo/todo.resolver';

const schema = buildSchemaSync({
  resolvers: [TodoResolver],
  validate: false
});

const app = new Koa();

const apolloServer = new ApolloServer({ schema });
apolloServer.applyMiddleware({ app });

app.listen(3000, () => {
  console.log('Server is listenning to port 3000');
});
