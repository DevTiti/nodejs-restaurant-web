# Use Node.js 18 slim as the base image
FROM node:18-slim


# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start Node.js server
CMD [ "npm", "start" ]