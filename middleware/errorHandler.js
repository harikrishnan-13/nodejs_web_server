const {logEvents} = require('./logEvents');

const errorHandler = (err,req,res,next)=>{
    logEvents(`${err.name}:${err.message}`, 'errLog.txt');
    console.error(err.Stack);
    res.status(500).send(err.message);
    next();
}

module.exports = errorHandler;