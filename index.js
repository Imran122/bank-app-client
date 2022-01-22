const express = require('express')
const { MongoClient } = require('mongodb');
const app = express()
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 5000

//configure midleware cors
app.use(cors());
app.use(express.json());


//connect to db
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ljci6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//stripe related stuff


async function run() {
    try {
        await client.connect();
        const database = client.db('UserDataDb');
        const usersCollection = database.collection('userList');





        //api for save product from admin dashboard
        app.post('/userList', async (req, res) => {
            const saveUser = req.body;
            const result = await userssCollection.insertOne(saveUser)
            res.json(result)
        });

        /*         //GET APi to get data
                app.get('/products', async (req, res) => {
                    const cursor = productsCollection.find({});
                    const products = await cursor.toArray();
                    const count = await cursor.count();
                    res.send({
        
                        count,
                        products
                    })
                });
         */


        console.log('db connected');
    }
    finally {

        //await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})