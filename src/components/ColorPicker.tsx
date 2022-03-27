import React, { useState } from 'react'

export function ColorPicker() {
  // HOOKS//       const .....
  const [hue, setHue] = useState(Math.floor(Math.random() * 361))
  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 101))
  const [lightness, setLightness] = useState(Math.floor(Math.random() * 101))
  const [alpha, setAlpha] = useState(Math.floor(Math.random() * 101))

  const newColor = `hsla(${hue},${saturation}%,${lightness}%,${alpha}`
  const newStyle = { color: newColor }

  // FUNCTIONS
  function handleHueRange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setHue(Number(event.target.value))
  }
  function handleSaturationRange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setSaturation(Number(event.target.value))
  }
  function handleLightnessRange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setLightness(Number(event.target.value))
  }
  function handleAlphaRange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setAlpha(Number(event.target.value))
  }

  function HandleRandomColorButtonClick() {
    setHue(Math.floor(Math.random() * 361))
    setSaturation(Math.floor(Math.random() * 101))
    setLightness(Math.floor(Math.random() * 101))
    setAlpha(Math.floor(Math.random() * 101))
  }

  return (
    <main>
      <header style={newStyle}>
        <div className="color1">Color</div>
        <div className="color2">Color</div>
        <div className="color3">Color</div>
      </header>
      <section>
        <i className="fa-solid fa-face-anguished"></i>
        <p>Hue</p>
        <input
          id="hue"
          name="hue"
          type="range"
          onChange={handleHueRange}
          min="0"
          max="360"
          value={hue}
        />
        <label htmlFor="Hue"> {hue}</label>

        <p>Saturation</p>
        <input
          id="saturation"
          name="saturation"
          onChange={handleSaturationRange}
          type="range"
          min="0"
          max="100"
          value={saturation}
        />
        <label htmlFor="Saturation"> {saturation}</label>

        <p>Lightness</p>
        <input
          id="lightness"
          name="lightness"
          onChange={handleLightnessRange}
          type="range"
          min="0"
          max="100"
          value={lightness}
        />
        <label htmlFor="Lightness"> {lightness}</label>

        <p>Alpha</p>
        <input
          id="alpha"
          name="alpha"
          onChange={handleAlphaRange}
          type="range"
          min="0"
          max="100"
          value={alpha}
        />
        <label htmlFor="Alpha">{alpha}</label>
      </section>
      <br></br>
      <div className="button">
        <button onClick={HandleRandomColorButtonClick}>Randomizer</button>
      </div>
      <p className="directions">
        Directions: Move the sliders above left and right and you will see the
        colors change right before your very eyes! <br></br>OR
        <br></br>
        Click the randomizer button to have a random color arrangement chosen
        for you!
      </p>
      <p className="hslvalue">
        hsl value: ({hue}, {saturation}%, {lightness}%){' '}
      </p>

      <figure style={newStyle}>
        <i className="first fas fa-sun fa-7x"></i>
        <i className="second fas fa-sun fa-10x"></i>
        <i className="third fas fa-sun fa-9x"></i>
        {/* <i className="third fas fa-rain fa-9x"></i> */}
      </figure>
    </main>
  )
}
