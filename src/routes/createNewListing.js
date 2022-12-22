import {connection } from '../database.js'
import mysql from 'mysql2';
import { v4 as uuid } from "uuid";
import express from "express";
const router = express.Router();


// CREATE NEW Listing

router.post("/listings",(req,res) => {
    console.log('EXECUTED---->>')
    const name = req.body.name;
    const desc = req.body.description;
    const price = req.body.price;
    const user_id = req.body.user_id || 21456;
    console.log('Payload is ' , user_id)


             
    const sql = 'INSERT INTO listings SET ?';
    const customerObj = {
      name: req.body.name,
      description:desc,
      user_id:user_id,
      price:price,
      view:124,

      
    };


  
    connection.query(sql, customerObj, (error,result) => {
      if (error) {
        //throw error
      res.status(404).json({message:error.message})
      };
      console.log('result is ' , result)
      res.send('listing created' );
    });
    
  });



  // GET /listing/:id



  router.get("/listing/:id",async(req,res) => {

    const id =req.params.id;
    console.log('EXECUTED---->>')

    const sql =  connection.query(
      'SELECT * FROM listings WHERE id=?',
      [id]
  );
  
    connection.query(sql, (error,result) => {
      if (error) throw error;
      console.log('result is ' , result)
      res.send(result[0] );
    });
    
  });



// DELETE  


router.delete("/listing/:id",async(req,res) => {

  const id =req.params.id;
  console.log('EXECUTED---->>')

  const sql =  connection.query(
    'DELETE FROM listings WHERE id=?',
    [id]
);

  connection.query(sql, (error,result) => {
    if (error) throw error;
    console.log('result is ' , result)
    res.send({message:'Deleted Successfully'  });
  });
  
  
});



// UPDATE  views 

router.post("/listing/:id",async(req,res) => {




  const id =req.params.id;
  console.log('EXECUTED---->>')

  const sql =  connection.query(
    'UPDATE listings SET view=view+1 WHERE id=?',
    [id]
);

  connection.query(sql, (error,result) => {
    if (error) throw error;
    console.log('result is ' , result)
    res.send({message:'Updated Successfully' ,resutl:result[0]  });
  });
  
  
});




//  const {results} = await db.query('SELECT * FROM listings');


// GET ALL LISTINGS

router.get("/listings",async(req,res) => {




 
  console.log('EXECUTED---->>')

  const sql =  connection.query(
    'SELECT * FROM listings'
    
);

  connection.query(sql, (error,result) => {
    if (error) throw error;
    console.log('result is ' ,result )
    res.send( result  );
  });
  
  
});



// GET   user All Lists

router.get("/users/:userid/listings",async(req,res) => {


const userid = req.params.userid


  
  console.log('EXECUTED---->>' , userid)

  const sql =  connection.query(
    'SELECT * FROM listings WHERE user_id=?',

    [userid]
);

  connection.query(sql, (error,result) => {
    if (error) throw error;
    console.log('result is ' , result)
    res.send( result );
  });
  

  
});



//   `UPDATE listings
// SET name=?, description=?, price=?
// WHERE id=? AND user_id=?
// `,
// [name,description,price,id,userId]

// UPDTE LISTING

router.put("/listing/:id",async(req,res) => {


  const listingid = req.params.id
  
  
    
    console.log('EXECUTED---->>' , userid)
  
    const sql =  connection.query(
      `UPDATE listings
// SET name=?, description=?, price=?
// WHERE id=? AND user_id=?
// `,
// [name,description,price,id,userId]
  );
  
    connection.query(sql, (error,result) => {
      if (error) throw error;
      console.log('result is ' , result)
      res.send( result );
    });
    
  
    
  });







  export default router;