A set of services to aggregate

Create a docker image with docker build -t bbcdemo/services-to-aggregate .

Services are exposed on 8092 8090 8091

use /docs on each one to see the API's available

docker run -p 8092:8092 -p 8091:8091 -p 8090:8090 bbcdemo/services-to-aggregate

