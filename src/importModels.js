//For automatically importing all models

const fs = require('fs');
const path = require('path');

const targetDirectory = '../static';

fs.readdir(modelsDirectory, (err, files) => {
    if (err) {
        console.log('no directory', err);
        return;
    }

    files.forEach(file => {
        if (path.extname(file) === '.jsx') {
          const modelPath = path.join(modelsDirectory, file);
          require(modelPath); // This will import the JSX file
          console.log(`Imported: ${file}`);
        }
    });
});