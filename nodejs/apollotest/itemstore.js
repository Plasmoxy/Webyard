const { promisify } = require("util")
const fs = require("fs")
const bettersqlite = require("better-sqlite3")
const { ApolloServer, gql } = require('apollo-server')

const db = bettersqlite("./sqlite.db")

const resolvers = ({
    Query: {
        allItems: () => db.prepare("select * from items").all(),
        item: (p, a) => db.prepare("select * from items where id=? or name=? or price=?").get(a.id, a.name, a.price)
    },
    Mutation: {
        createItem: (parent, args) => {
            let info = db.prepare("insert into items (name, price) values (?, ?)").run(args.name, args.price)
            return info.lastInsertRowid
        }
    }
})

const server = new ApolloServer({ typeDefs: gql(fs.readFileSync("schema.gql", "utf-8")), resolvers });

server.listen().then(({ url }) => {
    console.log(`Graphql sql 🚀  Server ready at ${url}`);
});