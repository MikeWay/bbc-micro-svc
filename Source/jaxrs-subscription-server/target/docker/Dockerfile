FROM jboss/wildfly:latest
# Create an admin user for Wildfly
RUN /opt/jboss/wildfly/bin/add-user.sh admin Admin#70365 --silent
# For admin mode: Run with docker run -it -p 8080:8080 -p 9990:9990 mvn-test-image /opt/jboss/wildfly/bin/standalone.sh -b 0.0.0.0 -bmanagement 0.0.0.0
ADD *.war /opt/jboss/wildfly/standalone/deployments/
ADD *.csv /tmp/

