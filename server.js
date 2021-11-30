app.get("/", function(req, res) {
    res.json(path.join(__dirname, "index.html"));
  });

app.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});