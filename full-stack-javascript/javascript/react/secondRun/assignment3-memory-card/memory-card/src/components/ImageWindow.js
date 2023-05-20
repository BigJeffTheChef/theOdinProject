import {useEffect, useState, useCallback} from 'react';
import '../styles/ImageWindow.css';
import Image from './Image';

function ImageWindow(props) {
    // destructure props
    const {imgs, imgCount, handleImageClick, chosen } = props;

    // // validate imgCount
    // if (!imgCount) {
    //     imgCount = imgs.length;
    // }

    // create images
    const imagesCreated = [];
    for (let i = 0; i < imgs.length; i++) {
        const {src, alt} = imgs[i];
        imagesCreated.push(
            <Image
                src={src}
                alt={alt}
                key={alt}
                id={alt}
                onClick={handleImageClick}
            />
        );
    }
    //const imagesDisplayed = imagesCreated.slice(0, imgCount);
    let i = 0;

    const imagesDisplayed = imagesCreated
        .map(image => ({image, sortVal: Math.random()}))
        .sort((a,b) => a.sortVal - b.sortVal)
        .map(imageObj => imageObj.image)
        .filter(image => i++ < imgCount);

    let inChosen = 0;
    for (const imagesDisplayedElement of imagesDisplayed) {
        if (chosen.includes(imagesDisplayedElement.props.alt)) {
            inChosen++;
        }
    }

    if (inChosen === imgCount) {
        const randomIndex = Math.round(Math.random() * imgCount) - 1;
        const mapped = imagesDisplayed.map(i => i.props.alt);
        // const newImgTag = chosen.find(altTag => {
        //     const includes = !mapped.includes(altTag)
        //     return includes;
        // });
        const newImg = imagesCreated.find(image => {
            const includes = !mapped.includes(image.props.alt)
            return includes;
        });
        //const newImg = imagesCreated.find(i => i.props.alt === newImgTag)
        imagesDisplayed.splice(randomIndex, 1, newImg);
    }

    // return component
    return (
        <div className='ImageWindowContainer'>
            <div className='ImageWindow'>
                {imagesDisplayed}
            </div>
        </div>
    );
}

export default ImageWindow;