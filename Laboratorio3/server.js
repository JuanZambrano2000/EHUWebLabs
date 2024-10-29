//File created using AI
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Only add this in development environment
if (process.env.NODE_ENV !== 'production') {
  const browserSync = require('browser-sync');
  const bs = browserSync.create();

  app.listen(port, () => {
    bs.init({
      open: false,
      ui: false,
      proxy: `localhost:${port}`,
      files: ['public/**/*.*'],
      port: 3001,
    });
    console.log(`Server running at http://localhost:3001`);
  });
} else {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}