# Use the official Nginx image as the base image
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
# Copy all HTML files from the current directory to the Nginx HTML directory
COPY . /usr/share/nginx/html/

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]