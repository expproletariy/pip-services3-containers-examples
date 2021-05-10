FROM node:latest

# Set working directory
WORKDIR /app

# Copy project file
COPY package.json .

# Clear npm cache because sometimes it uses cache and do not install new code
RUN npm cache clean --force

# Install ALL node_modules, including 'devDependencies'
RUN npm install
RUN npm i -g typescript

# Copy all project
COPY . .

# Compile source code
RUN tsc

# Set environment variables
ENV HTTP_PORT=8080

# Expose the port
EXPOSE "8080:8080"

# Specify the command to run
CMD ["node", "./bin/main_process_container.js"]
