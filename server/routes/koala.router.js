// const { Router } = require('express');
const express = require( 'express' );
const koalaRouter = express.Router();
// DB CONNECTION
const pool = require( '../routes/pool' );

// let koalaFamily = [];

// GET
koalaRouter.get( '/', ( req, res )=>{
    console.log( 'in /koalaChart GET' );
    const queryString = `SELECT * FROM koalaChart ORDER BY id ASC;`;
    pool.query( queryString ).then( ( result )=>{
      res.send( result.rows );
    }).catch( ( err )=>{
      console.log( err );
      res.sendStatus( 500 );
    })
  })

// POST
koalaRouter.post( '/', ( req, res )=>{
    console.log( 'in /koalaChart POST:', req.body );
    const queryString = `INSERT INTO koalaChart ( name, age, gender, ready_to_transfer, notes ) VALUES ( $1, $2, $3, $4, $5 );`
    const values = [ req.body.name, req.body.age, req.body.gender, req.body.readyToTransfer, req.body.notes ];
    pool.query( queryString, values ).then( ( result )=>{
      res.sendStatus( 201 );
    }).catch( ( err )=>{
      console.log( err );
      res.sendStatus( 500 );
    })
  });

// PUT
koalaRouter.put( '/', ( req, res )=>{
    console.log( 'in /koalaChart PUT:', req.query );
    let queryString = `UPDATE koalaChart SET ready_to_transfer=true WHERE id=$1;`;
    let values = [ req.query.id ];
    pool.query( queryString, values ).then( ( results )=>{
      res.sendStatus( 200 );
    }).catch( ( err )=>{
      console.log( err );
      res.sendStatus( 500 );
    })
  })

// DELETE

module.exports = koalaRouter;