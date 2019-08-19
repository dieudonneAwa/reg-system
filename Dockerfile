FROM node:10
WORKDIR /reg_system
RUN /reg_system
ADD . /reg_system
RUN npm install
EXPOSE 80
CMD ["npm", "start"]
