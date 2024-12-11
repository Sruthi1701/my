import React, { useState } from 'react';

function About() {
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
  };

  const sectionStyle = {
    margin: '40px 0',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '40px',
    color: 'skyblue',
    textTransform: 'uppercase',
  };

  const subheadingStyle = {
    fontSize: '28px',
    marginBottom: '20px',
    textAlign: 'center',
    color: 'skyblue',
    textTransform: 'uppercase',
  };

  const stepsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const stepStyle = {
    textAlign: 'center',
    flex: 1,
  };

  const stepImageStyle = {
    width: '120px',
    height: '120px',
    margin: '0 auto',
    display: 'block',
    border: '2px solid #ccc',
    borderRadius: '8px',
  };

  const featureListStyle = {
    listStyleType: 'none',
    padding: '0',
    fontSize: '18px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  const featureItemStyle = (isHovered) => ({
    backgroundColor: isHovered ? '#dfefff' : '#f0f8ff', // Very light blue shades
    padding: '10px',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '10px',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    cursor: 'pointer',
  });

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div style={pageStyle}>
      <div style={headingStyle}>ABOUT</div>

      <section style={sectionStyle}>
        <h2 style={subheadingStyle}>INSTALLATION STEPS</h2>
        <div style={stepsContainerStyle}>
          <div style={stepStyle}>
            <img src="/assets/step1.png" alt="Step 1" style={stepImageStyle} />
            <p>Step 1: Install the product in your autoflow well</p>
          </div>
          <div style={stepStyle}>
            <img src="/assets/step2.png" alt="Step 2" style={stepImageStyle} />
            <p>Step 2: Connect to power (single phase supply)</p>
          </div>
          <div style={stepStyle}>
            <img src="/assets/step3.png" alt="Step 3" style={stepImageStyle} />
            <p>Step 3: Enter the code to control with the mobile app</p>
          </div>
          <div style={stepStyle}>
            <img src="/assets/step4.png" alt="Step 4" style={stepImageStyle} />
            <p>Step 4: Start using!</p>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={subheadingStyle}>FEATURES</h2>
        <ul style={featureListStyle}>
          {[
            'Aligns with government initiatives',
            'Timer-based control – RTC (Real-Time Clock Integration)',
            'Handling excess pressure under high aquifer pressure',
            'Easy accessibility even with button phones',
            'Fail-safe mechanism',
            'Sensor fault detection',
          ].map((feature, index) => (
            <li
              key={index}
              style={featureItemStyle(hoverIndex === index)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={subheadingStyle}>BENEFITS</h2>
        <div style={{ textAlign: 'center' }}>
          <img
            src="/assets/benefits.jpg"
            alt="Benefits"
            style={{ width: '300px', height: '100%', borderRadius: '8px', marginTop: '20px' }}
          />
        </div>
      </section>
    </div>
  );
}

export default About;
