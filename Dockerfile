FROM node:18

# Set working directory
WORKDIR /app

# Create and use a non-root user
RUN useradd -m appuser
USER appuser

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn install -g pm2 && npm install

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 50051

# Start the application with PM2
CMD ["pm2-runtime", "start", "server.js"]