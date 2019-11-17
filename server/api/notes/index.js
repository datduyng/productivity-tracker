var {db, models} = require('../../db');


exports.get = (req, res, next) => {
  console.log('req.params.id', req.params.id);
  if(req.params.id && req.params.id != -1){
    models.note.findOne({
      attributes: ['id', 'name', 'content', 'createdAt', 'updatedAt'],
      where: {
        id: req.params.id,
      }
    }).then(note => {
      if( !note ) return res.status(404).json();
      return res.status(200).json(note);
    });
    return;
  }

  models.note.findAll({
    attributes: ['id', 'name', 'content', 'user_id', 'createdAt', 'updatedAt']
  }).then(notes => {
    return res.status(200).json(notes); 
  });
}

exports.post = (req, res, next) => {
  models.note.create({
    name: req.query.name,
    content: req.query.content
  });
  res.sendStatus(200);
}

exports.getByDate = (req, res, next) => {
}

exports.getByDateRange = (req, res, next) => {
}


exports.put = (req, res, next) => {
  console.log('update', req.params.id);
  models.note.update({
    name: req.query.name,
    content: req.query.content
  },{
    where: {
      id: req.params.id
    }
  });
  res.sendStatus(200);
}

exports.delete = (req, res, next) => {
    if(req.params.id){
        console.log('deleted', req.params.id);
        if(res) return res.status(200).json({message:'deleted'});
        else return 200;
    }
    if(res) return res.status(500).json({message:'not deleted'});
    return 500;
}
