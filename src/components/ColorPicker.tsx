import React, { useState } from 'react'

export function ColorPicker() {
  // HOOKS//       const .....
  const [hue, setHue] = useState('60')
  const [saturation, setSaturation] = useState('50')
  const [lightness, setLightness] = useState('50')
  const [alpha, setAlpha] = useState('50')
  const newBackgroundColor = `hsla(${hue},${saturation}%,${lightness}%,${alpha}`
  const newStyle = { newBackgroundColor: newBackgroundColor }

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
        <header>
          <h1>Color Color Color</h1>
        </header>
        <p>Hue</p>
        <input
          id="hue"
          name="hue"
          type="range"
          onChange={handleHueRange}
          min="0"
          max="360"
          value="164"
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
          value="50"
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
          value="50"
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
          value="50"
        />
        <label htmlFor="Alpha">A {alpha}</label>
      </section>
    </div>
  )
}
