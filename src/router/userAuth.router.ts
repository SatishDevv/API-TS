import express, { Request, Response } from 'express'

const router = express.Router();

router.get('/ping',(req:Request , res:Response) => {
    res.json({message:'it working...'})    
});


export default router;