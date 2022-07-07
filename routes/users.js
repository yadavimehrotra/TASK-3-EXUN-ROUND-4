const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("user list");
});

router.get("/new", (req, res) => {
  res.send("User new form");
});

router.route("/:id").get((req, res) => {
  console.log(req.user);
  res.send(` ${req.params.id}`);
});
// .put((req, res) => {
//   //   req.params.id;
//   res.send(`Update user with id ${req.params.id}`);
// })
// .delete((req, res) => {
//   //   req.params.id;
//   res.send(`Delete user with id ${req.params.id}`);
// });

// const users = [{ name: "Kyle" }, { name: "Sally" }];

// router.param("id", (req, res, next, id) => {
//   req.user = users[id];
//   next();
// });

module.exports = router;
