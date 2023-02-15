const express = require('express');
const cors = require('cors');
const connectDB =  require('./Config/Db');
require('dotenv').config()

const port = process.env.REACT_APP_PORT;
const app = express();
connectDB();
app.use(express.json())
app.use(cors());
app.use('/api',require('./Routes/route'));

app.listen(port , ()=>{
    console.log(`Server is running on ${port} ...`);
})