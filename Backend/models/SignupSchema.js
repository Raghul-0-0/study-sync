const mdb = require("mongoose");

const signupSchema = mdb.Schema({
  userName: { type: "String", required: true, unique: true },
  password: { type: "String", required: true },
});

const signup_schema = mdb.model("signup", signupSchema);
module.exports = signup_schema;
