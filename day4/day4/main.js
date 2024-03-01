const http = require("http");
const fs = require("fs");
const { promisify } = require("util");

const ip = "127.0.0.1";
const port = 3008;

const readFileAsync = promisify(fs.readFile);

const getIndexHtml = async () => {
  try {
    const data = await readFileAsync("./index.html", "utf8");
    return data;
  } catch (err) {
    console.error("Error reading index.html:", err);
    throw err; // You might want to handle or log the error appropriately
  }
};

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  try {
    const indexHtml = await getIndexHtml();
    res.end(indexHtml);
  } catch (err) {
    res.end("Error reading index.html");
  }
});

server.listen(port, ip, () => {
  console.log(`Running on ${ip}:${port}`);
});
