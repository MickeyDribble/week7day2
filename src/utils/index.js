const fs = require("fs");

const addMovie = (movieObj) => {
    try {
        const stringObj = JSON.stringify(movieObj);
        fs.writeFileSync("./storage.json", stringObj)
    } catch (error) {
        console.log(error);
    }

};