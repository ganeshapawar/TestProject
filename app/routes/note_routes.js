// routes/note_routes.js

module.exports = function(app, db) {
    app.get('/notes', (req, res) => {
      // You'll create your note here.
      console.log(req.body)
      res.send('Hello World')
    });
  };