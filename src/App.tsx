import React, { useEffect, useState } from 'react';
import { Sun, Moon, ExternalLink } from 'lucide-react';
import patentIcon from '../Images/patent.png';
import n8nIcon from '../Images/n8n-color.png';
import acronymIcon from '../Images/acronym.png';
import makerspaceIcon from '../Images/makerspace.png';
import futureLabIcon from '../Images/future_lab.png';
import imageIcon from '../Images/image.png';
import churchDwightLogo from '../Images/Church_&_Dwight_logo.svg.png';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const cards = [
    {
      title: 'N8N',
      icon: <img src={n8nIcon} width={48} height={48} />,
      description: 'Create your own workflows to automate tedious tasks',
      url: 'https://n8n-imagine.onrender.com/'
    },
    {
      title: 'PatentGPT',
      icon: <img src={patentIcon} width={48} height={48} />,
      description: 'Generate patent ideas and descriptions or find workarounds with AI',
      url: 'https://patent.cd-imagine.today/'
    },
    {
      title: 'Futuristic Lab',
      icon: <img src={futureLabIcon} width={48} height={48} />,
      description: 'Explore the future of labs with AI and automation',
      url: 'https://lot.cd-imagine.today/'
    },
    {
      title: 'Acronym Dictionary',
      icon: <img src={acronymIcon} width={48} height={48} />,
      description: 'Get a general feel for products before consumer studies',
      url: 'https://acronyms.cd-imagine.today/'
    },
    {
      title: 'Image Generator',
      icon: <img src={imageIcon} width={48} height={48} />,
      description: 'Generate images based on your ideas and concepts',
      url: 'https://img-prompt-gen.cd-imagine.today/'
    },
    {
      title: 'Makerspace Asistant',
      icon: <img src={makerspaceIcon} width={48} height={48} />,
      description: 'Get help with machines for projects in the makerspace',
      url: 'https://makerspace-assistant.cd-imagine.today/'
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed w-full z-50">
        <div className="glass mx-4 mt-4 rounded-full animate-slide-in">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img 
                  src={churchDwightLogo} 
                  alt="Church & Dwight Logo" 
                  className="h-8"
                />
                <span className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Church & Dwight
                </span>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100/20 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun className="h-6 w-6 text-text-dark animate-theme-toggle" />
                ) : (
                  <Moon className="h-6 w-6 text-text-light animate-theme-toggle" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className=" mx-auto text-center flex-row mb-16 animate-fade-in">
          <h1 className="text-8xl font-semibold bg-gradient-to-r from-primary to-secondary mb-8 bg-clip-text text-transparent" style={{ paddingBottom: '0.1em' }}>
            Imagine
          </h1>
          <p className="text-3xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Empowering innovation through intelligent automation and AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.url}
              className="group gradient-border from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="glass p-6 rounded-2xl card-hover transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 text-primary-dark dark:text-primary-light">
                    {card.icon}
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-2">
                  {card.title}
                </h3>
                <p className="text-text-light/80 dark:text-text-dark/80">
                  {card.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </main>

      <footer className="glass mt-auto py-8 animate-fade-in animate-delay-300">
        <div className="container mx-auto px-4">
          <p className="text-center text-text-light/70 dark:text-text-dark/70">
            © {new Date().getFullYear()} Imagine. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;