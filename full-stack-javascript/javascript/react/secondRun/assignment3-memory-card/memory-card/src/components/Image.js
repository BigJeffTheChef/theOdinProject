import '../styles/Image.css'

function Image(props) {
    return (
        <div className='ImageContainer'>
            <img className='Image' src={props.src} alt={props.alt} id={props.id} onClick={props.onClick}></img>
        </div>
    );
}

export default Image;