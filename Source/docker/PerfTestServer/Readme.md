Make sure you are in the server folder before building the image
docker build --tag mjrw/perftestserver .

Run with
docker run -it -p 8092:8092 --rm --name my-running-app mjrw/perftestserver

docker push mjrw/perftestserver
