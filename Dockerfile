FROM node:10
RUN /reg_system
ADD . /reg_system
WORKDIR /reg_system
RUN npm i
EXPOSE 80
CMD ["npm", "start"]
