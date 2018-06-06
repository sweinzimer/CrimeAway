# CrimeAway

## Requirements

- [Node.js](https://nodejs.org/en/download/)
- [MySQL](https://dev.mysql.com/doc/refman/5.7/en/installing.html)

## Setup (Unix)

```sh
# Clone and navigate to repository
git clone https://github.com/sweinzimer/crimeaway
cd crimeaway
```

Create a `config.json` file using [`config.template.json`](./config.template.json) as a template.

```sh
# Create database
mysqladmin -u root -p create crimeawaydb
# Initialize/reset database using file.
mysql -u root -p crimeawaydb < crimeawaydb.sql 
# Install dependencies
npm install
# Start server
npm start
```
