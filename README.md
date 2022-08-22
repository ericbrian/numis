# numis

This project is an effort to create a DB to capture the inventory of my collected coins. Sure, there are others out there but this one is my opinion! :)

## DB

The sql to produce the tables and to seed data.


## ERD Generator

I've been using `schemacrawler` to create ERDs using these options:

    schemacrawler -server sqlite \
        -database ./numis2.db \
        -user -password \
        -infolevel standard \
        -command schema \
        -outputformat png \
        -loglevel INFO \
        -outputfile numis_db.png


## Postgres DB

Create an `.env` file and populate with these values:

    POSTGRES_USER=< user name >
    POSTGRES_PASSWORD=< user p/w >
    POSTGRES_DB=numis


To start the DB and interface, use:

    docker-compose -f stack.yml up

ISSUE: DB data file isn't saved to local drive. Why???

## Using Migrations

Some great examnples are found here: http://perkframework.com/v1/guides/database-migrations-knex.html

To Build, run:

    npx knex migrate:latest --knexfile db/knexfile.js

To Destroy, run:

    npx knex migrate:latest --knexfile db/knexfile.js
