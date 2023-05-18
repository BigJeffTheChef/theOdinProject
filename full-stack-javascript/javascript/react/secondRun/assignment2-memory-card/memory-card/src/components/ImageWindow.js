import { useEffect, useState, useCallback } from 'react';
import '../styles/ImageWindow.css';
import Image from './Image';





function ImageWindow(props) {
    // destructure props
    let { imgs, imgCount } = props;
    if (!imgCount) {
        imgCount = imgs.length;
    }
    const [chosen, setChosen] = useState([]);
    const handleImageClick = useCallback((event) => {
        console.log(`id ${event.target.id}`);
        const id = Number(event.target.id);
        console.log(`length was: ${chosen.length}`);
        console.log(`score was: ${props.score}`);

        // if image has already been chosen, reset score
        if (chosen.includes(id)) {
            setChosen(prev => []);
            props.onScoreUpdate(0);
            console.log("previously chosen - SCORE 0");
            return;
        }
        setChosen(prev => [...prev, id]);
        props.onScoreUpdate(prevScore => prevScore + 1);
        // add new image not in starting images array
        let components = imageComponents;

        // select valid images to potentially be added
        let selectableImages = imagesCreated.filter(e => !startingImgs.includes(e));

        // must not be the chosen image, must not be in imageComponents
        const removalIndex = components.findIndex(e => e.props.id == id)
        components.splice(removalIndex, 1);

        // add a random element from selectableImages to components at index of removed element
        const rand = Math.random()
        const index = Math.round(rand * selectableImages.length) - 1;
        const randomSelection = selectableImages.splice(index, 1)[0];
        components.splice(removalIndex, 0, randomSelection);
        setImageComponents(prev => components);
        // remove old image
        // setImageComponents

        console.log("new image chosen - SCORE +1");
    }, [chosen, props]);
    // configure component state and hooks
    useEffect(() => {
        console.log(`[score: ${props.score}] [chosen is now: ${JSON.stringify(chosen)}]`);
    }, [props.score, chosen]);

    // create images
    const imagesCreated = [];
    for (let i = 0; i < imgs.length; i++) {
        const { src, alt } = imgs[i];
        imagesCreated.push(<Image src={src} alt={alt} key={alt} id={i} onClick={handleImageClick} />)
    }
    const startingImgs = imagesCreated.slice(0, imgCount);
    //const restOfImgs = imagesCreated.slice(imgCount);
    const [imageComponents, setImageComponents] = useState(startingImgs);

    // handlers

    // function handleImageClick(event) {
    //     console.log(`id ${event.target.id}`);
    //     const id = Number(event.target.id);
    //     console.log(`length was: ${chosen.length}`);
    //     console.log(`score was: ${props.score}`);

    //     // if image has already been chosen, reset score
    //     if (chosen.includes(id)) {
    //         setChosen([]);
    //         props.onScoreUpdate(0);
    //         console.log("previously chosen - SCORE 0");
    //         return;
    //     }
    //     setChosen(prev => [...prev, id]);
    //     props.onScoreUpdate(prevScore => prevScore + 1);
    //     // add new image not in starting images array
    //     let components = imageComponents;

    //     // select valid images to potentially be added
    //     let selectableImages = imagesCreated.filter(e => !startingImgs.includes(e));

    //     // must not be the chosen image, must not be in imageComponents
    //     const removalIndex = components.findIndex(e => e.props.id == id)
    //     components.splice(removalIndex, 1);

    //     // add a random element from selectableImages to components at index of removed element
    //     const rand = Math.random()
    //     const index = Math.round(rand * selectableImages.length) - 1;
    //     const randomSelection = selectableImages.splice(index, 1)[0];
    //     components.splice(removalIndex, 0, randomSelection);
    //     setImageComponents(prev => components);
    //     // remove old image
    //     // setImageComponents

    //     console.log("new image chosen - SCORE +1");
    // }

    // return component
    return (
        <div className='ImageWindowContainer'>
            <div className='ImageWindow'>
                {imageComponents}
            </div>
        </div>
    );
}

export default ImageWindow;