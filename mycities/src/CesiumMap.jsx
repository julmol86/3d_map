import { useEffect, useRef } from 'react';
import { Viewer, Cartesian3, Color, VerticalOrigin, Math as CesiumMath } from 'cesium';  
import 'cesium/Build/Cesium/Widgets/widgets.css';  

const CesiumMap = () => {
    const cesiumContainerRef = useRef(null);

    useEffect(() => {
        const viewer = new Viewer(cesiumContainerRef.current, {
            terrainProviderViewModels: [],  
            terrainProviderViewModel: undefined,  
            
        });

                const cities = [
            {name: 'Tashkent',
                position: Cartesian3.fromDegrees(69.2401, 41.2995),
                description: 'Tashkent'
            },
            {
                name: 'Moscow',
                position: Cartesian3.fromDegrees(37.6173, 55.7558),
                description: 'Moscow'
            },
            {
                name: 'Tampere',
                position: Cartesian3.fromDegrees(23.761, 61.4978),
                description: 'Tampere'
            },
            {
                name: 'Joensuu',
                position: Cartesian3.fromDegrees(29.7604, 62.6000),
                description: 'Joensuu'
            },
            {
                name: 'Kangasala',
                position: Cartesian3.fromDegrees(24.0738, 61.4639),
                description: 'Kangasala'
            },
            {
                name: 'Turku',
                position: Cartesian3.fromDegrees(22.2666, 60.4518),
                description: 'Turku'
            }
        ];

        cities.forEach(city => {
            viewer.entities.add({
                position: city.position,
                point: { pixelSize: 10, color: Color.BLUE },  
                label: {
                    text: city.name,
                    font: '14pt sans-serif',
                    verticalOrigin: VerticalOrigin.BOTTOM
                },
                description: city.description
            });
        });

        viewer.camera.setView({
            destination: Cartesian3.fromDegrees(25.0, 63.0, 3000000),
            orientation: {
                heading: CesiumMath.toRadians(0.0),
                pitch: CesiumMath.toRadians(-90.0),
                roll: 0.0
            }
        });

        return () => {
            viewer.destroy();
        };
    }, []);

    return <div ref={cesiumContainerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default CesiumMap;
