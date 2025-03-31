// src/pages/Portfolio.js
import React from 'react';
import './Portfolio.css';
import github from '../assets/github.png';
import { Link } from 'react-router-dom'; // Add this import at the top
import storeImage from '../assets/ass.jpeg';  // Add your actual image paths
import stockImage from '../assets/Stock prediction.jpg';
import temperatureImage from '../assets/temperature prediction.jpg';
import accidentImage from '../assets/accident.jpg';
import gpttImage from '../assets/GPT2.jpg';
//import newssummarization from '../assets/News-summarization.jpg';

function Portfolio() {

  const projects = [
    
    {
      id: 6,
      title: "GPT-2 Fine-Tuning",
      description: "Custom implementation of GPT-2 model fine-tuning for specific domain adaptation",
      image: gpttImage,
      details: [
        "Fine-tuned OpenAI's GPT-2 on domain-specific datasets, leveraging nanoGPT for efficient customization",
        "Utilized multi-GPU distributed training on Compute Canada infrastructure to optimize performance",
        "Improved text generation by experimenting with model hyperparameters and transfer learning techniques",
        "Practiced model deployment in SageMaker, showcasing skills in managing production-grade ML workflows"
      ],
      tools: ["PyTorch", "GPT-2", "AWS SageMaker", "Distributed Training"],
      githubLink: "https://github.com/pouyan-sajadi/nanoGPT"
    },
    {
      id: 1,
      title: "Analyzing Store Sales",
      description: "Data analysis and visualization project focused on sales trends and patterns",
      image: storeImage,
      details: [
        "Conducted exploratory analysis to uncover sales trends and anomalies",
        "Created visualizations for a comprehensive understanding of data patterns",
        "Used hypothesis testing to validate assumptions and inform strategic decisions",
        "Contributed to evidence-based decision-making through statistical analysis"
      ],
      tools: ["Python", "Pandas", "Data Visualization", "Statistical Analysis"],
      githubLink: "https://github.com/pouyan-sajadi/Store-Sales-Analysis"
    },
    {
      id: 2,
      title: "Stock Prediction and Algorithmic Trading",
      description: "Predictive modeling and automated trading system for NYSE stocks",
      image: stockImage,
      details: [
        "Developed a predictive model for stock trading on the NYSE communication service sector",
        "Implemented LSTM neural network for next-day trading signal prediction",
        "Proposed novel trading strategy based on piecewise linear regression (PLR)",
        "Yielded 92% profit, approximately three times higher than sector's average return"
      ],
      tools: ["Python", "TensorFlow", "LSTM", "Time Series Analysis"],
      githubLink: "https://github.com/pouyan-sajadi/StockPrediction-AlgorithmicTrading"
    },
    {
      id: 3,
      title: "Temperature Modeling Using Physics-informed Neural Networks",
      description: "Machine learning models combining physics principles with neural networks",
      image: temperatureImage,
      details: [
        "Developed machine learning models informed by physics principles",
        "Formulated real-time modeling framework utilizing neural networks",
        "Integrated physics principles as prior knowledge for improved accuracy",
        "Achieved validation errors of less than 3%"
      ],
      tools: ["PyTorch", "Physics-Informed ML", "Neural Networks", "Scientific Computing"]
    },
    {
      id: 4,
      title: "Urban Accident Analysis",
      description: "Comprehensive analysis of urban accident patterns and safety measures",
      image: accidentImage,
      details: [
        "Conducted in-depth EDA to identify patterns in urban accident data",
        "Analyzed temporal trends in accident patterns",
        "Introduced novel impact feature for urban planning",
        "Enhanced urban safety measures through data-driven insights"
      ],
      tools: ["Python", "Data Analysis", "GIS", "Statistical Modeling"],
      githubLink: "https://github.com/mahyaqorbani/Accident-Impact-Prediction-using-Deep-Convolutional-and-Recurrent-Neural-Networks"
    }
  ];

  return (
    <div className="portfolio">
      <nav className="navbar">
        <p className="nav-title"></p>
        <div className="nav-links">
          <Link to="/">About</Link>
          <Link to="/portfolio">Portfolio</Link>
        </div>
      </nav>

      <main className="portfolio-content">
        <h1 className="portfolio-title">My Projects</h1>

        {/* PlaceScout Project Section */}
        <div className="streamlit-section">
  <div className="project-intro">
    <div className="project-intro-header">
      <h2>PlaceScout</h2>
      <div className="project-links">
        <a 
          href="https://github.com/your-username/placescout" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
          <img src={github} alt="GitHub" />
          View on GitHub
        </a>
      </div>
    </div>
    <p className="project-tagline">
      AI-driven application for real-time place discovery and navigation using OpenAI and Google Maps API.
    </p>
  </div>

  <div className="features-grid">
    <div className="feature-card">
      <span className="feature-icon">🔍</span>
      <h3>Real-Time Search</h3>
      <p>Instantly find places using natural language queries like "coffee shops near me."</p>
    </div>
    <div className="feature-card">
      <span className="feature-icon">🗺️</span>
      <h3>Live Directions</h3>
      <p>Get real-time, step-by-step navigation for various travel modes.</p>
    </div>
    <div className="feature-card">
      <span className="feature-icon">📊</span>
      <h3>Dynamic Details</h3>
      <p>Access up-to-date ratings, reviews, and photos of places.</p>
    </div>
    <div className="feature-card">
      <span className="feature-icon">⏱️</span>
      <h3>Recent Searches</h3>
      <p>Quickly revisit and explore previously searched locations.</p>
    </div>
  </div>

  <div className="streamlit-container">
    <iframe
      src="https://placescout.streamlit.app/?embedded=true"
      title="PlaceScout App"
      className="streamlit-frame"
      allow="camera;microphone"
    ></iframe>
  </div>

  <div className="achievements-section">
    <h3>Key Achievements</h3>
    <div className="achievements-grid">
      <div className="achievement-item">
        <span className="achievement-icon">🤖</span>
        <p>Implemented natural language processing to interpret user queries for place searches</p>
      </div>
      <div className="achievement-item">
        <span className="achievement-icon">🗺️</span>
        <p>Integrated Google Maps API for accurate location data and navigation</p>
      </div>
      <div className="achievement-item">
        <span className="achievement-icon">💻</span>
        <p>Developed an interactive web interface using Streamlit for seamless user experience</p>
      </div>
      <div className="achievement-item">
        <span className="achievement-icon">📊</span>
        <p>Enhanced decision-making with real-time data processing and API integration</p>

              </div>
            </div>
          </div>
        </div>
        {/* News Article Summarization Project Section */}
        <div className="streamlit-section">
          <div className="project-intro">
            <div className="project-intro-header">
              <h2>News Article Summarization App</h2>
              <div className="project-links">
                <a 
                  href="https://github.com/pouyan-sajadi/News-article-summarization" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <img src={github} alt="GitHub" />
                  View on GitHub
                </a>
              </div>
            </div>
            <p className="project-tagline">
              End-to-end pipeline for real-time news summarization using state-of-the-art NLP techniques
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">📰</span>
              <h3>Real-Time Summarization</h3>
              <p>Instantly generate concise summaries of news articles using advanced NLP models.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🧠</span>
              <h3>Transformer-Based</h3>
              <p>Leveraging Hugging Face Transformers for high-quality text summarization.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🌐</span>
              <h3>Web-Based Interface</h3>
              <p>User-friendly Streamlit app for easy interaction and summarization.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔍</span>
              <h3>Flexible Input</h3>
              <p>Support for various news article inputs and sources.</p>
            </div>
          </div>

          <div className="streamlit-container">
            <iframe
              src="https://news-article-summarization.streamlit.app/?embedded=true"
              title="News Summarization App"
              className="streamlit-frame"
              allow="camera;microphone"
            ></iframe>
          </div>

          <div className="achievements-section">
            <h3>Key Achievements</h3>
            <div className="achievements-grid">
              <div className="achievement-item">
                <span className="achievement-icon">🤖</span>
                <p>Implemented advanced NLP techniques for accurate text summarization</p>
              </div>
              <div className="achievement-item">
                <span className="achievement-icon">📊</span>
                <p>Integrated sentiment analysis to enhance summary quality</p>
              </div>
              <div className="achievement-item">
                <span className="achievement-icon">💻</span>
                <p>Created an interactive Streamlit web interface for easy use</p>
              </div>
              <div className="achievement-item">
                <span className="achievement-icon">🌍</span>
                <p>Developed a scalable and modular NLP pipeline</p>
              </div>
            </div>
          </div>
        </div>
        {/* Other Projects */}
        <h2 className="section-title">Other Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-section">
              <div className="project-intro">
                <div className="project-intro-header">
                  <h2>{project.title}</h2>
                  {project.githubLink && (
                    <div className="project-links">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github-link"
                      >
                        <img src={github} alt="GitHub" />
                        View on GitHub
                      </a>
                    </div>
                  )}
                </div>
                <p className="project-tagline">{project.description}</p>
              </div>

              <div className="project-content">
                <div className="project-image-section">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                  />
                </div>

                <div className="achievements-section">
                  <h3>Key Achievements</h3>
                  <div className="achievements-grid">
                    {project.details.map((detail, index) => (
                      <div key={index} className="achievement-item">
                        <span className="achievement-icon">🎯</span>
                        <p>{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="project-tools-section">
                  <div className="tools-grid">
                    {project.tools.map((tool, index) => (
                      <div key={index} className="tool-card">
                        <span className="tool-icon">⚡</span>
                        <span className="tool-name">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Portfolio;