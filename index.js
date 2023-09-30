const app = require("./app");
require("dotenv").config({
    path:  "./config.env" // Path to .env file (this is the default)
})














app.listen(process.env.RUNNING_PORT,()=>{
    console.log("Server is running on port "+ process.env.RUNNING_PORT);
})

















