FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
#RUN ./ip.sh
ENV REACT_APP_API_URL=http://backend:5000
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

