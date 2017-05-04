npm install zookeeper

Run registry with 

docker run --name some-zookeeper -p 2181:2181 --restart always -d zookeeper

Run client with node zookeeper.js

