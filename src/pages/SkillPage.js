import React, { useState, useEffect } from "react";
import "../style/Skill.css";

const SkillPage = () => {
  const [linesByCategory, setLinesByCategory] = useState({});

  const skillsByCategory = {
    "Languages": [
      { id: 1, name: "HTML", level: 30, x: 250, y: 50 },
      { id: 2, name: "JavaScript", level: 60, x: 350, y: 150 },
      { id: 3, name: "CSS", level: 85, x: 190, y: 220 },
    ],
    "Frameworks and Libraries": [
      { id: 4, name: "SASS", level: 35, x: 350, y: 40 },
      { id: 5, name: "Bootstrap", level: 85, x: 280, y: 90 },
      { id: 6, name: "Tailwind-css", level: 60, x: 120, y: 120 },
      { id: 7, name: "React.js", level: 55, x: 280, y: 180 },
    ],
    "Tools": [
      { id: 8, name: "Node.js", level: 80, x: 250, y: 50 },
      { id: 9, name: "Docker", level: 40, x: 180, y: 150 },
    ],
    "Version Control": [
      { id: 9, name: "Git", level: 60, x: 350, y: 100},
      { id: 10, name: "GitHub", level: 55, x:300, y: 200},
      { id: 11, name: "Jira", level: 95, x:200, y: 90},
    ],
    "Design Skills": [
      { id: 12, name: "canva", level: 90, x: 300, y:50},
      { id: 13, name: "figma", level: 65, x: 130, y:150},
    ],
    "Backend": [
      { id: 14, name: "Node.js", level: 57, x: 250, y: 80},
      { id: 15, name: "Express.js", level: 40, x: 250, y: 170},
    ],
    "Database": [
      { id: 16, name: "MongoDB", level: 86, x: 350, y: 50},
      { id: 17, name: "Mongoose", level: 67, x: 250, y: 150},
    ],
    "Content Management": [
      { id: 18, name: "Sanity.io", level: 85, x: 200, y: 60},
    ],
  };

  useEffect(() => {
    // Generate connections for each category
    const newLinesByCategory = {};
    Object.entries(skillsByCategory).forEach(([category, skills]) => {
      const newLines = [];
      for (let i = 0; i < skills.length; i++) {
        for (let j = i + 1; j < skills.length; j++) {
          newLines.push({
            id: `${category}-${i}-${j}`,
            x1: skills[i].x,
            y1: skills[i].y,
            x2: skills[j].x,
            y2: skills[j].y,
          });
        }
      }
      newLinesByCategory[category] = newLines;
    });
    setLinesByCategory(newLinesByCategory);
  }, [skillsByCategory]);

  return (
    <div className="skill-container">
      {Object.keys(skillsByCategory).map((category) => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <svg className={`svg-box`}>
            {/* Background stars */}
            {Array.from({ length: 50 }).map((_, i) => (
              <circle
                key={`bg-star-${i}`}
                cx={Math.random() * window.innerWidth}
                cy={Math.random() * window.innerHeight}
                r={Math.random() * 1.5}
                fill="white"
                opacity={Math.random() * 0.9}
              />
            ))}

            {/* Skill connections */}
            {linesByCategory[category]?.map((line) => (
              <line
                key={line.id}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="1"
              />
            ))}

            {/* Skill nodes */}
            {skillsByCategory[category]?.map((skill) => (
              <g key={skill.id}>
                {/* Glow effect */}
                <circle
                  cx={skill.x}
                  cy={skill.y}
                  r={skill.level / 10 + 10}
                  fill="none"
                  stroke="rgba(100, 200, 255, 0.3)"
                  strokeWidth="2"
                />

                {/* Skill point */}
                <circle
                  cx={skill.x}
                  cy={skill.y}
                  r={skill.level / 20 + 5}
                  fill="rgb(100, 200, 255)"
                  className="circle"
                />

                {/* Skill label */}
                <text
                  x={skill.x}
                  y={skill.y + 30}
                  textAnchor="middle"
                  fill="white"
                  className="text-sm"
                >
                  {skill.name}
                </text>
              </g>
            ))}
          </svg>
        </div>
      ))}
    </div>
  );
};

export default SkillPage;
