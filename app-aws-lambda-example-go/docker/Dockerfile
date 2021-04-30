FROM golang:1.15

# Set a working directory
WORKDIR /app

# Copy the package files
COPY go.mod ./

# Install all go_modules
RUN go mod download

# Copy the package files
COPY . .

# Build the project
RUN go build -a -installsuffix cgo -o main ./bin

# Set environment variables
ENV HTTP_PORT=8080

# Expose the port
EXPOSE "8080:8080"

# Specify the command to run
CMD ["./main"]
