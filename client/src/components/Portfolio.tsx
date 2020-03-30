import React from 'react';
import resumeDataType from '../interfaces/dataType';

export const Portfolio = (props: resumeDataType) => {

    const ProjectItem = (props: any) => {
        const project = props.project;
        const projectImage = 'images/portfolio/' + project.image;
        return <div>
            <div className="columns portfolio-item">
                <div className="item-wrap">
                    <a href={project.url} title={project.title}>
                        <img alt={project.title} src={projectImage} />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                                <h5>{project.title}</h5>
                                <p>{project.category}</p>
                            </div>
                        </div>
                        <div className="link-icon"><i className="fa fa-link"></i></div>
                    </a>
                </div>
            </div>
        </div>;
    }

    const projects = props.data ? props.data.projects.map((proj) =>
        <ProjectItem key={proj.title} project={proj} />
    ) : null;

    return (
        props.data ?
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {projects}
                        </div>
                    </div>
                </div>
            </section> : <div></div>
    );
}