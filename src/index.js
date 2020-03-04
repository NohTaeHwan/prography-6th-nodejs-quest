import app from './app';
import model from './model/models';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

app.listen(PORT, HOST, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`server is running on ${HOST}:${PORT}`);

  model.Todo;
  model.sequelize.sync({force : true})
    .then(() => {
      console.log('Database sync success!');
    });
});
