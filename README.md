# CrimeAway

## Setup (OSU Flip)

```sh
# Clone and navigate to repository
git clone https://github.com/sweinzimer/crimeaway
cd crimeaway
```

Create a `config.json` file using [`config.template.json`](./config.template.json) as a template.

Change the `port` in [`app.js`](./app.js) to something unused.

```sh
# Connect to database (password is last 4 of student ID until changed).
mysql -u cs361_USERNAME -p -h classmysql.engr.oregonstate.edu cs361_USERNAME

# Initialize/reset database using file.
source crimeawaydb.sql

# Disconnect from database.
\q

# Install dependencies
npm install
# Start server
npm start
```
