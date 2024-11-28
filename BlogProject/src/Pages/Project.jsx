import React from 'react';
import '../index.css'; // Import the CSS file for styling

function Project() {
    const projects = [
        { name: 'Cotton Disease Detection', description: 'A model to identify diseased and healthy cotton plants using YOLO.' },
        
        { name: 'Portfolio Website', description: 'A personal portfolio to showcase my skills and projects.' }
    ];

    return (
        <div className="project-container">
            <h1 className="project-title">Projects</h1>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;