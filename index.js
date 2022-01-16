const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const PORT = 3000;

const indexRouter = require("./routes/index");
const bookRouter = require("./routes/book");
const userRouter = require("./routes/user");

mongoose.connect(
    `mongodb+srv://username:${process.env.MONGODB_PW}@cluster0.dopig.mongodb.net/MyDatabase?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(morgan("dev"));

app.use(cors());

app.use(express.json());

app.use("/", indexRouter);
app.use("/book", bookRouter);
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`App is running on ${PORT}`));