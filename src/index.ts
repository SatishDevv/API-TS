import  express  from 'express';
import swaggerUi from 'swagger-ui-express';
import  userAuthRouter  from './router/userAuth.router'
import swaggerDoc from './swagger/swagger_output.json'
import dotenv from 'dotenv';


const app = express();
app.use(express.json());
dotenv.config();

const PORT:number = parseInt(process.env.PORT as string ) || 8080; 

app.use(express.json());
// It an swagger API 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(`/auth`, userAuthRouter);

// app.get('/ping',(req, res )=>{
//     res.json({message:'ping'})
// })


app.listen(PORT,() => {
    console.log(`server listening on port ${PORT}`);
});




// "swagger-autogen": "ts-node src/swagger/swagger.ts"
