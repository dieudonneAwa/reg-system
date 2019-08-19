FROM node:9-slim
WORKDIR /reg_system
COPY . /reg_system
RUN npm install
COPY . /reg_system
CMD ["npm", "dev"]
