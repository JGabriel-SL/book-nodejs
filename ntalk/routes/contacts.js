module.exports = app => {
    const { contacts } = app.controllers;
    const auth = require('./../middleware/authenticator');
    
    app.get('/contacts', auth, contacts.index);
    app.get('/contacts/:id', auth, contacts.show);
    app.post('/contacts', auth, contacts.create);
    app.get('/contacts/:id/edit', auth, contacts.edit);
    app.put('/contacts/:id', auth, contacts.update);
    app.delete('/contacts/:id/delete', auth, contacts.destroy);
}