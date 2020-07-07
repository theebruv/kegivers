import React from 'react'
import { useHistory, Link } from 'react-router-dom';
const More = (props) => {
    const history = useHistory();
    let project;
    if (props.location.details) {
        project = props.location.details.project;
    } else {
        history.push("/");
    }
    return (
        <div className="main">
            <div>
                <Link className="btn btn-outline-dark btn-sm" to="/">
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z" />
                        <path fillRule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    &nbsp;Go Back
                </Link>
            </div>
            {
                project ?
                    <>



                        <section>

                            <br />
                            <div className="card mb-4 shadow">
                                <div className="card-body">
                                    <h3 className="card-title">{project.title}</h3>
                                    <div className="card-text">

                                        <small className="text-muted">By <strong>{project.organization.name}, {project.contactCountry}</strong></small><br />
                                        <small className="text-muted">
                                            Goal - <strong>${project.goal}</strong> |
                                        Recieved - <strong>${project.funding}</strong> |
                                        Remaining - <strong>${project.remaining}</strong>
                                        </small><br />
                                        <small className="text-muted">
                                            Region: <strong>{project.country}, {project.region}</strong>
                                        </small><br />

                                        <small className="text-muted">
                                            Theme: <strong>{project.themeName}</strong>
                                        </small>

                                    </div>
                                    <hr />
                                    <article>
                                        <h5>Project Summary</h5>
                                        <p>{project.summary}</p>
                                    </article>

                                    <article>
                                        <h5>Need</h5>
                                        <p>{project.need}</p>
                                    </article>

                                    <article>
                                        <h5>Long Term Impact</h5>
                                        <p>{project.longTermImpact}</p>
                                    </article>

                                    <article>
                                        <h5>Activities</h5>
                                        <p>{project.activities}</p>
                                    </article>

                                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
                                        Learn more about this project
                                        &nbsp;
                                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z" />
                                            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z" />
                                        </svg>
                                    </a>

                                </div>
                            </div>

                            <div className="card shadow">
                                <div className="card-body">
                                    <h5 className="card-title">{project.organization.name}, {project.contactCountry}</h5>
                                    <p className="card-text"><strong>Mission</strong> - {project.organization.mission}</p>
                                    <a href={project.organization.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
                                        Learn more about this organization
                                        &nbsp;
                                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z" />
                                            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </>
                    : ''
            }

        </div>
    )
}

export default More;
