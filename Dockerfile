# # Dockerfile
# # Use an official Node image as the base
# FROM node:20.16.0 AS build

# # Set the working directory
# WORKDIR /app
# # Copy the package.json and package-lock.json files to the container
# COPY package*.json ./
# # Install any needed packages
# RUN npm install
# # Copy the rest of the application files to the container
# COPY . .
# # Build the application
# RUN npm run build
# # Make port 80 available to the world outside this container
# EXPOSE 8081
# # Run the application with serve
# CMD [“npx”, “serve”, “-s”, “build”, “-l”, “8081”]   


# Use an official Node.js image as the base
FROM node:20.16.0 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available) to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Use an official Node.js image to serve the build output
FROM node:20.16.0

# Set the working directory inside the container
WORKDIR /app

# Install `serve` globally using `npx`
RUN npm install -g serve

# Copy the build output from the previous build stage to the final container
COPY --from=build /app/build /app/build

# Expose port 3000 to make it accessible outside the container
EXPOSE 3000

# Serve the app using npx serve on port 3000
CMD ["npx", "serve", "-s", "build", "-l", "3000"]   
