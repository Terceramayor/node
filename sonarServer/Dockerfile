FROM ubuntu
RUN apt update
RUN apt -y install sudo
RUN adduser --disabled-password --gecos '' mrsonarqube && usermod -aG sudo mrsonarqube && su mrsonarqube
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
RUN apt -y install nodejs
RUN apt -y install default-jre
RUN apt -y install wget
RUN apt -y install unzip
RUN mkdir /downloads/sonarserver -p
RUN cd /downloads/sonarserver
RUN wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-9.2.4.50792.zip
RUN unzip sonarqube-9.2.4.50792.zip
RUN mv sonarqube-9.2.4.50792 /opt/sonarserver
RUN sudo chown -R mrsonarqube:mrsonarqube /opt

CMD su mrsonarqube && /opt/sonarserver/bin/linux-x86-64/sonar.sh console