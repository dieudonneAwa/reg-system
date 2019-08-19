import express from 'express';
import bodyParser from 'body-parser';
import router from './routers/users';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.use('/api', router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server running on port ${port}`));
