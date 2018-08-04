const db = require("./connections");

module.exports = {
  getAll() {
    return db("user_input");
  },
  list() {
    return db("user_input");
  },
  read(userEmail) {
    return db("user_input")
      .select()
      .where("userEmail", userEmail);
    //   .first();
  },
  create(user) {
    return db("user_input")
      .insert(user)
      .returning("*")
      .then(record => record[0]);
  },
  update(userEmail, user) {
    return db("user_input")
      .update(user)
      .where("userEmail", userEmail)
      .returning("*")
      .then(record => record[0]);
  },
  delete(userEmail) {
    return db("user_input")
      .delete()
      .where("userEmail", userEmail)

  }
};
