# Cesium Map Project

### Overview

This project integrates CesiumJS with React to display a 3D globe with cities marked on it. The CesiumMap component sets up a Cesium viewer, adds city markers, and customizes the camera view.

### Setup

To get started, you'll need to have Node.js and npm installed

Clone the Repository and run:

```
cd mycities
npm install
npm run dev
```

The application will be available at http://localhost:3000

You can modify port in vite.config.js

### Usage

The CesiumMap component initializes a CesiumJS Viewer instance and renders it inside a React component. It displays a 3D globe with markers for cities provided in the cities array.

### Key Features

City Markers: Cities are added as points with labels.

Each city’s position, name, and description are pulled from the cities array.

Camera View: The camera is positioned to show a specific view of the globe.

### Code Breakdown

CesiumMap Component:

useRef is used to create a reference to the container element where the Cesium viewer will be rendered.

useEffect initializes the Cesium Viewer and adds city markers when the component mounts.

viewer.entities.add is used to add markers for each city, with a blue point and label.

The camera view is set to a specific position and orientation.

The viewer.destroy() method is called to clean up the Cesium viewer when the component unmounts.

### Dependencies:

cesium: The CesiumJS library for 3D geospatial visualization.

react: The React library for building the user interface.

### Configuration

You can modify the cities array in ./cities to include different cities or adjust their properties.
