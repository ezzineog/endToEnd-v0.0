import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber'

const CustomCanvas = ({ height, width }) => {
    const canvas = useRef();

    useEffect(() => {
        // const context = canvas.current.getContext('2d');
    });

    return (
        <Canvas ref={canvas} height={height} width={width} />
    );
};

CustomCanvas.propTypes = {
    draw: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
};

export default CustomCanvas;
