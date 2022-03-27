Hook, line and sinker!

Deployed Website: https://colorpickercl.netlify.app/

In this assignment, you'll create an HSL(a) color picker with React, but this time using React Hooks

Objectives

    Respond to user events in React
    Use hooks in react to drive changes to a user interface
    Use props to drive inline styles to dynamically update the appearance of DOM elements
    Understand RGB vs HSL color models
    Use controlled form inputs in React

Explorer Mode

    Use only one component, your App to contain the state values and the user interface.
    Represent the three values, hue, saturation, and lightness with hooks.
    Add three sliders that update their respective values (hue, saturation, and lightness).
    Display the color on the screen, in both text (i.e. hsl(50, 8%, 20%)) and the actual color as a background color on an element.
    Initialize the hooks to a random color when the page is loaded.
    Add a button that picks a new random color.

Adventure Mode

    Create a ColorSlider component that represents the slider control. What props will you need to send? What function will you need to send to manipulate the correct state?
    Add a fourth slider for alpha, be sure to put some kind of pattern behind your color so the user can see the transparency effect.
    Add a section that displays a CSS class that applies the current background color to an element, just like https://cssgradient.io/
    Only display the output color text in hsla() if the alpha value is less than 1.
