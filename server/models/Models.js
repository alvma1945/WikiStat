const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://alvma1945:codesmith@cluster0.tea1x.mongodb.net/soloproject?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'soloproject'
  })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

    const Schema = mongoose.Schema;

    const articleSchema = new Schema({
        article: String,
        views: Number,
        link: String,
        search_date: Date,
        start_date: Date,
        end_date:Date,
        notes: String
      });
                                        //'articles' is the collection name
      const Articles = mongoose.model('articles', articleSchema);

      module.exports = Articles
      