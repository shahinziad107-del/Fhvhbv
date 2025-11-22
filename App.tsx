import React from 'react';
import Navbar from './components/Navbar';
import MemberCard from './components/MemberCard';
import Footer from './components/Footer';
import { TEAM_MEMBERS } from './constants';
import { ArrowRight, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Abstract Background Shapes */}
          <div className="absolute top-20 right-0 -z-10 opacity-20 transform translate-x-1/3">
            <div className="w-96 h-96 bg-indigo-600 rounded-full blur-[120px]"></div>
          </div>
          <div className="absolute bottom-0 left-0 -z-10 opacity-10 transform -translate-x-1/3">
            <div className="w-64 h-64 bg-purple-600 rounded-full blur-[100px]"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-indigo-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span>We are InnovateSquad</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Future</span>, <br />
              One Line at a Time.
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              We are a diverse team of engineers, designers, and strategists passionate about crafting digital experiences that make a difference.
            </p>
            
            <div className="flex justify-center gap-4">
              <a 
                href="#team" 
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-indigo-600/25"
              >
                Meet the Team
                <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 px-8 py-4 rounded-full font-semibold transition-all border border-slate-800"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Minds Behind the Magic</h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Individually tailored, collectively brilliant. Meet the experts driving our success forward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {TEAM_MEMBERS.slice(0, 3).map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 lg:w-2/3 lg:mx-auto">
                 {TEAM_MEMBERS.slice(3, 5).map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics/Info Section */}
        <section id="about" className="py-24 bg-slate-900/30 border-y border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="p-6">
                <div className="text-5xl font-bold text-white mb-2">5+</div>
                <div className="text-indigo-400 font-medium mb-2">Years Combined Experience</div>
                <p className="text-slate-500 text-sm">Working together to solve complex problems.</p>
              </div>
              <div className="p-6 border-t md:border-t-0 md:border-l border-slate-800">
                <div className="text-5xl font-bold text-white mb-2">50+</div>
                <div className="text-indigo-400 font-medium mb-2">Projects Delivered</div>
                <p className="text-slate-500 text-sm">From startups to enterprise solutions.</p>
              </div>
              <div className="p-6 border-t md:border-t-0 md:border-l border-slate-800">
                <div className="text-5xl font-bold text-white mb-2">100%</div>
                <div className="text-indigo-400 font-medium mb-2">Client Satisfaction</div>
                <p className="text-slate-500 text-sm">Dedicated to exceeding expectations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 relative overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[500px] bg-indigo-600/5 rounded-full blur-3xl"></div>
             
            <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-3xl border border-slate-800/50">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to start your project?</h2>
                <p className="text-slate-400 mb-8">
                    We are always looking for new challenges and interesting partners. 
                    Let's discuss how we can help you achieve your goals.
                </p>
                <button className="bg-white text-slate-950 hover:bg-slate-200 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
                    Say Hello
                </button>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;