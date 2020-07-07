import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="col-md-6">
                    <a className="btn btn-outline-light btn-sm"
                        href="https://github.com/tankip/kegivers"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Open project on Github</a>
                </div>
                <div className="col-md-6">
                    <p><small>The information provided on this website is for general informational purposes only.
                    </small></p>
                    <p><small>Data provided by <a
                        href="https://www.globalgiving.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Global Giving</a></small></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
