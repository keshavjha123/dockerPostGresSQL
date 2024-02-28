## Run the database in docker container using the following command

- docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres

## get into psql cli using the following commands
- Get inside the container first
    - docker exec -it 2504aff0dadc /bin/bash
- run the following command to get the psql cli
    - psql -h p-localhost -d postgres -U postgres


- Scripts in this code base contains the basic sql queries that run on the postgres db.
