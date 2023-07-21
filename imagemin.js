const imagemin = require('imagemin-keep-folder');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
 
imagemin(['public/**/*.{jpg,png}'], {
    plugins: [
		imageminJpegtran(),
		imageminPngquant({
			quality: [0.6, 0.8]
		})
	]
}).then(files => {
    console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
});;