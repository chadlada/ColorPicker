import React, { useState } from 'react'

export function ColorPicker() {
  // HOOKS//       const .....
  const [hue, setHue] = useState('60')
  const [saturation, setSaturation] = useState('50')
  const [lightness, setLightness] = useState('50')
  const [alpha, setAlpha] = useState('50')

  const newColor = `hsla(${hue},${saturation}%,${lightness}%,${alpha}`
  const newStyle = { color: newColor }

  // FUNCTIONS
  function handleHueRange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setHue(event.target.value)
  }
  function handleSaturationRange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setSaturation(event.target.value)
  }
  function handleLightnessRange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setLightness(event.target.value)
  }
  function handleAlphaRange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setAlpha(event.target.value)
  }

  return (
    <div>
      <section>
        <header style={newStyle}>
          <div className="color1">Color</div>
          <div className="color2">Color</div>
          <div className="color3">Color</div>
        </header>

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
        <label htmlFor="Hue">H {hue}</label>

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
        <label htmlFor="Saturation">S {saturation}</label>

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
        <label htmlFor="Lightness">L {lightness}</label>

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
        <label htmlFor="Alpha">A {alpha}</label>
      </section>
    </div>
  )
}
