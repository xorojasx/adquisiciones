const log4 = require("log4js");
const logger = log4.getLogger("app.js");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app.js");
const PORT = process.env.PORT || '5151';




logger.level = "all";

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`, (error) => {
    if(error){
        logger.error(error);
    }else{
        logger.trace("#################################################");
        logger.debug("Connection with BDD is Success!!");
        app.listen(PORT, () => {
            logger.trace("#################################################");
            logger.debug(`Server is Running in: http://${process.env.IP_SERV}:${PORT}/${process.env.API_VER}/`);
            logger.trace("##################################################");
        });
    }
});

