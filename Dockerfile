FROM nginx:latest
COPY build /usr/share/nginx/html
VOLUME /tmp
EXPOSE 80