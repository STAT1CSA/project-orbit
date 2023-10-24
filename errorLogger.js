const fs = require('fs');
const path = require('path');

const errorLogger = (err, req, res, next) => {
    // Log the error to the console
    console.error(err.stack);

    // Log the error to a file
    const logFilePath = path.join(__dirname, 'error.log');
    const logMessage = `${new Date().toISOString()} - ${err.stack}\n`;
    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error(`Error writing to log file: ${err}`);
        }
    });

    // Send an error response to the client
    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || 'Something went wrong';
    res.status(statusCode).send(errorMessage);
};

module.exports = errorLogger;