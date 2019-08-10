FROM openjdk:8u131-jre-alpine

MAINTAINER Avinash Tiwari "qwe123kids@gmail.com"

WORKDIR /usr/local/bin/

ADD maven/fleetman-0.0.1-SNAPSHOT.jar webapp.jar

EXPOSE 8080

CMD ["java","-Dspring.profiles.active=docker-demo","-jar","webapp.jar"]
