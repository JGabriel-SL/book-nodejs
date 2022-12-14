module.exports = (app) => {
    const ContactsController = {
      index: (req, res) => {
        const user = req.session.user;
        const contacts = user.contacts;
        const params = {user: user, contacts : contacts};
        res.render('contacts/index', params);
      },
      create: (req, res) => {
        const contact = req.body.contact;
        const user = req.session.user;
        user.contacts.push(contact);
        console.log(contact)
        res.redirect('/contacts');
      },
      show: (req, res) => {
        const id = req.params.id;
        const contact = req.session.user.contacts[id];
        const params = {contact: contact, id: id};
        res.render('contacts/show', params)
      },
      edit: (req, res) => {D
        const id = req.params.id;
        const user = req.session.user;
        const contact = user.contacts[id];
        const params = {id: id, user: user, contact: contact};
        res.render('contacts/edit', params);
      },
      update: (req, res) => {
        const contact = req.body.contact;
        const user = req.session.user;
        user.contacts[req.params.id] = contact;
        res.redirect('/contacts');
      },
      destroy: (req, res) => {
        const user = req.session.user;
        const id = req.params.id;
        user.contacts.splice(id, 1);
        res.redirect('/contacts');
      }
    };
    return ContactsController;
  };