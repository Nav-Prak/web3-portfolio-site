// Import Assets
import google from '../assets/google.png';
import ms from '../assets/ms.png';
import h1 from '../assets/h1.png';
import bugc from '../assets/bugc.png';
import intigriti from '../assets/intigriti.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>Bug Bounties & Hall of Fame Mentions</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Google</h3>
                    <img src={google} alt="Google Bug Hunters Page" />
                    <p>Got listed in the Hall of Fame for multiple bug reports
                    </p>

                    <a href="https://bughunters.google.com/profile/3758afe6-701d-4c5b-a4f7-540b09ddd333" target="_blank" rel="noreferrer" className="button">Link</a>
                </div>

                <div className="projects__card">
                    <h3>Morgan Stanley</h3>
                    <img src={ms} alt="Morgan Stanley Hall of Fame" />
                    <p>Got listed in the Hall of Fame for multiple bug reports
                    </p>

                    <a href="https://morganstanley.responsibledisclosure.com/hc/en-us/articles/360042657834" target="_blank" rel="noreferrer" className="button">Link</a>
                </div>

                <div className="projects__card">
                    <h3>Paytm</h3>
                    <p>Discovered a misconfigured admin panel that allowed 
                        anyone to log in as admin and ultimately led to full 
                        write access to their S3 bucket
                    </p>
                </div>

                <div className="projects__card">
                    <h3>HackerOne</h3>
                    <img src={h1} alt="HackerOne Profile" />
                    <p>Worked with multiple companies including Sony, USPS, Cedars-Sinai, Adobe, 
                        and AT&T to responsibly disclose multiple valid vulnerabilities including 
                        gaining complete control of an API endpoint.
                    </p>

                    <a href="https://hackerone.com/navprak" target="_blank" rel="noreferrer" className="button">Link</a>
                </div>

                <div className="projects__card">
                    <h3>Bugcrowd</h3>
                    <img src={bugc} alt="Bugcrowd Profile" />
                    <p>Found various vulnerabilities including Log4J, Cross-Site Scripting, 
                        and Sensitive Data Exposure across companies like Dell, Opera, Comcast,
                        and other private programs with 100% report accuracy.
                    </p>

                    <a href="https://bugcrowd.com/Navprak" target="_blank" rel="noreferrer" className="button">Link</a>
                </div>

                <div className="projects__card">
                    <h3>Intigriti</h3>
                    <img src={intigriti} alt="Intigrity Profile" />
                    <p>Was one of the few people to submit a valid bug to LibreOffice during their time-limited bug bounty program.
Also assisted other companies - Red Bull and GULP in securing their systems.
                    </p>

                    <a href="https://app.intigriti.com/profile/navprak" target="_blank" rel="noreferrer" className="button">Link</a>
                </div>

                <div className="projects__card">
                    <h3>Dutch Government</h3>
                    <p>Reported a vulnerability in a web endpoint and got a T-shirt saying "I hacked the Dutch Government and all I got was this lousy T-Shirt" rewarded as swag
                    </p>
                </div>

                <div className="projects__card">
                    <h3>Townscript</h3>
                    <p>Discovered a vulnerability that led to the compromise of the company’s AWS S3 buckets, and also another
                        second-order subdomain takeover vulnerability.
                    </p>
                </div>

                <div className="projects__card">
                    <h3>CVE-2022-0501</h3>
                    <p>Found a zero-day vulnerability in an Open-Source package and got a CVE assigned
                    </p>
                    <a href="https://huntr.dev/bounties/9af1c35e-3f74-4c93-a241-e8be01335ec7/" target="_blank" rel="noreferrer" className="button">Link</a>
                </div>

            </div>
        </section>
    );
}

export default Projects;