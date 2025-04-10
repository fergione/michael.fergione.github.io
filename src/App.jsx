import { Routes, Route, useLocation } from 'react-router-dom'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import './App.css'

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navItems = [
    { title: 'Resume', delay: 100, path: '/resume' },
    { title: 'Projects', delay: 200, path: '/projects' },
    { title: 'Contact', delay: 300, path: '/contact' },
    { title: 'Blog', delay: 400, path: '/blog' }
  ];

  const handleNavigation = (path) => {
    setIsVisible(false);
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
    >
    <div className="min-h-screen bg-black text-white flex justify-center items-start">
      <div className="w-full max-w-[800px] p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-stretch">
          <div className={`about-section w-full p-12 bg-zinc-900 rounded-3xl transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-4xl font-bold mb-6">Hello, I'm Michael</h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              A passionate software developer focused on creating elegant solutions 
              to complex problems. I specialize in modern web technologies and 
              user-centric design.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full">
            {navItems.map((item) => (
              <button
                key={item.title}
                onClick={() => handleNavigation(item.path)}
                className={`w-full h-full nav-button p-12 bg-zinc-900 rounded-3xl transition-all duration-500 ease-out
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
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
