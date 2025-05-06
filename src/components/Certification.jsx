import React, { useState } from 'react';
import { FaCertificate } from 'react-icons/fa';

const Certification = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  
  const certifications = [
    {
      id: 1,
      title: "Fundamentals of Data Structures in C",
      issuer: "Simplilearn",
      date: "May 2025",
      image: "/cert (1).jpeg",
      skills: ["C Programming", "Data Structures", "Algorithms", "Problem Solving"]
    },
    {
      id: 2,
      title: "INTRODUCTION TO IOT",
      issuer: "Simplilearn",
      date: "May 2025",
      image: "/cert (2).jpeg",
      skills: ["IoT", "Embedded Systems", "Sensors", "Connectivity"]
    },
    {
      id: 3,
      title: "INTRODUCTION TO MACHINE LEARNING WITH R",
      issuer: "Simplilearn",
      date: "May 2025",
      image: "/cert (3).jpeg",
      skills: ["R Programming", "Machine Learning", "Data Analysis", "Statistics"]
    },
    {
      id: 4,
      title: "GETTING STARTED WITH FULL STACK JAVA DEVELOPMENT",
      issuer: "Simplilearn",
      date: "May 2025",
      image: "/cert (4).jpeg",
      skills: ["Java", "Spring Boot", "Hibernate", "Web Development"]
    },
    {
      id: 5,
      title: "INTRODUCTION TO SQL",
      issuer: "Simplilearn",
      date: "May 2025",
      image: "/cert (5).jpeg",
      skills: ["SQL", "Database Design", "Queries", "Data Management"]
    }
  ];

  const openCertificate = (cert) => {
    setSelectedCert(cert);
  };

  const closeCertificate = () => {
    setSelectedCert(null);
  };

  return (
    <section className="certification">
      <div className="header-container">
        <div className="section-header">
          <h2>My Certifications</h2>
          <div className="underline"></div>
          <p className="section-subtitle">
            Professional certifications that validate my skills and knowledge
          </p>
        </div>
      </div>

      <div className="certification-container">
        <div className="certification-grid">
          {certifications.map((cert) => (
            <div 
              className="certification-card" 
              key={cert.id}
              onClick={() => openCertificate(cert)}
            >
              <div className="certification-icon">
                <FaCertificate />
              </div>
              <div className="certification-content">
                <h3>{cert.title}</h3>
                <div className="certification-issuer">{cert.issuer}</div>
                <div className="certification-date">{cert.date}</div>
                <div className="certification-skills">
                  {cert.skills.map((skill, index) => (
                    <span className="certification-skill" key={index}>
                      {skill}
                    </span>
                  ))}
                </div>
                <button className="view-certificate-btn">
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div className="certificate-modal">
          <div className="certificate-modal-content">
            <button className="close-modal" onClick={closeCertificate}>
              &times;
            </button>
            <h2>{selectedCert.title}</h2>
            <div className="certificate-details">
              <p><strong>Issuer:</strong> {selectedCert.issuer}</p>
              <p><strong>Date:</strong> {selectedCert.date}</p>
              <p><strong>Issued by:</strong> Krishna Kumar, CEO of Simplilearn</p>
            </div>
            <div className="certificate-image-container">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="certificate-image" 
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certification;
