import '../styles/Layout.css';

const Layout = ({ bodyComponent }) => {
    return (
        <div className='Spa'>
            <div className='header'>
                <div className='title'>Welcome to RatShop</div>
                <div className='nav'>
                    <a href='/'>&nbsp;Home&nbsp;</a>
                    |
                    <a href='/shop'>&nbsp;Shop&nbsp;</a>
                </div>
            </div>
            <div className='body'>{bodyComponent}</div>
        </div>
    );
}

export default Layout;