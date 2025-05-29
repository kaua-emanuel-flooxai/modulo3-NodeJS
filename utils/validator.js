modules.exports = {
  user: (app, req, res) => {
    req.assert("name", "O nome é obrigatório").notEmpty();
    req.assert("email", "O email esta invalido").notEmpty().isemail();

    let errors = req.vailidationErrors();

    if (errors) {
      app.utils.error.send(errors, req, res);
      return false;
    } else {
      return false;
    }
  },
};
