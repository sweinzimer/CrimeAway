const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const session = require('express-session')
const config = require('./config.json')

// Create the express server.
const app = module.exports = express()

// Create a MySQL database connection pool.
const pool = mysql.createPool(config.db)

app.use(session({
  resave: false, // Don't save unmodified sessions.
  saveUninitialized: false, // Don't create a session until we have something to store.
  secret: config.secret,
}))

// Parse request body from HTML form and JSON.
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Serve static files from the public folder.
app.use(express.static('public'))

// Handle login requests.
app.post('/login', (req, res) => {
  authenticate(req.body.email, req.body.password, (err, user) => {
    // Failed to authenticate, redirect back the to the login page.
    if (err !== null) {
      req.session.error = 'Authentication failed, please check your username and password.'
      res.redirect('/login')
      return
    }

    // Successfully authenticated.

    // Regenerate session and store user in the session, then redirect to homepage.
    req.session.regenerate(() => {
      req.session.user = user
      req.session.success = `Authenticated as ${user.email}.`
      res.redirect('/')
    })
  });
})

// Run the server on port 3000.
app.listen(3000, () => console.log('Example app listening on port 3000!'))

function authenticate(email, pass, fn) {
  // Query database for user.
  let sql = 'SELECT * FROM users WHERE email = '+pool.escape(email);
  pool.query(sql, (err, results, fields) => {
    // Check for an error querying the database.
    if (err !== null) {
      fn(new Error('failed to query users database'))
      return
    }

    // Email is a unique key, so there should only be one result.
    const user = results[0]

    // Check password.
    if (user.pass !== pass) {
      fn(new Error('bad password'))
      return
    }

    // Successfully authenticated.
    fn(null, user)
  })
}
