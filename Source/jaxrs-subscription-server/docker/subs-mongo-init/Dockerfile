# The purpose of this container is just to run the mongoimport command to initialise the db with some dummy data
FROM mongo:latest
ADD *.csv /tmp/
CMD mongoimport --host db --db dbsubs --collection subs --type csv --headerline --file /tmp/subscriptions.csv 