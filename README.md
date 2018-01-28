# RESTfulAPI 實作

## 資料庫
我用 [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/pricing)

有免費版本流量夠測試使用

# 下載之後
``app.js``  中 
```
mongoose.connect('mongodb://root:'+process.env.MONGO_ATLAS_PW+
'@node-rest-shop-shard-00-00-c5sqj.mongodb.net:27017,node-rest-shop-shard-00-01-c5sqj.mongodb.net:27017,node-rest-shop-shard-00-02-c5sqj.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin',{
    useMongoClient:true
})
```

和
``nodemon.json`` 中 ``MONGO_ATLAS_PW``


換上自己的即可


## /products
- /products:GET: 產品列表
- /products:POST: 產品新增
- /products/{id}:GET: 單一產品資訊
- /products/{id}:PATCH: 單一產品修改
- /products/{id}:DELETE: 單一產品刪除
<hr>

## /orders
- /orders:GET: 訂單列表
- /orders:POST: 訂單新增
- /orders/{id}:GET: 單一訂單資訊
- /orders/{id}:DELETE: 單一訂單取消

# 詳細解說可以參閱[這裡](https://blog.dandan.tw/2018/01/23/RESTfulAPIbynodejsexpress%E5%AF%A6%E6%88%B0/)
