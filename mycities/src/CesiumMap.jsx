import { useEffect, useRef } from 'react';
import { Viewer, Cartesian3, Color, VerticalOrigin, Math as CesiumMath } from 'cesium';  
import 'cesium/Build/Cesium/Widgets/widgets.css';  
import { cities } from './cities';

const CesiumMap = () => {
    const cesiumContainerRef = useRef(null);

    useEffect(() => {
        const viewer = new Viewer(cesiumContainerRef.current, {
            terrainProviderViewModels: [],  
            terrainProviderViewModel: undefined,  
            
        });

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
