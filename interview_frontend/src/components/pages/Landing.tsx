import { Calendar, Code, Video, MessageSquare, LogIn, UserPlus, ChevronDown } from "lucide-react"
import { useState, useRef } from "react"
import {Link} from 'react-router-dom'

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function CandidateLogin() {
  const [code, setCode] = useState("")

  return (
    <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md animate-slide-in-left">
      <h3 className="text-2xl font-semibold mb-4">Candidates</h3>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter Interview Code"
          className="w-full px-4 py-2 rounded text-black"
        />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300">
          Join Interview
        </button>
      </form>
    </div>
  )
}

function RecruiterOptions() {
  return (
    <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md animate-slide-in-right">
      <h3 className="text-2xl font-semibold mb-4">Recruiters</h3>
      <div className="space-y-4">
        <Link to={'/login'}>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center justify-center transition-colors duration-300" >
          <LogIn className="mr-2" /> Log In
        </button>
        </Link>
        <button className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded flex items-center justify-center transition-colors duration-300">
          <UserPlus className="mr-2" /> Sign Up
        </button>
      </div>
    </div>
  )
}

export default function Landing() {
  const loginSectionRef = useRef<HTMLDivElement>(null)

  const scrollToLoginSection = () => {
    loginSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')]"></div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInRight {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.5s both;
        }

        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <header className="container mx-auto px-4 py-8 relative z-10">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-white text-transparent bg-clip-text">Intrvw Hub</div>
          <div className="space-x-4">
            <button className="text-white hover:text-blue-500 transition-colors duration-300">Features</button>
            <button className="text-white hover:text-blue-500 transition-colors duration-300">Pricing</button>
            <button className="text-white hover:text-blue-500 transition-colors duration-300">About</button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300">Sign Up</button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 relative z-10">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">All-in-One Interview Platform</h1>
          <p className="text-xl mb-8 text-gray-300 animate-fade-in-delay">Schedule, conduct, and evaluate technical interviews with ease.</p>
          <button 
            onClick={scrollToLoginSection}
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded transition-all duration-300 transform hover:scale-105 animate-float flex items-center justify-center mx-auto"
          >
            Get Started
            <ChevronDown className="ml-2 animate-bounce" />
          </button>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard
            icon={<Calendar className="w-12 h-12 text-blue-500" />}
            title="Easy Scheduling"
            description="Seamlessly schedule interviews with integrated calendar functionality."
          />
          <FeatureCard
            icon={<Video className="w-12 h-12 text-blue-500" />}
            title="Video Conferencing"
            description="High-quality video calls for face-to-face interviews."
          />
          <FeatureCard
            icon={<Code className="w-12 h-12 text-blue-500" />}
            title="Live Coding"
            description="Real-time collaborative coding environment for technical assessments."
          />
          <FeatureCard
            icon={<MessageSquare className="w-12 h-12 text-blue-500" />}
            title="Whiteboarding"
            description="Interactive whiteboard for diagramming and problem-solving."
          />
        </section>

        <section ref={loginSectionRef} className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 mb-16">
          <CandidateLogin />
          <RecruiterOptions />
        </section>
      </main>

      <footer className="bg-gray-900 py-8 relative z-10">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2023 Intrvw Hub. All rights reserved.</p>
        </div>
      </footer>
      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
          background-size: 400% 400%;
        }
      `}</style>
    </div>
  )
}