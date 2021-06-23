import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube_ver2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log("DB Error", error);
db.on("error", handleError); // 에러가 뜨면 console.log
db.once("open", handleOpen); // once는 오로지 한번만
