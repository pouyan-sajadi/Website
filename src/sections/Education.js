// src/components/sections/Education.js
import React from 'react';
import './Education.css';

function Education() {
  const education = [
    {
      degree: "Master of Science",
      date: "Sep. 2022 – Aug. 2024",
      school: "Simon Fraser University",
      major: "Mechatronic Systems Engineering",
      details: [
        "GPA: 4.18/4.3",
        "Nominated for the prestigious Governor General's Gold Medal, awarded to only two SFU graduate students with the most outstanding academic records during thesis completion.",
        "Related Courses: Machine Learning, Analysis of Experimental and Observed Data, Methods of Research"
      ]
    },
    {
      degree: "Bachelor of Science",
      date: "Sep. 2017 – Feb. 2022",
      school: "Sharif University of Technology",
      major: "Industrial Engineering",
      details: [
        "GPA: 4.11/4.3",
        "Related Courses: Operation Research, Engineering Statistics, Probability, Artificial Intelligence, Data Mining, Python Programming"
      ]
    }
  ];

  return (
    <section className="education-section">
      <h2 className="section-title">
        <i className="section-icon">🎓</i>
        Education
      </h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-header">
              <h3>{edu.degree}</h3>
              <span className="education-date">{edu.date}</span>
            </div>
            <div className="education-school">
              <h4>{edu.school}</h4>
              <p className="education-major">{edu.major}</p>
            </div>
            <ul className="education-details">
              {edu.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;