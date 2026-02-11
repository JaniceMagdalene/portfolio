import React, { useState, useEffect } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  Award,
  Menu,
  X,
  ExternalLink,
  ChevronDown,
  Globe,
  Briefcase,
  GraduationCap,
  Code,
  Download,
  Moon,
  Sun,
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&family=Poppins:wght@400;500;600;700;800;900&family=Montserrat:wght@700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    'Home',
    'About',
    'Achievements',
    'Experience',
    'Projects',
    'Skills',
    'Education',
    'Contact',
  ];

  const scrollToSection = (section) => {
    setActiveSection(section.toLowerCase());
    setIsMenuOpen(false);
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Janice_Magdalene_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const FloatingBubbles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${
            darkMode ? 'bg-purple-500/5' : 'bg-gradient-to-br from-violet-200/30 to-fuchsia-200/30'
          }`}
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(-10px); }
          75% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </div>
  );

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 ${
        darkMode 
          ? 'bg-black text-gray-100' 
          : 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-slate-900'
      }`}
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? darkMode 
              ? 'bg-black/95 shadow-2xl backdrop-blur-xl border-b border-rose-500/30' 
              : 'bg-white/90 shadow-xl backdrop-blur-xl border-b border-violet-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="text-left">
              <div
                className="inline-block px-2 py-2 leading-[1.4]
                           bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600
                           bg-clip-text text-transparent
                           hover:scale-110 transition-transform duration-300 cursor-pointer"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "2rem",
                  fontWeight: "bold"
                }}
              >
                JM
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`font-semibold transition-all duration-300 relative group text-sm ${
                    activeSection === item.toLowerCase()
                      ? darkMode ? 'text-rose-400' : 'text-violet-700'
                      : darkMode ? 'text-gray-300' : 'text-slate-700'
                  } hover:text-violet-700`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 transform origin-left transition-transform duration-300 ${
                    activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0'
                  } group-hover:scale-x-100`}></span>
                </button>
              ))}
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  darkMode 
                    ? 'bg-slate-900 hover:bg-slate-800 text-yellow-400' 
                    : 'bg-violet-100 hover:bg-violet-200 text-violet-700'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  darkMode 
                    ? 'bg-slate-900 text-yellow-400' 
                    : 'bg-violet-100 text-violet-700'
                }`}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              <button
                className={darkMode ? 'text-white' : 'text-slate-900'}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`px-4 pb-6 lg:hidden space-y-2 ${
            darkMode 
              ? 'bg-black/95 backdrop-blur-xl border-b border-rose-500/30' 
              : 'bg-white/90 backdrop-blur-xl border-b border-violet-200'
          }`}>
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeSection === item.toLowerCase()
                    ? darkMode 
                      ? 'text-rose-400 bg-rose-500/10' 
                      : 'text-violet-700 bg-violet-100'
                    : darkMode 
                      ? 'text-gray-300 hover:bg-slate-900' 
                      : 'text-slate-700 hover:bg-violet-50'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
        <FloatingBubbles />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="w-36 h-36 sm:w-48 sm:h-48 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 p-1.5 shadow-2xl shadow-purple-300/50 hover:shadow-purple-400/70 hover:scale-105 transition-all duration-500">
              <div className={`w-full h-full rounded-full flex items-center justify-center overflow-hidden border-4 ${
                darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-violet-100'
              }`}>
                <img src="/Profile.jpg" alt="Profile" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            </div>

            <h1
              className="font-bold leading-[1.3] py-2
                         mb-3 sm:mb-6
                         bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600
                         bg-clip-text text-transparent px-4
                         text-[1.834rem] sm:text-[2.15rem] md:text-[2.2rem]"
              style={{ fontFamily: "'Montserrat', sans-serif"}}
            >
              Janice Magdalene D
            </h1>

            <p className={`text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 font-bold px-4 ${
              darkMode ? 'text-gray-200' : 'text-slate-800'
            }`}>
              Computer Science Engineer
            </p>
            <p className={`text-base sm:text-lg mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4 font-medium ${
              darkMode ? 'text-gray-400' : 'text-slate-600'
            }`}>
              Top Academic Performer | AWS Cloud Practitioner Certified | Certified Scrum Master | Data Engineer Enthusiast
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8 sm:mb-12 px-4">
              <a
                href="https://mail.google.com/mail/?view=cm&to=janicemagdalene@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl text-sm border-2 ${
                  darkMode 
                    ? 'bg-black text-white border-slate-700 hover:border-red-500' 
                    : 'bg-white text-slate-800 border-violet-200 hover:border-red-500 hover:bg-red-50'
                }`}
              >
                <Mail size={18} className="group-hover:rotate-12 transition-all duration-300" />
                <span>Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/janice-magdalene-d-970446228/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl text-sm border-2 ${
                  darkMode 
                    ? 'bg-black text-white border-slate-700 hover:border-blue-500' 
                    : 'bg-white text-slate-800 border-violet-200 hover:border-blue-600 hover:bg-blue-50'
                }`}
              >
                <Linkedin size={18} className="group-hover:rotate-12 transition-all duration-300" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/JaniceMagdalene/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl text-sm border-2 ${
                  darkMode 
                    ? 'bg-black text-white border-slate-700 hover:border-purple-500' 
                    : 'bg-white text-slate-800 border-violet-200 hover:border-slate-700 hover:bg-slate-50'
                }`}
              >
                <Github size={18} className="group-hover:rotate-12 transition-all duration-300" />
                <span>GitHub</span>
              </a>
            </div>

            <button 
              onClick={() => scrollToSection('About')} 
              className={`animate-bounce transition-colors ${
                darkMode ? 'text-rose-400 hover:text-purple-400' : 'text-violet-600 hover:text-fuchsia-600'
              }`}
            >
              <ChevronDown size={40} className="sm:hidden" />
              <ChevronDown size={48} className="hidden sm:block" />
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="min-h-screen flex items-center px-4 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            About Me
          </h2>

          <div className={`group relative rounded-2xl p-6 sm:p-10 shadow-xl border transition-all duration-500 hover:scale-[1.02] ${
            darkMode 
              ? 'bg-slate-900/50 border-rose-500/30 hover:border-rose-500/60 hover:shadow-2xl hover:shadow-rose-500/20' 
              : 'bg-white/80 backdrop-blur-sm border-violet-200 hover:border-violet-400 hover:shadow-2xl hover:shadow-violet-200/50'
          }`}>
            <FloatingBubbles />
            <div className="relative z-10">
              <p className={`text-base sm:text-lg leading-relaxed mb-4 sm:mb-5 font-medium ${
                darkMode ? 'text-gray-300' : 'text-slate-800'
              }`}>
                I'm <span className={`font-bold ${darkMode ? 'text-rose-400' : 'text-violet-700'}`}>Janice Magdalene</span>, a 2025 Computer Science Engineering graduate from Sri Krishna College of Technology, Coimbatore with a CGPA of <span className={`font-bold ${darkMode ? 'text-purple-400' : 'text-fuchsia-700'}`}>8.99</span>. I've contributed as a Placement Coordinator, Anti-Ragging Committee Member, and was recognized as the <span className={`font-bold ${darkMode ? 'text-rose-400' : 'text-violet-700'}`}>Top Coder in SheCodes by IAMNeo</span> and <span className={`font-bold ${darkMode ? 'text-rose-400' : 'text-violet-700'}`}>Top Academic Performer 2024–2025</span>.
              </p>

              <p className={`text-base sm:text-lg leading-relaxed mb-4 sm:mb-5 font-medium ${
                darkMode ? 'text-gray-300' : 'text-slate-800'
              }`}>
               I also completed internships at <span className={`font-bold ${darkMode ? 'text-rose-400' : 'text-violet-700'}`}>Accenture</span> and <span className={`font-bold ${darkMode ? 'text-rose-400' : 'text-violet-700'}`}>Azentio Software Pvt. Ltd.</span>, gaining experience in medical and banking domains.
 I've built impactful projects including the Elderly Care Network Application, which is <span className={`font-bold ${darkMode ? 'text-purple-400' : 'text-fuchsia-700'}`}>certified by IAMNeo</span> and Verbal Abuse Analysis hosted on AWS.               </p>

              <p className={`text-base sm:text-lg leading-relaxed font-medium ${
                darkMode ? 'text-gray-300' : 'text-slate-800'
              }`}>
                I have published a research article, participated in hackathons, and hold certifications including <span className={`font-bold ${darkMode ? 'text-purple-400' : 'text-fuchsia-700'}`}>AWS Cloud Practitioner</span> and <span className={`font-bold ${darkMode ? 'text-purple-400' : 'text-fuchsia-700'}`}>Certified Scrum Master</span>. I'm currently pursuing an OPGDM at Great Lakes Institute of Management, Chennai driven by continuous learning and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="min-h-screen flex items-center px-4 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16 text-center bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className={`group relative rounded-2xl p-6 sm:p-8 shadow-xl border transition-all duration-500 hover:scale-[1.05] hover:-rotate-1 ${
              darkMode 
                ? 'bg-slate-900/50 border-rose-500/30 hover:border-rose-500/60 hover:shadow-2xl hover:shadow-rose-500/30' 
                : 'bg-white/80 backdrop-blur-sm border-violet-200 hover:border-violet-400 hover:shadow-2xl hover:shadow-violet-300/50'
            }`}>
              <FloatingBubbles />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
                    darkMode ? 'bg-rose-500/20 group-hover:bg-rose-500/30' : 'bg-violet-100 group-hover:bg-violet-200'
                  }`}>
                    <Award size={20} className={`sm:w-6 sm:h-6 ${darkMode ? 'text-rose-400' : 'text-violet-700'}`} />
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    College Achievements
                  </h3>
                </div>
                <ul className={`space-y-2 sm:space-y-3 text-sm sm:text-base font-medium ${darkMode ? 'text-gray-300' : 'text-slate-800'}`}>
                  {[
                    'Top Academic Performer (2024-25)',
                    'Second Rank in SheCodes organized by IAMNeo',
                    'Anti-Ragging Committee Member',
                    'Placement Coordinator'
                  ].map((item, i) => (
                    <li key={i} className={`flex items-start gap-3 pb-2 sm:pb-3 border-b last:border-0 transition-all duration-300 hover:translate-x-2 ${
                      darkMode ? 'border-slate-800' : 'border-violet-100'
                    }`}>
                      <span className={`font-bold mt-1 ${darkMode ? 'text-rose-400' : 'text-violet-600'}`}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`group relative rounded-2xl p-6 sm:p-8 shadow-xl border transition-all duration-500 hover:scale-[1.05] hover:rotate-1 ${
              darkMode 
                ? 'bg-slate-900/50 border-pink-500/30 hover:border-pink-500/60 hover:shadow-2xl hover:shadow-pink-500/30' 
                : 'bg-white/80 backdrop-blur-sm border-fuchsia-200 hover:border-fuchsia-400 hover:shadow-2xl hover:shadow-fuchsia-300/50'
            }`}>
              <FloatingBubbles />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
                    darkMode ? 'bg-pink-500/20 group-hover:bg-pink-500/30' : 'bg-fuchsia-100 group-hover:bg-fuchsia-200'
                  }`}>
                    <Award size={20} className={`sm:w-6 sm:h-6 ${darkMode ? 'text-pink-400' : 'text-fuchsia-700'}`} />
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    School Achievements
                  </h3>
                </div>
                <ul className={`space-y-2 sm:space-y-3 text-sm sm:text-base font-medium ${darkMode ? 'text-gray-300' : 'text-slate-800'}`}>
                  {[
                    'Top Academic Performer in English Language',
                    'School Volleyball Team Member',
                    '95.18% in Senior School',
                    '94.8% in 10th Grade'
                  ].map((item, i) => (
                    <li key={i} className={`flex items-start gap-3 pb-2 sm:pb-3 border-b last:border-0 transition-all duration-300 hover:translate-x-2 ${
                      darkMode ? 'border-slate-800' : 'border-fuchsia-100'
                    }`}>
                      <span className={`font-bold mt-1 ${darkMode ? 'text-pink-400' : 'text-fuchsia-600'}`}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="min-h-screen flex items-center px-4 py-12 sm:py-20">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Work Experience
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {[{
              company: 'Azentio Software Private Limited',
              role: 'Intern',
              period: 'Nov 2024 - Jun 2025',
              location: 'Bangalore',
              description: [
                'Performed functional, regression and UI testing across multiple banking modules in OMNI',
                'Executed detailed test cases, logged defects, and collaborated with developers for timely resolution',
                'Worked with automation tools including Gherkin, Cucumber and Playwright for scenario-based testing',
                'Used SQL for backend validation, data extraction and verifying system behavior',
                'Participated in defect tracking and documentation using JIRA',
                'Tested using SOAP services, analyzed backend logs and supported troubleshooting activities',
                'Gained hands-on experience in Agile processes including sprint planning, reviews and daily stand-ups',
                'Coordinated with QA, Dev and Product teams to ensure smooth testing workflow'
              ],
            },
            {
              company: 'Accenture',
              role: 'Packaged App Development Intern (Summer Intern)',
              period: 'May 2024 - Jul 2024',
              location: 'Bangalore',
              description: [
                'Hands-on exposure to SAP SD module including core T-codes and billing workflows',
  'Developed cross-module understanding of SAP enterprise architecture ',
  'Collaborated with cross-functional teams'
              ],
            },
            {
              company: 'YBI Foundation',
              role: 'Data Science & Machine Learning Intern',
              period: 'Jun 2023 - Aug 2023',
              location: 'Delhi (Online)',
              description: [
            'Built and trained machine learning models using Random Forest and Linear Regression on structured datasets',
  'Developed a scalable movie recommendation pipeline covering data ingestion, transformation and model inference',
  'Handled large datasets with efficient data processing techniques to support model training and evaluation'

              ],
            }].map((exp, idx) => (
              <div
                key={idx}
                className={`group relative rounded-2xl p-6 sm:p-8 shadow-xl border transition-all duration-500 hover:scale-[1.02] ${
                  darkMode 
                    ? 'bg-slate-900/50 border-purple-500/30 hover:border-rose-500/60 hover:shadow-2xl hover:shadow-purple-500/20' 
                    : 'bg-white/80 backdrop-blur-sm border-violet-200 hover:border-violet-400 hover:shadow-2xl hover:shadow-violet-200/50'
                }`}
              >
                <FloatingBubbles />
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
                      darkMode ? 'from-rose-500/20 to-purple-500/20 group-hover:from-rose-500/30 group-hover:to-purple-500/30' : 'from-violet-100 to-fuchsia-100 group-hover:from-violet-200 group-hover:to-fuchsia-200'
                    }`}>
                      <Briefcase size={20} className={`sm:w-6 sm:h-6 ${darkMode ? 'text-rose-400' : 'text-violet-700'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <div>
                          <h3 className={`text-xl sm:text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                            {exp.company}
                          </h3>
                          <p className={`text-base sm:text-lg font-semibold ${darkMode ? 'text-gray-400' : 'text-slate-700'}`}>
                            {exp.role}
                          </p>
                        </div>
                        <div className={`text-xs sm:text-sm mt-2 sm:mt-0 sm:text-right font-medium ${darkMode ? 'text-gray-500' : 'text-slate-600'}`}>
                          <p className="font-semibold">{exp.period}</p>
                          <p>{exp.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className={`text-sm sm:text-base leading-relaxed space-y-1.5 sm:space-y-2 sm:ml-16 font-medium ${
                    darkMode ? 'text-gray-300' : 'text-slate-800'
                  }`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3 transition-all duration-300 hover:translate-x-2">
                        <span className={`font-bold mt-1 flex-shrink-0 ${darkMode ? 'text-rose-400' : 'text-violet-600'}`}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen flex items-center px-4 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto w-full">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold
                       leading-[1.25] py-2
                       mb-8 sm:mb-12 text-center
                       bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600
                       bg-clip-text text-transparent"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Capstone Projects
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {[{
              title: 'Information Quality Analysis in E-Commerce using E-A-T',
              date: 'Mar 2025',
              description: [
                'Proposes a hybrid IQER model that evaluates e-commerce review credibility using first, second and third-order E-A-T–based features',
                'Uses advanced scraping with Playwright and multiple ML classifiers like Naive Bayes, Linear Regression and SVM for accurate analysis',
                'Statistical testing confirms the model\'s strong performance in assessing and interpreting the quality of online reviews'
              ],
              github: 'https://github.com/JaniceMagdalene/informationquality',
              tech: ['Python', 'NLP', 'Machine Learning'],
            },
            {
              title: 'Verbal Abuse Analysis',
              date: 'Dec 2024',
              description: [
                'Uses NLP techniques like tokenization, stop-word removal, lemmatization, vectorization and a Bi-LSTM model to classify hateful vs non-hateful content',
                'Integrates SpaCy, Google Speech Recognition, MongoDB, AWS S3, profanity filtering, Google OAuth, Flask-Mail and a Flask web app with text and speech input modes',
                'Demonstrates strong performance in real-time abuse detection, ensuring robust deployment and effective online safety enforcement'
              ],
              github: 'https://github.com/JaniceMagdalene/verbalabuseanalysis',
              tech: ['Python', 'LSTM', 'NLP', 'Flask'],
            },
            {
              title: 'Elderly Care Network App',
              date: 'Mar 2024',
              description: [
                'Build an elderly-care network application using React (frontend) and Spring Boot (backend) with full mobile, tablet and desktop responsiveness',
                'Integrate a chatbot for assistance and Email.js for real-time communication and notifications',
                'Secure the system using JWT authorization, role-based access (e.g., Admin), and provide dedicated admin dashboards for management'
              ],
              github: 'https://github.com/JaniceMagdalene/BackendSpring',
              external: 'https://www.linkedin.com/posts/janice-magdalene-d-970446228_my-latest-project-an-elderly-care-network-activity-7132424411403472896-uheI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkEoeQBrE5T6N9gf0wP8LpbyEwjsXNTcyI',
              tech: ['React', 'Spring Boot', 'Java'],
            },
            {
              title: 'Movie Recommendation System',
              date: 'Dec 2023',
              description: [
                'Builds a hybrid movie recommender using TF-IDF vectorization of combined textual features and cosine similarity to compute content-based similarity',
                'Uses difflib to correct user-input movie titles and retrieves the closest match for accurate recommendations',
                'Generates the top recommended movies, providing both top-30 and top-10 suggestions for user-selected titles'
              ],
              github: 'https://github.com/JaniceMagdalene/movierecommendation',
              tech: ['Python', 'ML', 'Recommendation Systems'],
            }].map((project, idx) => (
              <div
                key={idx}
                className={`group relative rounded-2xl p-6 sm:p-8 shadow-xl border transition-all duration-500 hover:scale-[1.03] ${
                  darkMode 
                    ? 'bg-slate-900/50 border-purple-500/30 hover:border-rose-500/60 hover:shadow-2xl hover:shadow-purple-500/20' 
                    : 'bg-white/80 backdrop-blur-sm border-violet-200 hover:border-violet-400 hover:shadow-2xl hover:shadow-violet-200/50'
                }`}
              >
                <FloatingBubbles />
                <div className="relative z-10">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
                      darkMode ? 'from-rose-500/20 to-purple-500/20 group-hover:from-rose-500/30 group-hover:to-purple-500/30' : 'from-violet-100 to-fuchsia-100 group-hover:from-violet-200 group-hover:to-fuchsia-200'
                    }`}>
                      <Code size={20} className={`sm:w-6 sm:h-6 ${darkMode ? 'text-rose-400' : 'text-violet-700'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg sm:text-xl font-bold mb-1 leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {project.title}
                      </h3>
                      <p className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-gray-500' : 'text-slate-600'}`}>
                        {project.date}
                      </p>
                    </div>
                  </div>
                  
                  <ul className={`mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base space-y-1.5 sm:space-y-2 font-medium ${
                    darkMode ? 'text-gray-300' : 'text-slate-800'
                  }`}>
                    {project.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                        <span className={`font-bold mt-1 flex-shrink-0 ${darkMode ? 'text-rose-400' : 'text-violet-600'}`}>•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className={`px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-300 hover:scale-110 ${
                          darkMode 
                            ? 'bg-rose-500/10 text-rose-400 border-rose-500/30 hover:bg-rose-500/20' 
                            : 'bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`flex flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-4 border-t ${
                    darkMode ? 'border-slate-800' : 'border-violet-100'
                  }`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 sm:gap-2 font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-110 ${
                        darkMode 
                          ? 'text-rose-400 hover:text-purple-400' 
                          : 'text-violet-700 hover:text-fuchsia-700'
                      }`}
                    >
                      <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                      <span>View Code</span>
                      <ExternalLink size={12} className="sm:w-[14px] sm:h-[14px]" />
                    </a>
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 sm:gap-2 font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-110 ${
                          darkMode 
                            ? 'text-purple-400 hover:text-pink-400' 
                            : 'text-fuchsia-700 hover:text-pink-700'
                        }`}
                      >
                        <Globe size={16} className="sm:w-[18px] sm:h-[18px]" />
                        <span>Live Demo</span>
                        <ExternalLink size={12} className="sm:w-[14px] sm:h-[14px]" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="min-h-screen flex items-center px-4 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto text-center w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Skills & Certifications
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
               {
      title: 'Programming, Backend & Web',
      icon: Code,
      items: 'Java, Python, SQL, MongoDB, Flask, React JS, CSS, HTML',
      color: 'violet'
    },
    {
      title: 'Cloud & Data Engineering',
      icon: Globe,
      items:
        'Azure Databricks, Synapse, ADLS Gen2, Blob Storage, ADF, AWS S3, IAM, EC2, Auto Scaling, Billing',
      color: 'fuchsia'
    },
    {
      title: 'Certifications',
      icon: Award,
      items:
        'AWS Cloud Practitioner Certified, Certified Scrum Master',
      color: 'pink'
    }
            ].map((skill, idx) => (
              <div 
                key={idx}
                className={`group relative p-6 sm:p-8 rounded-2xl shadow-xl border transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 ${
                  darkMode 
                    ? 'bg-slate-900/50 border-purple-500/30 hover:border-rose-500/60 hover:shadow-2xl hover:shadow-purple-500/20' 
                    : 'bg-white/80 backdrop-blur-sm border-violet-200 hover:border-violet-400 hover:shadow-2xl hover:shadow-violet-200/50'
                }`}
              >
                <FloatingBubbles />
                <div className="relative z-10">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
                    darkMode ? `bg-${skill.color}-500/20 group-hover:bg-${skill.color}-500/30` : `bg-${skill.color}-100 group-hover:bg-${skill.color}-200`
                  }`}>
                    <skill.icon size={20} className={`sm:w-6 sm:h-6 ${darkMode ? `text-${skill.color}-400` : `text-${skill.color}-700`}`} />
                  </div>
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {skill.title}
                  </h3>
                  <p className={`text-sm sm:text-base font-medium ${darkMode ? 'text-gray-300' : 'text-slate-800'}`}>
                    {skill.items}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="min-h-screen flex items-center px-4 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto text-center w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Education
          </h2>

          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            {[
              {
                degree: 'OPGDM - BA / AI',
                institution: 'Great Lakes Institute of Management',
                score: 'GPA: 4 / 4',
                period: 'July 2025 – Aug 2027',
                color: 'pink'
              },
              {
                degree: 'B.E. Computer Science Engineering',
                institution: 'Sri Krishna College of Technology',
                score: 'CGPA: 8.99 / 10',
                period: 'Oct 2021 – Mar 2025',
                color: 'violet'
              },
              {
                degree: 'Higher Secondary Education',
                institution: 'Stanes Anglo Indian Higher Secondary School',
                score: '95.18%',
                period: 'May 2021',
                color: 'fuchsia'
              }
            ].map((edu, idx) => (
              <div 
                key={idx}
                className={`group relative p-6 sm:p-8 rounded-2xl border shadow-xl transition-all duration-500 hover:scale-[1.02] ${
                  darkMode 
                    ? 'bg-slate-900/50 border-purple-500/30 hover:border-rose-500/60 hover:shadow-2xl hover:shadow-purple-500/20' 
                    : 'bg-white/80 backdrop-blur-sm border-violet-200 hover:border-violet-400 hover:shadow-2xl hover:shadow-violet-200/50'
                }`}
              >
                <FloatingBubbles />
                <div className="relative z-10">
                  {/* Period badge — top right corner, small */}
                  {edu.period && (
                    <span className={`absolute top-4 right-4 sm:top-5 sm:right-6 text-xs font-bold px-2 py-0.5 rounded-full ${
                      darkMode
                        ? 'text-gray-400 bg-slate-800'
                        : 'text-slate-700 bg-violet-100'
                    }`}>
                      {edu.period}
                    </span>
                  )}

                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
                      darkMode ? `bg-${edu.color}-500/20 group-hover:bg-${edu.color}-500/30` : `bg-${edu.color}-100 group-hover:bg-${edu.color}-200`
                    }`}>
                      <GraduationCap size={20} className={`sm:w-6 sm:h-6 ${darkMode ? `text-${edu.color}-400` : `text-${edu.color}-700`}`} />
                    </div>
                    <div className="flex-1 text-left pr-24 sm:pr-32">
                      <h3 className={`text-xl sm:text-2xl font-bold mb-1 sm:mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {edu.degree}
                      </h3>
                      <p className={`text-sm sm:text-base mb-1 sm:mb-2 font-medium ${darkMode ? 'text-gray-400' : 'text-slate-700'}`}>
                        {edu.institution}
                      </p>
                      <p className={`text-base sm:text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {edu.score}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen flex items-center px-4 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto text-center w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Get In Touch
          </h2>

          <p className={`text-base sm:text-lg mb-6 sm:mb-10 leading-relaxed font-medium ${
            darkMode ? 'text-gray-400' : 'text-slate-700'
          }`}>
            Feel free to reach out for work opportunities, collaborations, or queries.
          </p>

          <div className={`space-y-3 sm:space-y-4 mb-8 sm:mb-10 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            <a 
              href="https://mail.google.com/mail/?view=cm&to=janicemagdalene@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 text-sm sm:text-base p-4 sm:p-6 rounded-2xl border transition-all duration-500 hover:scale-[1.02] cursor-pointer ${
              darkMode 
                ? 'bg-slate-900/50 border-rose-500/30 hover:border-rose-500/60 hover:shadow-lg hover:shadow-rose-500/20' 
                : 'bg-white/80 backdrop-blur-sm border-violet-200 hover:border-violet-400 hover:shadow-lg hover:shadow-violet-200/50'
            }`}>
              <Mail size={20} className={`sm:w-[22px] sm:h-[22px] transition-transform duration-300 group-hover:rotate-12 ${darkMode ? 'text-rose-400' : 'text-violet-700'}`} />
              <span className="font-bold break-all sm:break-normal">janicemagdalene@gmail.com</span>
            </a>
            <a 
              href="tel:+919789299229"
              className={`group flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 text-sm sm:text-base p-4 sm:p-6 rounded-2xl border transition-all duration-500 hover:scale-[1.02] cursor-pointer ${
              darkMode 
                ? 'bg-slate-900/50 border-purple-500/30 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20' 
                : 'bg-white/80 backdrop-blur-sm border-fuchsia-200 hover:border-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-200/50'
            }`}>
              <Phone size={20} className={`sm:w-[22px] sm:h-[22px] transition-transform duration-300 group-hover:rotate-12 ${darkMode ? 'text-purple-400' : 'text-fuchsia-700'}`} />
              <span className="font-bold">+91 9789299229</span>
            </a>
          </div>

          <button
            onClick={downloadResume}
            className={`group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold shadow-lg transition-all duration-500 transform hover:scale-110 hover:shadow-xl text-sm border-2 ${
              darkMode 
                ? 'bg-black text-white border-slate-700 hover:border-rose-500' 
                : 'bg-white text-slate-900 border-violet-200 hover:border-violet-500 hover:bg-violet-50'
            }`}
          >
            <Download size={18} className="group-hover:animate-bounce transition-all duration-300" />
            <span>Download Resume</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 sm:py-8 text-center border-t ${
        darkMode 
          ? 'bg-black text-gray-400 border-rose-500/30' 
              : 'bg-white/90 shadow-xl backdrop-blur-xl border-b border-violet-200'
      }`}>
        <p className="text-xs sm:text-sm px-4 font-bold">
          © 2025 Janice Magdalene D. All rights reserved. Built with React and a passion for technology
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;