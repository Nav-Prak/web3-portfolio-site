// Import Assets
import profile from '../assets/profile.jpg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Naveen Prakaasham Vairaprakasam</h1>
                {/* <p>Bug Bounty Hunter</p><br/> */}
                <br></br>
                <a className='button' href="mailto:naveenprakaasam@gmail.com">Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;