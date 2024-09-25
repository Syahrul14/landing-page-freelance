import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="home" className="font-poppins min-h-screen flex flex-col relative">
      <style jsx>{`
        /* Background langit */
        .sky-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, #87ceeb, #ffffff); /* Gradien langit */
          overflow: hidden;
          z-index: -1;
        }

        /* Awan */
        .cloud {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0.7;
          filter: blur(20px);
          animation: float 15s linear infinite;
        }

        /* Mengatur posisi dan ukuran awan */
        .cloud1 {
          width: 200px;
          height: 100px;
          top: 20%;
          left: 10%;
        }

        .cloud2 {
          width: 300px;
          height: 150px;
          top: 30%;
          left: 50%;
        }

        .cloud3 {
          width: 250px;
          height: 120px;
          top: 50%;
          left: 20%;
        }

        @keyframes float {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

      <div className="sky-background">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-t-transparent border-red-500 rounded-full animate-spin"></div>
            <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-gradient-to-r from-red-400 to-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <h1 className="ml-4 text-xl font-semibold text-gray-700">Loading...</h1>
        </div>
      ) : (
        <div className="flex-grow pt-2 relative z-10">
          <Navbar />
          <Banner />
          <Services />
          <Gallery />
          <Tools />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;