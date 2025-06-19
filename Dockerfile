# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (none here, but safe to keep)
RUN npm install

# Copy app code
COPY . .

# Expose the port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
