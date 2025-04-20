import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function App() {
  useEffect(() => {
    document.title = "Priyansh | React Native Dev & Embedded Enthusiast";
  }, []);

  const sections = [
    {
      title: "About Me",
      content: `I'm a React Native developer passionate about building mobile apps and crafting embedded systems projects. From ESP32 object detection to IoT systems, I love mixing code with hardware.`
    },
    {
      title: "Projects",
      content: `
      - DevConnect: A developer portfolio platform (React Native + Spring Boot)
      - Smart Goggles: ESP32-CAM & TensorFlow Lite for blind assistance
      - Home Automation: ESP32 + Blynk controlled devices
      `
    },
    {
      title: "Skills",
      content: `
      - React Native, JavaScript, TypeScript
      - Java, Spring Boot, REST APIs
      - ESP32, Arduino, Embedded C
      - Firebase, SQLite, Render Hosting
      `
    },
    {
      title: "Blog",
      content: `Sharing thoughts on development, tech tutorials, and project breakdowns (Coming soon!).`
    },
    {
      title: "Resume",
      content: `Download my resume here: [Download Resume](https://docs.google.com/document/d/1AGiyPnfrhbiJVFDIaFMqZ5j13V7k7ePe)`
    },
    {
      title: "Contact",
      content: `Let’s collaborate on cool stuff! Reach out:`
    }
  ];

  return (
    <div className="bg-gray-950 text-white font-sans min-h-screen">
      <header className="p-6 text-center text-3xl font-bold">Priyansh | React Native & Embedded Systems</header>

      <div className="flex justify-center mt-4">
        <img
          src="assets/ChatGPT Image Apr 12, 2025, 01_50_19 AM.png"
          alt="Priyansh's photo"
          className="rounded-full w-40 h-40 object-cover shadow-lg border-4 border-gray-800"
        />
      </div>

      <main className="space-y-20 p-4 max-w-4xl mx-auto">
        {sections.map((section, idx) => (
          <motion.section
            key={idx}
            className="bg-gray-900 p-6 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="whitespace-pre-line text-gray-300">{section.content}</p>
            {section.title === "Contact" && (
              <div className="flex gap-4 text-2xl mt-4">
                <a href="mailto:priyanshprasad@gmail.com" aria-label="Email">
                  <FaEnvelope />
                </a>
                <a href="https://github.com/prasadpriyansh13" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/priyansh-prasad-b65034264/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              </div>
            )}
          </motion.section>
        ))}
      </main>

      <footer className="p-4 text-center text-gray-500 text-sm">© 2025 Priyansh. Built with React + ❤️</footer>
    </div>
  );
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
