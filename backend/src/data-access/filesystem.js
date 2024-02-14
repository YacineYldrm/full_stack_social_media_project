const fs = require("fs");

// read JSON file
// const readJsonFile = (filePath) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filePath, (err, dataBuffer) => {
//             err ? reject(err) : resolve(JSON.parse(dataBuffer.toString()));
//         });
//     });
// };

// read JSON file (async await)
const readJsonFile = async (filePath) => {
    const getAllData = await fs.promises.readFile(filePath);
    const JSONFile = JSON.parse(getAllData.toString());
    return JSONFile; 
}

// write JSON file
// const writeJsonFile = (filePath, data) => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(filePath, JSON.stringify(data), (err) => {
//             err ? reject(err) : resolve(data)
//         });
//     });
// };

// write JSON fil (async await)
const writeJsonFile = async (filePath, data) => {
    const JsonFileString = JSON.stringify(data, null, 2);
    await fs.promises.writeFile(filePath, JsonFileString);
    return data;
}

module.exports = {
    readJsonFile,
    writeJsonFile
}