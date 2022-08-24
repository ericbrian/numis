# numis

This project is an effort to create a DB to capture the inventory of my collected coins. Sure, there are others out there but this one is my opinion! :)
## ERD Generator

I've been using `schemacrawler` to create ERDs using these options:

    schemacrawler \
        -server postgresql \
        -host localhost \
        -post 5432 \
        -database numis \
        -user numisadmin \
        -infolevel standard \
        -command schema \
        -outputformat png \
        -loglevel INFO \
        -outputfile numis-database.png \
        -password <password here>

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

To run the seed file, execute:

    npx knex seed:run --knexfile db/knexfile.js
