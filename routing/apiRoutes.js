

var friendsData = require("../app/data/friends");



module.exports = function(app) {

  // ---------------------------------------------------------------------------

  app.get("/api/tables", function(req, res) {
    res.json(friendsData);
  });
}