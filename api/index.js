const express = require('express');
const path = require('path');
const app = express();

const port = 80;
const hostname = "localhost";

app.use('/api',express.static(path.join(__dirname, "serve")));

app.listen(process.env.SERVE_PORT || port, process.env.SERVE_HOSTNAME || hostname, (() => {
    console.log("Successfully initializd server as port", process.env.PORT || 80, "and hosting as", hostname);
    if (process.env.SERVE_PORT == null && process.env.SERVE_HOSTNAME == null) {
        console.log("\x1b[34mTip:\x1b[0m If you have to manually configure port, set environment variable \x1b[33mSERVE_PORT\x1b[0m and \x1b[33mSERVE_HOSTNAME\x1b[0m to set port");
        //\x1b[XXm
    }
}))

module.exports = app;