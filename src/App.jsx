import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navItems = [
    { title: 'Resume', delay: 100 },
    { title: 'Projects', delay: 200 },
    { title: 'Contact', delay: 300 },
    { title: 'Blog', delay: 400 }
  ];

  return (
    <div className="flex justify-center">
      <div className="min-h-screen bg-black text-white flex justify-center">
        <div className="w-full max-w-[1200px] p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* About Me Section */}
            <div className={`about-section p-12 bg-zinc-900 rounded-3xl transition-all duration-700 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h1 className="text-4xl font-bold mb-6">Hello, I'm Michael</h1>
              <p className="text-xl text-zinc-400 leading-relaxed">
                A passionate software developer focused on creating elegant solutions 
                to complex problems. I specialize in modern web technologies and 
                user-centric design.
              </p>
            </div>
  
            {/* Navigation Grid */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {navItems.map((item, index) => (
                <button
                  key={item.title}
                  className={`nav-button p-12 bg-zinc-900 rounded-3xl transition-all duration-500 ease-out
                    hover:bg-zinc-800 hover:scale-[1.02] hover:text-blue-400
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  <span className="text-2xl font-medium">{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
