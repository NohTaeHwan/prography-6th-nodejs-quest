import models from '../model/models';

//POST create comment
exports.createComment = (req,res) =>{
  const {contents} = req.body;
  const todoId = req.params.todoId

  if(!todoId){
    return res.status(400).send('wrong todoId');
  }
  if(!contents){
    return res.status(400).send('insert wrong');
  }

  models.Comment.create({
    todoId : todoId,
    contents
  })
  .then(comment => {
    return res.status(200).json(comment);
  })
  .catch(error => {
    return res.status(500);
  });

}

//GET comment list
exports.getComments = (req,res) => {
  const todoId = req.params.todoId;

  if(!todoId){
    return res.status(400).send('wrong todoId');
  }

  models.Comment.findAll(
    {where : {todoId : todoId}})
    .then(comments => {
      return res.status(200).json(comments);
    })
    .catch(error => {
      return res.status(500);
    })
}

//GET comment
exports.getComment = (req,res) => {
  const todoId = req.params.todoId;
  const id = req.params.commentId;

  if(!todoId){
    return res.status(400).send('wrong todoId');
  }
  if(!id){
    return res.status(400).send('wrong id');
  }

  models.Comment.findOne({
    where : {id : id , todoId : todoId}
  })
  .then(comment => {
    return res.status(200).json(comment);
  })
  .catch(error => {
    return res.status(500);
  });
};


//PUT update comment
exports.updateComment = (req,res) =>{
  const contents = req.body.contents;
  const todoId = req.params.todoId;
  const id = req.params.commentId;

  if(!todoId){
    return res.status(400).send('wrong todoId');
  }
  if(!id){
    return res.status(400).send('wrong id');
  }
  if(!contents){
    return res.status(400).send('insert wrong');
  }

  models.Comment.update(
    { contents : contents } ,
    { where : {todoId : todoId, id: id}},
  )
  .then(() => {
    return models.Comment.findByPk(id);
  })
  .then(result => {
    return res.status(200).json(result);
  })
    .catch(error => {
      return res.status(500);
    });
};

//DELETE comment
exports.removeComment = (req,res) =>{
  const todoId = req.params.todoId;
  const id = req.params.commentId;

  if(!todoId){
    return res.status(400).send('wrong todoId');
  }
  if(!id){
    return res.status(400).send('wrong id');
  }

  models.Comment.destroy({
    where : {todoId : todoId , id : id}
  })
  .then(() => {
    return res.status(200).json({msg : 'success'});
  })
  .catch(error => {
    return res.status(500);
  });
};
