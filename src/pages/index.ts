// import express from "express";
import express = require('express');
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
  res.send( "Hello world!" );
});

// start the Express server
app.listen( port, () => {
  // ts-ignore
  console.log( `server started at http://localhost:${ port }` );
});
