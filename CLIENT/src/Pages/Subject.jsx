import React from 'react';
import '../Components/Subject.css'

const Subject = () => {
  return (
    <div className="subject-container">
      <header className="subject-header">
        <h1>Subjects</h1>
        <p>Explore the subjects available in our integrated school system.</p>
      </header>
      <main className="subject-main">
        <section className="subject-section">
          <h2>Mathematics</h2>
          <p>
            Dive into the world of numbers, equations, and problem-solving. Access resources 
            for algebra, geometry, calculus, and more.
          </p>
        </section>
        <section className="subject-section">
          <h2>Science</h2>
          <p>
            Explore the wonders of science, including physics, chemistry, biology, and 
            environmental studies. Resources are available for all levels.
          </p>
        </section>
        <section className="subject-section">
          <h2>History</h2>
          <p>
            Learn about the past to understand the present. Access materials on world history, 
            ancient civilizations, and modern events.
          </p>
        </section>
        <section className="subject-section">
          <h2>Languages</h2>
          <p>
            Improve your language skills with resources for English, French, Spanish, and more. 
            Practice grammar, vocabulary, and communication.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Subject;