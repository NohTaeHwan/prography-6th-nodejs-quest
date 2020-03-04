import Sequelize from 'sequelize';

const sequelize = new Sequelize('prography_questdb','root','0000',{
  host : 'localhost',
  dialect : 'mysql'
});

const Todo = sequelize.define('todo',{
  title: {
    type : Sequelize.STRING,
    allowNull : false
  },
  description: {
    type : Sequelize.STRING,
    allowNull : false
  },
  isCompleted: {
    type : Sequelize.BOOLEAN,
    allowNull : false,
    defaultValue : false
  },
  tags: {
    type: Sequelize.STRING,
  }
});

const Comment = sequelize.define('comment',{
  contents: {
    type : Sequelize.STRING,
    allowNull : false
  }
});

Comment.belongsTo(Todo);

module.exports = {
  sequelize: sequelize,
  Todo: Todo,
  Comment: Comment
}
