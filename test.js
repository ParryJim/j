/// Load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8080;

// Create HTTP server
const server = http.createServer(function (req, res) {
  console.log(req.url);
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "text/html" });

  // Send the response body
  
  let date = new Date();
  res.write(date.toString());
  res.write("<BR>");
  res.write('<video src="./red.webm" controls>');
  res.write("<p> appears unsupported </p>")
  res.write("</video><BR>");
  res.write('<img src="IMG_2367.JPG" alt="photo" /><BR>')
  res.write('<img src="garbage.JPG" alt="photo" /><BR>')
  res.end("goodbye");
});

// Prints a log once the server starts listening
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
