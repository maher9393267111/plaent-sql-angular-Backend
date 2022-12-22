
import mysql from 'mysql2';
import { v4 as uuid } from "uuid";
import express from "express";
const router = express.Router();


 export  const connection= mysql.createPool(
    {
      database: "",
      user: "",
      host: "",
      password: "",
      ssl: {rejectUnauthorized: false}
    });













// router.post("/listings",(req,res) => {
//     console.log('EXECUTED---->>')
//     const name = req.body.name;
//     const desc = req.body.description;
//     const price = req.body.price;
//     console.log('Payload is ' , req.body)
             
//     const sql = 'INSERT INTO listings SET ?';
//     const customerObj = {
//       name: req.body.name,
//       description:desc,
//       user_id:1446712,
//       price:price,
//       view:124,

      
//     };
  
//     connection.query(sql, customerObj, (error,result) => {
//       if (error) throw error;
//       console.log('result is ' , result)
//       res.send('listing created' );
//     });
    
//   });


  
export default router;


  