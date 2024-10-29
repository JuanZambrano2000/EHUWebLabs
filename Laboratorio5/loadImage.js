const loadImage = (url) => new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', (err) => reject(err));
    img.src = url;
  });
  
  loadImage("https://i1.wp.com/aav255.brandon.courses/img/css-sprites/sprite-supermariocharacters.gif")
    .then(img => console.log(`w: ${img.width} | h: ${img.height}`))
    .catch(err => console.error(err));