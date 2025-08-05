import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectdb from './config/db.js';
import adminRouter from './routes/adminRoute.js';
import blogRouter from './routes/blogRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
connectdb();


app.get('/',(req,res) => {
    res.send('home page')
})
app.use('/api/admin',adminRouter)
app.use('/api/blog',blogRouter)


const PORT = process.env.PORT || 3000
app.listen(PORT,() => {
    console.log(`Server is Running at PORT at ${PORT}`)
})

export default app;

