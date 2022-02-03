FROM ubuntu
RUN apt update
RUN apt -y install nodejs
RUN apt -y install default-jre
RUN mkdir /downloads/sonarqube -p
RUN apt -y install wget
RUN apt -y install unzip
RUN cd /downloads/sonarqube
RUN wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.2.0.1873-linux.zip
RUN unzip sonar-scanner-cli-4.2.0.1873-linux.zip
RUN mv sonar-scanner-4.2.0.1873-linux /opt/sonar-scanner
COPY sonar-scanner.properties /opt/sonar-scanner/conf
COPY . /repo
ENV PATH="$PATH:/opt/sonar-scanner/bin"

CMD sonar-scanner -v && cat /opt/sonar-scanner/conf/sonar-scanner.properties && ls /repo &&sonar-scanner -Dsonar.login=myAuthenticationToken