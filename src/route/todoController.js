import models from '../model/models';

//POST create Todo
exports.createTodo = (req,res) => {

  const {title , description , tags} = req.body;

  if(!title||!description){
    return res.status(400).send('insert wrong');
  }

  //json -> string 후에 string -> json
  models.Todo.create({
    title : title,
    description : description,
    tags: JSON.stringify(tags)
  })
  .then(todo =>{
    todo.tags = JSON.parse(todo.tags);
    return res.status(200).json(todo);
  })
  .catch(error =>{
    return res.status(500).send(error);
  });
}


//GET todos
exports.getTodos = (req,res) => {
  models.Todo.findAll()
    .then(todos => res.json(todos));
};

//GET todo id
exports.getTodo = (req,res) => {

  const id = parseInt(req.params.todoId , 10);

  //validation incorrect id
  if(!id){
    return res.status(400).send('wrong id');
  }

  //해당 id의 todo 찾기
  models.Todo.findOne({
    where : {
      id : id
    }
  }).then(todo => {
    //validation id에 해당하는 할일을 찾을 수 없음
    if(!todo){
      return res.status(404).send('there is no Todo');
    }
    return res.status(200).json(todo);
  });
};
