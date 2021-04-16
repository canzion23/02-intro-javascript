
// const getImagenPromesa = () => new Promise(resolve => resolve('https://sjdklfjsdlkjf.com'));
// getImagenPromesa().then(console.log);

const getImagen = async() => {

  try {
    const apiKey = 'KHUnYDXxjmCq7lW4gwAHzstSGitelq0g';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    // console.log(resp);
  
    const { data } = await resp.json(); 
    // console.log(data);
  
    const { url } = data.images.original;
    console.log(url);
    
  
     const img = document.createElement('img');
     img.src = url;
  
    document.body.append(img);
    // console.log(data);
    
  } catch (error) {
    console.error(error);
    
  }
  
}

getImagen();