const express = require("express");
const app = express();
const PORT = 6969;
const schema = require("./Schemas");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
