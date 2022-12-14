module.exports = app => {
    const ChatController = {
        index: (req, res) => {
            const result = {email: req.params.email, user: req.session.user};
            res.render('chat/index', result);
        }
    }
    return ChatController;
};