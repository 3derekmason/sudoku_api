const express = require("express");
const router = require("./routes/router.js");
const cors = require("cors");

// mongodb+srv://derekmason:<password>@saor-blog.rxnmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Connected on port: ${PORT}`);
});
