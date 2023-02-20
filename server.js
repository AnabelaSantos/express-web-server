const express = require("express"); //importing library from the node module

const app = express();
const port = 3000; //5000 for backend RESTful APIs, 3000 for front end

app.use(express.static("public")); //express.static is an express method for serving static files

app.listen(port, () => {
  console.log(`listening on hppt://localhost${port}`);
});
