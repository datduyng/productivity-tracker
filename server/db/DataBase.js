var Sequelize = require('sequelize');
var models = require('./models');

module.exports = class DataBase {
  constructor(sync_force=false){
    this.models = {...models};
    this.connected = false;
    this.sync_force = sync_force;
  }
  async connect(){
    let $this = this;
    if( !this.sequelize ){
      this.sequelize = new Sequelize('database', process.env.DB_USER, process.env.DB_PASS, {
        host: '0.0.0.0',
        dialect: 'sqlite',
        pool: {
          max: 5,
          min: 0,
          idle: 10000
        },
          // Security note: the database is saved to the file `database.sqlite` on the local filesystem. It's deliberately placed in the `.data` directory
          // which doesn't get copied if someone remixes the project.
        storage: '.database.sqlite.db'
      });
    }


    await this.sequelize.authenticate()
      .then(err => {
        console.log('Connection to Database has been established successfully.');
        $this.connected = true;
        
        //initialize all model
        for(var model in this.models){
          $this.models[model] = $this.models[model]($this.sequelize, Sequelize);
        }
      })
      .catch(function (err) {
        $this.connected = false;
        console.log('Unable to connect to the database: ', err);
      });
    await this.sequelize
      .sync({force: $this.sync_force})
      .then(() => {
        if($this.sync_force){
          $this.defaultSetup();
        }
      })
  }

  async defaultSetup(){
    console.log('defaultSetup');
    let $this = this;
    var defaultUsers = [
      {name: 'test1', email: 'test1@test.com', password: 'test'},
      {name: 'test2', email: 'test2@test.com', password: 'test'}
    ];
    var defaultNotes = [
      {name: 'jounal1', content: 'nothing1', user_id: 1},
      {name: 'jounal2', content: 'nothing2', user_id: 2},
      {name: 'jounal3', content: 'nothing3', user_id: 2},
      {name: 'jounal4', content: 'nothing4', user_id: 1},
      {name: 'jounal5', content: 'nothing5', user_id: 1},
    ];
    
    
    await defaultUsers.forEach(user => {
      $this.models.user.create({
        name: user.name, email: user.email, password: user.password
      });     
    });
    await defaultNotes.forEach(note => {
      $this.models.note.create({
        name: note.name, content: note.content, user_id: note.user_id
      })
    }); 
    console.log('here');
  }


}