var {db, models} = require('../../db');

exports.get = (req, res, next) => {
    console.log('req.params.id', req.params.id);
    if(req.params.id && req.params.id != -1){
      console.log('find one');
      models.user.findOne({
        attributes: ['name', 'email'],
        where: {
          id: req.params.id,
        }
      }).then(user => {
        if( !user ) return res.status(404).json();
        return res.status(200).json(user);
      });
      return;
    }
  
    models.user.findAll({
      attributes: ['name', 'email']
    }).then(users => {
      return res.status(200).json(users); 
    });
}


exports.post = (req, res, next) => {
  models.user.create({
    name: req.query.name,
    email: req.query.email,
    password: req.query.password
  });
  res.sendStatus(200);
}