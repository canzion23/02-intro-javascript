
// Fetch API es una libreria propia de JavaScript y soportada por todos los navegadores modernos.

const apiKey = 'KHUnYDXxjmCq7lW4gwAHzstSGitelq0g';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
