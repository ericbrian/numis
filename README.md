# numis

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

To start the DB and interface, use:

    docker-compose -f stack.yml up
