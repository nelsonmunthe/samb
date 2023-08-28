const dotnev = require("dotenv");
dotnev.config();
const http = require('http');
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT ?? 5000;

const lovRouters = require("./routes/lovRouters");
const pengeluaranRouter = require("./routes/pengeluaranRouter");
const penerimaanRouter = require("./routes//penerimaanRouter");

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(express.json());

const server = http.createServer(app);

app.use('/lov', lovRouters)
app.use('/pengeluaran',  pengeluaranRouter)
app.use('/penerimaan', penerimaanRouter)

server
  .listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  }).on('error', (err) => {
    console.log(err);
  });
