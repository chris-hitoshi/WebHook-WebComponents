const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/webhook/runtime.js',
        './dist/webhook/polyfills.js',
        './dist/webhook/main.js'
      ];
    
      await fs.ensureDir('widget');
      await concat(files, 'widget/news-widget.js');
}
build();