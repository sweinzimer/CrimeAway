# CrimeAway

## Setup

### MySQL Database (Unix)

```sh
# Create database (skip if already exists).
mysqladmin -u root -p create crimeawaydb
# Initialize/reset database using file.
mysql -u root -p crimeawaydb < crimeawaydb.sql 
```
