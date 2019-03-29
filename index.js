const app = require('./server/server');

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
  console.log(`Express app listening on http://127.0.0.1:${PORT}`);
});
