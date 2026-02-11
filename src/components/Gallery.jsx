import React, { useEffect, useState } from 'react';


export default function Gallery() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        // Dynamically import all image files from assets folder
        const imageModules = import.meta.glob('../assets/gallery/*.{jpg,png,jpeg,gif}');

        Promise.all(
            Object.values(imageModules).map(importImage => importImage())
        ).then(modules => {
            setImages(modules.map(mod => mod.default));
        });
    }, []);

    return (
        <div>
            {images.map((src, idx) => <img src={src} key={idx}   style={{ width: '100%', height: 'auto', display: 'block', margin: '10px auto' }}
            ></img>)}
        </div>

    );
}