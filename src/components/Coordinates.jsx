
const Coordinates = () => {
  const trackCoordinates = (e) => {
    let x = e.clientX
    let y = e.clientY
    let coor = `Coordinates: ${x}, ${y}`

    document.getElementById("coor").innerHTML = coor
  }

  return (
    <div onMouseMove={trackCoordinates} className="h-screen w-screen">
      <div id="coor" data-testid="coor" className="absolute top-4 right-4 text-accentGreen"></div>
    </div>
  )
}

export default Coordinates
