const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');


// router
const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')
const userRoutes = require('./api/routes/user')

mongoose.connect('mongodb://root:'+process.env.MONGO_ATLAS_PW+
'@node-rest-shop-shard-00-00-c5sqj.mongodb.net:27017,node-rest-shop-shard-00-01-c5sqj.mongodb.net:27017,node-rest-shop-shard-00-02-c5sqj.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin',{
    useMongoClient:true
})
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use('/upload',express.static('upload'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-Width, Content-Type, Accept, Authorization');
    if(req.method==='OPSTIONS'){
        res.header('Access-Control-Allow-Mehtods','PUT, POST,PATH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

//Routes which should handle requests
app.use('/products',productRoutes);
app.use('/orders',orderRoutes);
app.use('/user',userRoutes);

// errro control
app.use((req, res, next)=>{
    const error = new Error('Not found');
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports=app;
