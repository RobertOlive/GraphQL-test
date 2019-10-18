const {GraphQLServer, PubSub} =require("graphql-yoga") 
import resolvers from "./resolvers"
import typeDefs from "./types"


const pubsub = new PubSub()
const server = new GraphQLServer({typeDefs, resolvers, context:{pubsub}})

server.start(()=> console.log("server is running on localhost 4000!"))