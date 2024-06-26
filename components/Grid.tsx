"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

interface GridItemProps {
    image: string;
    explanation: string;
    associatedImages: string[];
}

const GridItem: React.FC<GridItemProps> = ({ image, explanation, associatedImages }) => {
    const [fullscreen, setFullscreen] = useState(false);

    const handleImageClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setFullscreen(true);
    };

    const handleCloseFullscreen = (e: React.MouseEvent) => {
        e.stopPropagation();
        setFullscreen(false);
    };

    return (
        <>
            <div
                className="relative w-full h-0 pb-[75%] cursor-pointer transition-transform duration-300"
                onClick={handleImageClick}
            >
                <Image src={image} alt={explanation} layout="fill" objectFit="cover" />
            </div>
            {fullscreen && (
                <div
                    className="fixed top-0 left-0 w-screen h-screen bg-black z-50 flex items-center justify-center"
                    onClick={handleCloseFullscreen}
                >
                    <div className="flex ">
                        <Image src={image} alt={explanation} fill={true} className="w-half h-full object-cover rounded shadow-md" />

                    </div>
                    <div className="flex w-screen absolute bottom-0 left-0 text-justify opacity-60 bg-slate-700 p-4">
                        <p className="text-white">{explanation}</p>
                    </div>
                </div>
            )}
        </>
    );
};



interface GalleryDataItem {
    src: string;
    explanation: string;
    associatedImages: string[];
}


interface GridProps {
    galleryData: GalleryDataItem[];
}

const Grid: React.FC<GridProps> = ({ galleryData }) => {
    const columnClasses = classNames(
        'grid',
        'px-12',
        'w-[100%]',
        'gap-20',
        'grid-cols-1',
        'sm:grid-cols-1',
        'md:grid-cols-2',
        'lg:grid-cols-3',
        'xl:grid-cols-4',
        
    );

    return (
        <div className="flex justify-center items-center w-[100%] mx-auto">
            <div className={columnClasses}>
                {galleryData.map((item, index) => (
                    <GridItem key={index} image={item.src} explanation={item.explanation} associatedImages={item.associatedImages} />

                ))}
            </div>
        </div>
    );
};

export default Grid;
