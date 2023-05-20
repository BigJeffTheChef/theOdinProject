import '../styles/Layout.css';

const Layout = ({ BodyComponent }) => {
    return (
        <div className='Spa'>
            <div className='header'>
                <div className='title'>title</div>
                <div className='nav'>nav</div>
            </div>
            <div className='body'>
                <BodyComponent />
            </div>
        </div>
    );
}

export default Layout;