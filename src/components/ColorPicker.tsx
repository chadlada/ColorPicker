import React, { useState } from 'react'

export function ColorPicker() {
  // HOOKS//       const .....
  const [hue, setHue] = useState('60')
  const [saturation, setSaturation] = useState('50')
  const [lightness, setLightness] = useState('50')
  const [alpha, setAlpha] = useState('50')
  const newBackgroundColor = `hsla(${hue},${saturation}%,${lightness}%,${alpha}`

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
        <p>Hue</p>
        <input
          className="hue"
          type="range"
          onChange={handleHueRange}
          min="0"
          max="360"
          value="164"
        />
        <p>Saturation</p>
        <input
          className="saturation"
          onChange={handleSaturationRange}
          type="range"
          min="0"
          max="100"
          value="50"
        />
        <p>Lightness</p>
        <input
          className="lightness"
          onChange={handleLightnessRange}
          type="range"
          min="0"
          max="100"
          value="50"
        />
        <p>Alpha</p>
        <input
          className="alpha"
          onChange={handleAlphaRange}
          type="range"
          min="0"
          max="100"
          value="50"
        />
      </section>
    </div>
  )
}
