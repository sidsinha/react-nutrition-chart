const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors')
const uuid = require('uuid/v4');
const PORT = 3600;

const typeDefs = `
    input NewItemInput {
        name: String
        calories: Int
        fat: Int
        carbs: Int
        protein: Int
    }
    type Dessert {
        id: ID!
        name: String
        calories: Int
        fat: Int
        carbs: Int
        protein: Int
    }
    type ItemInput {
        name: String
    }
    type Query {
        getItems: [ Dessert ]
    }
    type Mutation {
        deleteItem(ids: [String]!): [ Dessert ],
        addItem(item: NewItemInput): [ Dessert ],
        sortItem(sortField: String!, sortBy: String): [ Dessert ],
        resetData: [ Dessert ]
    }
`;

const allOriginalData = {};
let desserts = {};

const addNew = (quote, newItem=false) => {
    const id = uuid();
    if(!newItem) allOriginalData[id] = { ...quote, id };
    return desserts[id] = { ...quote, id };
};
addNew({ name: "Oreo", calories: 437, fat: 18, carbs: 63, protein: 4 });
addNew({ name: "Nougat", calories: 308, fat: 19, carbs: 9, protein: 37 });
addNew({ name: "Marshmallow", calories: 318, fat: 3, carbs: 81, protein: 2 });
addNew({ name: "Lollipop", calories: 398, fat: 2, carbs: 98, protein: 0 });
addNew({ name: "KitKat", calories: 518, fat: 26, carbs: 65, protein: 60 });


const resolvers = {
    Query: {
       getItems: () => Object.values(desserts)
    },
    Mutation: {
        addItem: async (parent, { item }) => {
            addNew(item, true);
            return Object.values(desserts);
        },
        deleteItem: async (parent, { ids }) => {   
            ids.forEach(id => {
                delete desserts[id];
            });
            return Object.values(desserts);
        },
        sortItem: async (parent, { sortField, sortBy }) => {
            const itemArr = Object.values(desserts);
            if(sortBy === "DESC") {
                itemArr.sort(function (a, b) {
                    return a[sortField] > b[sortField] ? -1 : 1
                });
            } else {
                itemArr.sort(function (a, b) {
                    return a[sortField] < b[sortField] ? -1 : 1
                });
            }

            return Object.values(itemArr);
        },
        resetData: async (parent, { }) => {
            desserts = {...allOriginalData};
            return Object.values(desserts);
        },
    } 
};


const app = express();
app.use(cors());

const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({
    app,
    path: '/graphql'
});

app.listen(PORT, () => {
  console.log(`Server ready at ${PORT} ${server.graphqlPath}`);
});