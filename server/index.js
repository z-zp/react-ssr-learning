import express from 'express';
import {render} from './utils'
const app = express();
app.use(express.static('public'))

app.get('/api/number', function(req, res) {
    res.json({"data":{"number":Math.floor(Math.random()*10)}})
});
app.get('*', function(req, res) {
    res.send(render(req))
});

app.listen(3000)