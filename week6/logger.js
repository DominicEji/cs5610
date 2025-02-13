let version = 2.6;

function log() {
    console.log("logged successfully");
}

// Export the function and version
module.exports = {
    log: log,
    version
};
