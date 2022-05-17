// const { Router } = require('express');
const express = require('express');
const router = express.Router();
// DB CONNECTION
const pool = require( '../routes/pool' );

let koalaFamily = [];

// Source input values to match up with for query submission to add koalas
// let a1 = $( '#nameIn' ).val();
// let b2 = $( '#genderIn' ).val();
// let c3 = $( '#ageIn' ).val();
// let d4 = $( '#readyForTransferIn' ).val();
// let e5 = $( '#notesIn' ).val();

// GET
router.get( '/', ( req, res )=>{
	console.log( 'in /koalaFamily GET' );
    const queryString = `SELECT * FROM koalaChart`;
    pool.query( queryString ).then( ( result )=>{
        res.send( result.rows );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    }) // end query
	/// - replace sending the array with data from db table SELECT
	// res.send( inventory );
})

// POST
router.post( '/', ( req, res )=>{
	console.log( 'in koalaFamily POST:', req.body );
	/// - replace array push with db table INSERT
	koalaFamily.push( req.body );
	res.sendStatus( 200 );
})

// PUT


// DELETE

module.exports = router;