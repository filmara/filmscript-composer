import React, { useEffect, useRef, useState } from 'react';
import { useFileSystem } from '~/context';
const LazyImage = ({ src, alt, description }: any) => {
    const [imageUrl, setImageUrl] = useState('');
    const imageRef = useRef<HTMLImageElement>(null);
    const { readFileAndStore } = useFileSystem();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Fetch and store the image when the element is visible
                    readFileAndStore(src, description).then(setImageUrl);
                    observer.disconnect(); // Stop observing once the image is loaded
                }
            });
        });

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, [src, description]);

    return (
        <img ref={imageRef} src={imageUrl} alt={alt} className="p-8" />
    );
};

export { LazyImage };
