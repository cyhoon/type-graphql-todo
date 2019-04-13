import 'reflect-metadata';

import * as Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { buildSchemaSync } from 'type-graphql';
import { TodoResolver } from './graphql/todo/todo.resolver';
import connectMongoDB from './database/connection';

const schema = buildSchemaSync({
  resolvers: [TodoResolver],
  validate: false
});

class Server {
  private app: Koa;
  private apolloServer: ApolloServer;

  constructor() {
    this.app = new Koa();
    this.apolloServer = new ApolloServer({ schema });

    this.setApolloServer();
  }

  private setApolloServer() {
    this.apolloServer.applyMiddleware({ app: this.app });
  }

  private async connectDatabase() {
    await connectMongoDB();
  }

  public async runServer() {
    await this.connectDatabase();

    this.app.listen(3000, () => {
      console.log('Server is running to http://localhost:3000');
    });
  }
}

export default Server;
