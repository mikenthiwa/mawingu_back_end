import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

export default () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.get('*', (req, res) => {
    return res.status(400).json({
      success: 'false',
      message: 'Route does not exist'
    })
  });
  return app;
}
