// src/pages/Home.js
import React from 'react';
import profilePic from '../assets/image.png';
import './Home.css';
import  { useState } from 'react';
import mail from '../assets/mail.png';
import google from '../assets/google.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import { Link } from 'react-router-dom'; 

function Education() {
  const [expandedId, setExpandedId] = useState(null);

  const education = [
    {
      id: 1,
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
      id: 2,
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

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="education-section">
      <h2 className="section-title">
        <i className="section-icon">🎓</i>
        Education
      </h2>
      <div className="education-list">
        {education.map((edu) => (
          <div 
            key={edu.id} 
            className={`education-card ${expandedId === edu.id ? 'expanded' : ''}`}
            onClick={() => toggleDetails(edu.id)}
          >
            <div className="education-header">
              <div className="education-title">
                <h3>{edu.degree}</h3>
                <h4>{edu.school}</h4>
                <p className="education-major">{edu.major}</p>
              </div>
              <div className="education-meta">
                <span className="education-date">{edu.date}</span>
                <span className="expand-icon">
                  {expandedId === edu.id ? '−' : '+'}
                </span>
              </div>
            </div>
            {expandedId === edu.id && (
              <div className="education-details-container">
                <ul className="education-details">
                  {edu.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
function Experience() {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      id: 1,
      title: "Applied ML Researcher",
      company: "Simon Fraser University",
      location: "Burnaby, BC",
      date: "Sep. 2022 – Aug. 2024",
      details: [
        "Built a distributed data pipeline on Compute Canada, leveraging parallel processing and multi-node training to enhance scalability and achieve a 12x performance boost.",
        "Reduced validation errors below 3% by integrating physics into ML pipelines in Pytorch, minimizing dependency on large datasets.",
        "Enabled real-time adaptability for 3D printing by extending the data pipeline to process live data.",
        "Published in top journals on AI applications in engineering."
      ]
    },
    {
      id: 2,
      title: "Data Science Researcher",
      company: "Sharif University of Tech",
      location: "Tehran, Iran",
      date: "Dec. 2020 – Mar. 2021",
      details: [
        "Achieved 96% precision in accident prediction with deep learning using Tensorflow for urban safety.",
        "Identified high-risk accident periods via temporal trend analysis, enabling targeted interventions.",
        "Revealed key urban congestion patterns using EDA and data visualization techniques.",
        "Delivered actionable insights and extracted targeted safety KPIs and measures."
      ]
    },
    {
      id: 3,
      title: "Business Intelligence/Data Analyst",
      company: "Sepehr Plastic",
      location: "Tehran, Iran",
      date: "Oct. 2020 – Jun. 2021",
      details: [
        "Reduced query execution time by 40% by optimizing pipelines and integrating MySQL.",
        "Collaborated with stakeholders to identify and resolve data inconsistencies.",
        "Designed Power BI dashboards adopted by 5+ departments, driving data-informed decisions.",
        "Streamlined data pipelines, reducing cross-departmental data request resolution times by 200%."
      ]
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "Fixshow",
      location: "Tehran, Iran",
      date: "Apr. 2019 – Dec. 2019",
      details: [
        "Improved recommendation system performance by 15% via predictive analytics in Scikit-Learn.",
        "Increased marketing campaign effectiveness by 10% with engineered features for KPIs.",
        "Boosted customer engagement by optimizing strategies with A/B testing experiments.",
        "Extracted actionable business insights via statistical modeling and data visualization in Matplotlib."
      ]
    }
  ];

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="experience-section">
      <h2 className="section-title">
        <i className="section-icon">💼</i>
        Experience
      </h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <div 
            key={exp.id} 
            className={`experience-card ${expandedId === exp.id ? 'expanded' : ''}`}
            onClick={() => toggleDetails(exp.id)}
          >
            <div className="experience-header">
              <div className="experience-title">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="experience-location">{exp.location}</p>
              </div>
              <div className="experience-meta">
                <span className="experience-date">{exp.date}</span>
                <span className="expand-icon">
                  {expandedId === exp.id ? '−' : '+'}
                </span>
              </div>
            </div>
            {expandedId === exp.id && (
              <div className="experience-details-container">
                <ul className="experience-details">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const [expandedId, setExpandedId] = useState(null);

  const skillsData = [
    {
      id: 1,
      category: "Tools & Languages",
      icon: "🛠️",
      skills: [
        "Python (Pandas, Numpy, Matplotlib, Scikit-Learn, TensorFlow, PyTorch)",
        "SQL",
        "R",
        "Power BI",
        "AWS (Lambda, Glue, SageMaker)"
      ]
    },
    {
      id: 2,
      category: "Data Processing & Analysis",
      icon: "📊",
      skills: [
        "Data Warehousing and ETL Processes",
        "Exploratory Data Analysis (EDA)",
        "Experimentation",
        "Feature Selection & Engineering",
        "Regression Analysis"
      ]
    },
    {
      id: 3,
      category: "Data Modeling & Machine Learning",
      icon: "🤖",
      skills: [
        "Model Deployment",
        "Neural Networks (TensorFlow, PyTorch)",
        "Retrieval-augmented generation (RAG)",
        "Causal Modeling and Inference",
        "Statistical Modeling"
      ]
    },
    {
      id: 4,
      category: "Software Engineering",
      icon: "💻",
      skills: [
        "Data Structures & Algorithms",
        "Version Control",
        "Containarisation",
        "Logging and monitoring"
      ]
    }
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">
        <i className="section-icon">⚡</i>
        Skills
      </h2>
      <div className="skills-grid">
        {skillsData.map((category) => (
          <div
            key={category.id}
            className="skill-card"
          >
            <div 
              className="skill-category"
              onClick={() => setExpandedId(expandedId === category.id ? null : category.id)}
            >
              <div className="skill-category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.category}</h3>
                <span className="expand-icon">
                  {expandedId === category.id ? '−' : '+'}
                </span>
              </div>
            </div>
            {expandedId === category.id && (
              <div className="skill-list-container">
                <ul className="skill-list">
                  {category.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="home">
      <nav className="navbar">
  <p className="nav-title">Pouyan Sajadi</p>
  <div className="nav-links">
    <Link to="/">About</Link>
    <Link to="/portfolio">Portfolio</Link>
  </div>
</nav>

      <main className="main-content">
        <div className="about-section">
          <div className="identity">
            <img
              className="profile-pic"
              src={profilePic}
              alt="Profile Pic"
            />
            <p className="identity-title">Pouyan Sajadi</p>
            <p className="identity-major">Data Scientist</p>
            <div className="social-links">
              <a href="mailto:pouyan.sajadi@gmail.com">
                <img src={mail} alt="Email" />
              </a>
              <a href="https://scholar.google.com/citations?user=7McvDK0AAAAJ&hl=en">
                <img src={google} alt="Google Scholar" />
              </a>
              <a href="https://github.com/pouyan-sajadi">
                <img src={github} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/pouyan-sajadi/">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>

          <div className="about-text">
            <p align="justify">
              I'm driven by curiosity and a love for tackling tough problems, 
              turning challenges into opportunities to create meaningful impact. 
              With a Master's in engineering and three years of experience across 
              diverse data roles, I've built a foundation that blends technical 
              expertise with a deep curiosity for uncovering insights. From leading 
              end-to-end data projects to translating complex problems into actionable 
              outcomes, my background demonstrates a consistent ability to deliver results.
              For me, data is more than just numbers—it's a tool for discovery and impact. 
              Whether designing machine learning models, streamlining decision-making 
              processes, or finding hidden efficiencies, I thrive on crafting solutions 
              that connect the dots between raw information and meaningful change. 
              My approach combines critical thinking, a hands-on mindset, and a drive 
              to ask questions that lead to the right answers.
            </p>
          </div>
        </div>

        <div className="content-sections">
          <Education />
          <Experience />
          <Skills />
        </div>
      </main>
    </div>
  );
}

export default Home;