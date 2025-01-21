import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import "../style/About.css";

// Enhanced 3D Scene Component with interactivity
const ThreeScene = () => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const frameIdRef = useRef(null);
  const meshRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    
    rendererRef.current = renderer;
    renderer.setSize(300, 300);
    mountRef.current.appendChild(renderer.domElement);

    // Create an interactive icosahedron
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshPhongMaterial({
      color: 0x6b9fff,
      wireframe: true,
      wireframeLinewidth: 2,
      transparent: true,
      opacity: 0.8
    });
    const icosahedron = new THREE.Mesh(geometry, material);
    meshRef.current = icosahedron;

    // Add lighting with animation
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 2);
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(light);
    scene.add(ambientLight);
    scene.add(icosahedron);
    camera.position.z = 3;

    // Enhanced animation with hover effect
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      
      if (meshRef.current) {
        // Normal rotation
        meshRef.current.rotation.x += isHovered ? 0.02 : 0.005;
        meshRef.current.rotation.y += isHovered ? 0.02 : 0.005;
        
        // Pulse effect on hover
        if (isHovered) {
          const scale = 1 + Math.sin(Date.now() * 0.005) * 0.1;
          meshRef.current.scale.set(scale, scale, scale);
        } else {
          meshRef.current.scale.set(1, 1, 1);
        }
      }
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (mountRef.current && renderer) {
        renderer.setSize(300, 300);
        camera.aspect = 1;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (mountRef.current && rendererRef.current && rendererRef.current.domElement) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      if (geometry) geometry.dispose();
      if (material) material.dispose();
    };
  }, [isHovered]);

  return (
    <div 
      ref={mountRef} 
      className="three-scene"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

const AboutPage = () => {
  const navigate = useNavigate();

  const education = [
    {
      degree: "BE - Bachelor of Engineering, Computer Science and Engineering",
      institution: "R.N.G Patel Institute of Technology (GTU)",
      year: "2021-2024",
      description: "Focused on advanced software development and system design"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "N.G Patel Institute of Technology (GTU)",
      year: "2018-2021",
      description: "Foundation in computer science and programming"
    },
    
  ];

  const currentlyLearning = [
    {
      topic: "Three.js & WebGL",
      progress: 65,
      description: "Exploring 3D graphics and interactive web experiences"
    },
    {
      topic: "Machine Learning",
      progress: 40,
      description: "Studying fundamental concepts and practical applications"
    }
  ];

  const currentlyDoing = [
    {
      project: "Portfolio Enhancement",
      status: "In Progress",
      description: "Adding interactive 3D elements and improving user experience"
    },
    {
      project: "Open Source Contribution",
      status: "Active",
      description: "Contributing to React-based visualization libraries"
    }
  ];

  const interests = [
    {
      title: "Technology",
      description: "Passionate about web development and creating interactive experiences"
    },
    {
      title: "Photography",
      description: "Capturing moments and exploring visual storytelling",
      isClickable: true,
      action: () => navigate("/photo")
    },
    {
            title: "Cosmos",
            description: "Fascinated by astronomy and the mysteries of our universe"
          },
          {
            title: "Nature",
            description: "Finding inspiration in the natural world and its patterns"
          
      }
  ];

  return (
    <div className="about-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="greeting">Hey! I'm Vaibhavi</h1>
          <p className="tagline">Building digital experiences that matter</p>
        </div>
        <div className="hero-3d">
          <ThreeScene />
          <p className="interaction-hint">Hover to interact ✨</p>
        </div>
      </div>

      <div className="content-grid">
        <section className="about-section grid-col-2">
          <h2>About Me</h2>
          <p>
            I'm a developer who bridges technology with creativity. With a deep passion 
            for both coding and cosmic exploration, I bring a unique perspective to 
            every project. My approach combines technical expertise with an 
            understanding of user needs to create meaningful digital solutions.
          </p>
        </section>

        <div className="grid-row">
          <section className="education-section">
            <h2>Education</h2>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h3>{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>
                  <p className="year">{edu.year}</p>
                  <p className="description">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="interests-section">
            <h2>What Drives Me</h2>
            <div className="interests-grid">
              {interests.map((interest, index) => (
                <div 
                  key={index} 
                  className={`interest-card ${interest.isClickable ? 'clickable' : ''}`}
                  onClick={interest.action}
                >
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                  {interest.isClickable && (
                    <span className="click-hint">Click to explore →</span>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="grid-row">
          <section className="currently-learning-section">
            <h2>Currently Learning</h2>
            <div className="learning-grid">
              {currentlyLearning.map((item, index) => (
                <div key={index} className="learning-card">
                  <h3>{item.topic}</h3>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="currently-doing-section">
            <h2>Currently Working On</h2>
            <div className="project-grid">
              {currentlyDoing.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-header">
                    <h3>{project.project}</h3>
                    <span className="status-badge">{project.status}</span>
                  </div>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;