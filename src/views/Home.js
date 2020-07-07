import React from 'react'
import Details from '../components/Details';
const Home = ({projects, loadMore}) => {
    return (
        <div>
            <div className="main">
                <section className="call-to-action">
                    <strong>Ke Givers </strong>is a website that lists nonprofits, donors, and companies from Kenya that are in need of tools, training, and support to be more effective and make our world a better place.
                </section>
                <section>
                    <Details projects={projects} loadMore={loadMore}/>
                </section>
            </div>

        </div>
    )
}

export default Home;
