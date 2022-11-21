// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Patricio Bolaños</h1>
                <p>Web3 developer</p>
                <a href="mailto:patriciobc23@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;