const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("/sse", (req, res) => {
  res.set({
    "Cache-Control": "no-cache",
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
  });
  res.flushHeaders();

  let id = 0;

  setInterval(() => {
    res.write(`id: ${id}\nevent: idEvent\ndata: ${id}\n\n\n`);
    id++;
  }, 5 * 1000);
});

app.listen(3000);
