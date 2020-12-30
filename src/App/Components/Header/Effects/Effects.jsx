import React, { useRef, useEffect } from 'react';
import { extend, useThree, useFrame } from 'react-three-fiber';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
import { GlitchPass } from './post/Glitchpass';
import { WaterPass } from './post/Waterpass';

extend({ EffectComposer, ShaderPass, RenderPass, WaterPass, FilmPass, GlitchPass })

export default function Effects({ down }) {
    const composer = useRef();
    const { scene, gl, size, camera } = useThree();

    useEffect(() => void composer.current.setSize(size.width, size.height), [size]);
    useFrame(() => composer.current.render(), 1);

    return (
        <effectComposer ref={composer} args={[gl]}>
            <renderPass attachArray='passes' scene={scene} camera={camera} />
            <waterPass attachArray='passes' factor={1.5} />
            <glitchPass attachArray='passes' factor={down ? 1 : 0} />
        </effectComposer>
    )
}
