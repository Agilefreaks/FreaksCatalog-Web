FROM node:14
WORKDIR /usr/src/app
RUN git clone https://github.com/ViralOne/FreaksCatalog-Web.git
RUN cd FreaksCatalog-Web
RUN npm i
CMD [ "npm", "build" ]

FROM nginx:alpine

COPY build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
