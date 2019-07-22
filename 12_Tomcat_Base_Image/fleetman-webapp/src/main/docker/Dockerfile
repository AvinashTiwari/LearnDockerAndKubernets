FROM openjdk:8u131-jre-alpine
FROM tomcat:8.5.16-jre8-alpine

MAINTAINER Avinash Tiwari "qwe123kids@gmail.com"



EXPOSE 8080

RUN rm -rf /usr/local/tomcat/webapps/*

COPY ./fleetman-0.0.1-SNAPSHOT.war /usr/local/tomcat/ROOT.war
ENV JAVA_OPTS = "-Dspring.profiles.active=docker"
CMD ["java","-Dspring.profiles.active=docker","-Djava.security.egd=file:/dev/./urandom","-jar","ROOT.war"]
#CMD ["catalina.sh", "run"]