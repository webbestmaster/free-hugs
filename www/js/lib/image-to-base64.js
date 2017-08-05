/**
 *
 * @param {string} src
 * @return {Promise}
 */
export default function imageToBase64(src) {
    return new Promise((resolve, reject) => {
        const image = new Image();

        function onImageLoad() {
            image.removeEventListener('load', onImageLoad, false);
            image.removeEventListener('error', onImageError, false);

            const canvas = document.createElement('canvas');
            const {width, height} = image;

            canvas.width = width;
            canvas.height = height;

            const canvasContext = canvas.getContext('2d');

            canvasContext.drawImage(image, 0, 0);

            resolve({
                src,
                image,
                base64: canvas.toDataURL('image/png')
            });
        }

        function onImageError(evt) {
            image.removeEventListener('load', onImageLoad, false);
            image.removeEventListener('error', onImageError, false);
            reject(evt);
        }

        image.addEventListener('load', onImageLoad, false);
        image.addEventListener('error', onImageError, false);

        image.src = src;
    });
}
