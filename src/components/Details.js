import React from 'react';
import DetailCard from './DetailCard';

const Details = ({projects, loadMore}) => {

    return (
        <section className="details">
            <h3>All projects</h3>
            <hr />
            <div className="row">
                {projects.map((project) =>

                    <div className="col-xl-6">
                        <DetailCard key={project.id} project={project} />
                    </div>
                )}
            </div>
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-8 text-center" >
                    <button className="btn btn-outline-dark btn-sm shadow" onClick={loadMore}>Load More Projects</button>
                </div>
                <div className="col-2">
                </div>
            </div>

        </section>
    );
};

export default Details;
