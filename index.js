const app = require("./server/server");
const mongoose = require("mongoose")
const dbConfig = require("./config/database")

const port = process.env.PORT || 8080;
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
    }).then(() => {
      console.log("Successfully connected to the database");
    }).catch(err => {
      console.log('Could not connect to the database.', err);
      process.exit();
    });
app.listen(port, () => {
    console.log(`Server: listening on port ${port}`);
});