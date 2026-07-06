FROM nginx:alpine

# Copy simulator static site into nginx html folder
COPY ["simulado_csa", "/usr/share/nginx/html"]
COPY ["Adm Fundations/basic", "/usr/share/nginx/html/Adm Fundations/basic"]

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
