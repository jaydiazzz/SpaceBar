// reads your .env file and assigns all
// the environment variables you list
require( 'dotenv' ).config();
require( 'apprequire' )( __dirname );

const express    = require( 'express' );
const bodyParser = require( 'body-parser' );

const app = express();

// config

// view engine
app.set( 'views', `${__dirname}/views` ); // look for views in the views folder
app.set( 'view engine', 'pug' );          // use pug to create HTML

//RESOURCES
app.use('/static', express.static(`${__dirname}/public`));
// app.use(express.static(__dirname + '/public'));


// use the body parser so we can actually look at requests
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended : true } ) );

/* set up routes */

const indexRoutes = appRequire( 'routes/index' );
app.use( '/', indexRoutes );


/* set up a 404 page */

app.use( ( req, res, next ) => {

  res.send( {
    status  : 404,
    message : 'We couldn\'t find what you were looking for.'
  } );

} );

/* starts the server on port 3000 */
app.listen( process.env.PORT, ( ) => {
    console.log( `Server running on port ${process.env.PORT}, env: ${process.env.NODE_ENV}` );
} );
