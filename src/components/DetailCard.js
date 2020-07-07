import React from 'react';
import {
    Link
} from "react-router-dom";
const DetailCard = ({ project }) => {
    return (
        <div className="card mb-4 shadow">
            <div className="row no-gutters">
                <div className="col-md-3 image">
                    <img src={project.imageLink} className="card-img" alt={project.title} />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h6 className="card-title">{project.title}</h6>
                        <p className="card-text">
                            <small className="text-muted">By {project.organization.name}, {project.contactCountry}</small><br />
                            <small className="text-muted">Goal - <strong>${project.goal}</strong>, Recieved - <strong>${project.funding}</strong></small><br />
                            <small className="text-muted">Theme: <strong>{project.themeName}</strong></small>
                        </p>
                        <p className="card-text description"><small>{project.summary}</small></p>
                        <p className="card-text">
                            <Link
                                className="btn btn-outline-dark btn-sm"
                                to={{
                                    pathname: "/more",
                                    details: { project }
                                }}
                            >Learn More</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DetailCard;
