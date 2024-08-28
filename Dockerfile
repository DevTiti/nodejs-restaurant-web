# Use Node.js 16 slim as the base image
FROM node:16-slim


# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm Install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start Node.js server
CMD [ "npm", "start" ]