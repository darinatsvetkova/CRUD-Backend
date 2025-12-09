const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");   

const app = express();
app.use(cors());
app.use(bodyParser.json());


mongoose.connect("mongodb://127.0.0.1:27017/shoppinglist")
  .then(() => console.log("MongoDB připojeno"))
  .catch(err => console.error("Chyba MongoDB:", err));


app.use("/shoppingList/create", require("./routes/shoppingList/create"));
app.use("/shoppingList/get", require("./routes/shoppingList/get"));
app.use("/shoppingList/list", require("./routes/shoppingList/list"));
app.use("/shoppingList/update", require("./routes/shoppingList/update"));
app.use("/shoppingList/archive", require("./routes/shoppingList/archive"));
app.use("/shoppingList/delete", require("./routes/shoppingList/delete"));

app.use("/membership/list", require("./routes/membership/list"));
app.use("/membership/add", require("./routes/membership/add"));
app.use("/membership/remove", require("./routes/membership/remove"));
app.use("/membership/leave", require("./routes/membership/leave"));

app.use("/item/list", require("./routes/item/list"));
app.use("/item/add", require("./routes/item/add"));
app.use("/item/delete", require("./routes/item/delete"));
app.use("/item/complete", require("./routes/item/complete"));

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
