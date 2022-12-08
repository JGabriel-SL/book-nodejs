module.exports = (app) => {
    // const User = app.models.user;

    const HomeController = {
      index: (req, res) => {
        res.render('home/index');
      },
      login: (req, res) => {
        const email = req.body.email;
        // console.log(req.body)
        const name = req.body.name;
        console.log(name, email);
        if (email && name) {
          const user = {
            email: req.body.email,
            name: req.body.name
          };
          user['contacts'] = [];
          req.session.user = user;
          res.redirect('/contacts');
        } else {
          res.redirect('/');
        }
      },
      logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
      }
    };
    return HomeController;
  };