const e = require("express");
const NeDB = require("nedb");
let db = new NeDB({
  filename: "user.db",
  autoload: true,
});

module.express = (app) => {
  app.get("/users", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      users: [
        {
          name: "Kaua",
          email: "kaua.prado@gmail.com",
          id: "1",
        },
      ],
    });
  });

  app.post("/users", (req, res) => {
    db.insert(req.body, (err, user) => {
      if (err) {
        console.log("error: ${err}");
        res.status(400).json({
          error: err,
        });
      } else {
        res.status(200).json(user);
      }
    });
  });
};
