# Use the official Node.js image as a base
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application (if applicable)
RUN yarn build

# Expose the port the app runs on
EXPOSE 8888

# Command to run the application
CMD ["node", "server.js"]