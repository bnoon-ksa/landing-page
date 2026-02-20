const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const compression = require('compression');

const port = process.env.PORT || 3000;
const path = require('path');
const app = next({
  dev: false,
  dir: path.join(__dirname),
});

const handle = app.getRequestHandler();
const compress = compression({ threshold: 1024 });

app.prepare().then(() => {
  createServer((req, res) => {
    compress(req, res, () => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    });
  }).listen(port, (err) => {
    if (err) throw err;
    console.log('> Server running on port ' + port);
  });
});
