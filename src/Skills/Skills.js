import React from 'react'
import './Skills.css'

class Skills extends React.Component {
  render () {
    return (
          <div>
            <div className="Familier-languages">
              Languages what I am Familier with
            </div>
            <div className="s-container">
              <div className="skills-left">
                <span className="s-header">Frontend programming language</span>
                <span className="languages">
                  <li>HTML</li>
                </span>
                <span className="languages">
                  <li>CSS</li>
                </span>
                <span className="languages">
                  <li>JavaScript</li>
                </span>
                <span className="languages">
                  <li>ReactJs</li>
                </span>
                <span className="languages">
                  <li>Bootstrap</li>
                </span>
                <span className="languages">
                  <li>SASS</li>
                </span>
                <span className="languages">
                  <li>Ajax</li>
                </span>
                <span className="languages">
                  <li>JQuery</li>
                </span>
              </div>
              <div className="skills-right">
                <span className="s-header">Backend programming language</span>
                <span className="languages">
                  <li>PHP</li>
                </span>
                <span className="languages">
                  <li>Laravel</li>
                </span>
                <span className="languages">
                  <li>Python</li>
                </span>
                <span className="languages">
                  <li>Arduino</li>
                </span>
                <span className="languages">
                  <li>MYSQL</li>
                </span>
                <span className="languages">
                  <li>C++</li>
                </span>
                <span className="languages">
                  <li>Java</li>
                </span>
                <span className="languages">
                  <li>SQL</li>
                </span>
              </div>
            </div>
            <hr style={{ background: '#fca61f' }} />
          </div>
    )
  }
}

export default Skills
