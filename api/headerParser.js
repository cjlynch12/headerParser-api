module.exports = function (app) {
  app.route('/headerParser')
    .get(function(req,res) {
      var ip = req.headers['x-forwarded-for'].split(',')[0];
      var language = req.headers['accept-language'].split(',')[0];
      var OS = req.headers['user-agent'].split(',')[0].split('(')[1].split(';')[0];
      var info = {
        'ipAddress' : ip,
        'language' : language,
        'operating-system' : OS,
      };
      res.send(info);
  }) 
}