import { gql, makeExecutableSchema, mergeSchemas } from 'apollo-server-koa';
import { GraphQLDate } from 'graphql-iso-date';
import { merge } from 'lodash';
import { Container } from 'typedi';
import { buildSchemaSync } from 'type-graphql';

const ScalaraTypes = gql`
  scalar Date
`;

const scalarResolvers = {
  Date: GraphQLDate
};

const graphqlSchemaFromApollo = makeExecutableSchema({
  typeDefs: [ScalaraTypes],
  resolvers: merge(scalarResolvers)
});

const graphqlSchemaFromTypeGraphql = buildSchemaSync({
  resolvers: [`${__dirname}/**/*.resolver.ts`],
  validate: false,
  container: Container
});

export const graphqlSchema = mergeSchemas({
  schemas: [graphqlSchemaFromApollo, graphqlSchemaFromTypeGraphql]
});
