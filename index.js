const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/user");
const productsRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const ordersRoute = require("./routes/order");

dotenv.config();

mongoose
  .connect(process.env.MDB_URI)
  .then(() => console.log("MDB connected"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/products", productsRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", ordersRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Running");
});
