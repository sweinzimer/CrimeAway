const express = require('express')
const app = express()

// Serve static files from the public folder.
app.use(express.static('public'))

// Run the server on port 3000.
app.listen(3000, () => console.log('Example app listening on port 3000!'))
