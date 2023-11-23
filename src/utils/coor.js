export const trackCoordinates = (e) => {
    let x = e.clientX
    let y = e.clientY
    let coor = `Coordinates: ${x}, ${y}`

    document.getElementById("coor").innerHTML = coor
  }

  export const show_image = (src, width, height, alt) => {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
  
    // set the position
    img.style.position = 'absolute';
    img.style.top = document.body.clientHeight * Math.random() + 'px';
    img.style.left = document.body.clientWidth * Math.random() + 'px';
  
    document.body.appendChild(img);
  };
  