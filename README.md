# react-node-scaffold
A bootstrap for a react/redux/node/express app

# Setup

## Config File

The file app.json is intended as a machine config and so is not included in the git repo.
Copy the file app-dev.json to app.json and edit to suite.

## NPM

Run npm install to fetch the dependencies

```sh
npm install
```

## Webpack

This scaffold uses webpack to bundle the client app into the public folder. Run the following command to build:

```sh
npm run build
```

# Run

## Development

To run in development mode, execute the following two commands (in two separate terminals):

```sh
# run the client webpack-dev-server
npm run dev-client
```

```sh
# run the server
npm run dev-server
```

The Node server proxies the client traffic to the client server.

## Production

To run in production mode (serving the client from the public folder)

```sh
npm start
```
