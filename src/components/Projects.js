// Import Assets
import google from '../assets/google.png';
import ms from '../assets/ms.png';
import h1 from '../assets/h1.png';
import bugc from '../assets/bugc.png';
import intigriti from '../assets/intigriti.png';
import zeroday from '../assets/zeroday.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>Bug Bounties & Hall of Fame Mentions</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Google</h3>
                    <img src={google} alt="Google Bug Hunters Page" />
                    <p>Recognized in the Hall of Fame for reporting multiple security vulnerabilities.</p>
                    <a href="https://bughunters.google.com/profile/3758afe6-701d-4c5b-a4f7-540b09ddd333" target="_blank" rel="noreferrer" className="button">Link</a>
                </div>

                <div className="projects__card">
                    <h3>Morgan Stanley</h3>
                    <img src={ms} alt="Morgan Stanley Hall of Fame" />
                    <p>Listed in the Hall of Fame for identifying and responsibly disclosing critical security issues.</p>
                    <a href="https://morganstanley.responsibledisclosure.com/hc/en-us/articles/360042657834" target="_blank" rel="noreferrer" className="button">Link</a>
                </div>

                <div className="projects__card">
                    <h3>CVE-2024-25723 & CVE-2022-0501</h3>
                    <img src={zeroday} alt="Huntr"/>
                    <p>Identified two zero-day vulnerabilities in open-source packages, earning CVE assignments.</p>
                    <a href="https://huntr.com/users/nav-prak" target="_blank" rel="noreferrer" className="button">Link</a>
                </div>

                

                <div className="projects__card">
                    <h3>HackerOne</h3>
                    <img src={h1} alt="HackerOne Profile" />
                    <p>Collaborated with companies like Sony, USPS, Cedars-Sinai, Adobe, and AT&T to responsibly disclose vulnerabilities, including API endpoint exploits.</p>
                    <a href="https://hackerone.com/navprak" target="_blank" rel="noreferrer" className="button">Link</a>
                </div>

                <div className="projects__card">
                    <h3>Bugcrowd</h3>
                    <img src={bugc} alt="Bugcrowd Profile" />
                    <p>Reported vulnerabilities like Log4Shell, Cross-Site Scripting, and Sensitive Data Exposure with 100% report accuracy for companies such as Dell, Opera, and Comcast.</p>
                    <a href="https://bugcrowd.com/Navprak" target="_blank" rel="noreferrer" className="button">Link</a>
                </div>

                <div className="projects__card">
                    <h3>Intigriti</h3>
                    <img src={intigriti} alt="Intigriti Profile" />
                    <p>Submitted a valid bug to LibreOffice during a time-limited bug bounty program and assisted companies like Red Bull and GULP in securing their systems.</p>
                    <a href="https://app.intigriti.com/profile/navprak" target="_blank" rel="noreferrer" className="button">Link</a>
                </div>

                <div className="projects__card">
                    <h3>Paytm</h3>
                    <p>Discovered a misconfigured admin panel leading to full write access to their S3 bucket.</p>
                </div>

                <div className="projects__card">
                    <h3>Dutch Government</h3>
                    <p>Reported a vulnerability in a web endpoint and received swag for responsible disclosure.</p>
                </div>

                <div className="projects__card">
                    <h3>Townscript</h3>
                    <p>Discovered vulnerabilities leading to AWS S3 bucket compromise and a second-order subdomain takeover.</p>
                </div>

                

            </div>
        </section>
    );
}

export default Projects;
