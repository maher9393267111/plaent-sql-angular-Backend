


import   express from "express";
const app = express();

import  morgan from "morgan";
 //cookie su cui salvare il token

import  cors from "cors";
require("dotenv").config();
//limita le richieste
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 2500, // time
  max: 20, // Limit each IP to 100 requests per `window` (here, per Xtime minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});


 import createListingRoute from './routes/createNewListing.js'
 //import routerfromdatabase from './database.js'

//IMPORT ROUTES
// const authRoute = require("./routes/authRoute");
// const productRoute = require("./routes/productRoute");
// const categoryRoute = require("./routes/categoryRoute");

//MIDDLEWARE
app.use(cors({ credentials: true, origin: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(limiter);

app.use(morgan("dev"));


//routes.forEach(r=>server.route(r));
//ROUTES MIDDLEWARE
//app.use("/api", routerfromdatabase);
app.use('/api' ,createListingRoute)



const port = process.env.PORT || 8000;

//CONNECT Server
 
    app.listen(port, () => {
      console.log(`Connecte at port: ${port}`);
    });
  




    //  import Hapi from '@hapi/hapi'
//  import {db} from './database.js'
//  import routes from './routes';
//  import  logger from 'morgan'


//  let server;

// const start = async() => {
//     server = Hapi.server({
//         port : 8000,
//         host : 'localhost'
//     }) 

// // routes

// routes.forEach(r=>server.route(r));



// // connect to database

// //db.connect();


// await server.start();
// console.log("Server runs perfectly :) on "+server.info.uri);
// }


// process.on('unhandledRejection', err => {
//     console.log(err);
//     process.exit(1);
// });

// process.on('SIGINT', async ()=>{
//     console.log("Stopping listy server");
//     await server.stop({timeout:10000});
//     db.end();
//     console.log("listy Server stopped");
//     process.exit(0);
// });




//     start()