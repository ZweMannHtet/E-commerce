const express = require('express');
const router = express.Router();
const app = express();
const logger = require('pino')();

const port = 3000;
app.use(express.urlencoded( { extended: true } ));

app.get('/healthcheck', async (req,res)=> {

    const checking = {
        messsage: 'Ok',
    };
    try {
        res.send(checking);
    } catch (error) {
        checking.messsage = error;
        res.status(503).send();
    }
});
logger.info('Success')
app.listen(port);


module.exports = router;