# de Jong Attractor Visualization

This project provides a WebGL-based visualization of the de Jong attractor, a type of strange attractor defined by a system of two-dimensional difference equations.

## Overview

The de Jong attractor, named after Peter de Jong, creates fascinating and complex patterns based on simple mathematical rules. This visualization renders the attractor using WebGL, allowing for smooth, real-time animation and interaction.

## Features

- Real-time rendering of the de Jong attractor
- Smooth animation with parameter changes over time
- Efficient point generation using WebGL shaders
- Responsive canvas that adapts to window size

## Technical Details

The project is implemented using the following technologies:

- HTML5 for structure
- CSS3 for styling
- JavaScript for logic and WebGL interaction
- WebGL for high-performance rendering

The core of the visualization is implemented in the vertex shader, which iterates the de Jong equations for each point. The fragment shader is used to render each point with a slight opacity, creating a density map effect.

## Project Structure

- `index.html`: The main HTML file that sets up the canvas and includes necessary scripts
- `styles.css`: Contains all the styling for the page
- `script.js`: The main JavaScript file that sets up WebGL context and handles rendering
- `shaders.js`: Contains the vertex and fragment shader source code

## Customization

You can easily customize the attractor by modifying the parameters in the vertex shader:

```glsl
float a = -2.0 + sin(u_time / 8000.0);
float b = -2.0;
float c = -1.2;
float d = 2.0;
```
Adjusting these values will change the shape and behavior of the attractor.

## Performance Considerations
The visualization uses a high number of points (2^18) to create a detailed render of the attractor. On less powerful devices, you may want to reduce this number for better performance.

## Future Enhancements
Potential areas for future development include:

- User interface for real-time parameter adjustment
- Color mapping based on point density or other attributes
- Multiple attractor types selectable by the user
- Post-processing effects for enhanced visual appeal

## Contributing
Contributions to improve the visualization or add new features are welcome. Please feel free to submit issues or pull requests.

