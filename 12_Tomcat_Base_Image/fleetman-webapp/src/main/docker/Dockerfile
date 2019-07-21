FROM openjdk:8u131-jre-alpine

MAINTAINER Avinash Tiwari "qwe123kids@gmail.com"

ADD maven/fleetman-0.0.1-SNAPSHOT.war webapp.war

EXPOSE 8080

CMD ["java","-Dspring.profiles.active=docker","-Djava.security.egd=file:/dev/./urandom","-jar","webapp.war"]
