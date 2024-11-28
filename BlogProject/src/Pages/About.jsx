import React from 'react';
import '../index.css'; // Import the CSS file for styling

function About() {
    return (
        <div className="about-container">
            <div className="about-card">
                <h1 className="about-title">About Me</h1>
                <p>
                    I am a dedicated individual with a strong interest in software development, focusing on Java and the MERN stack.
                    I enjoy building web applications and working on projects that solve real-world problems.
                </p>
                <p>
                    My current projects include developing a model for detecting diseases in cotton plants using YOLO and working on
                    various practice tasks to prepare for a role as a Java and MERN stack developer.
                </p>
                <p>
                    I am also exploring advanced tools and technologies like image processing and machine learning to create impactful
                    solutions. My organized and methodical approach helps me maintain structured datasets and clean codebases.
                </p>
                <p>
                    Additionally, I continuously work on improving my communication skills, focusing on recognizing vocabulary to
                    overcome any speaking challenges.
                </p>
                <p>
                    I am enthusiastic about learning, growing, and contributing to innovative projects in the tech industry.
                </p>
            </div>
        </div>
    );
}

export default About;