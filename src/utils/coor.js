export const trackCoordinates = (e) => {
    let x = e.clientX
    let y = e.clientY
    let coor = `Coordinates: ${x}, ${y}`

    document.getElementById("coor").innerHTML = coor
  }