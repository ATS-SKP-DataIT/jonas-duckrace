

# nginx state for serving content
FROM nginx:latest
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=build frontend/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

#tested a standalone run of nginx in a docker container
#docker build -t webserver .
#docker run -it --rm -d -p 8080:80 --name web webserver