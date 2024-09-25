import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import photoshopIcon from '../assets/photoshop.svg';
import { faLaravel, faReact, faVuejs, faFigma, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

const Tools = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-8">Specialized Skills</h1>
      <p className="text-1xl mb-8">This is the Tools I usually use for my work</p>
      <div className="col-span-12 flex flex-wrap justify-center">
        <div className="m-4">
          <FontAwesomeIcon icon={faLaravel} className="text-7xl text-red-600 animate-twinkle" />
          <p>Laravel</p>
        </div>
        <div className="m-4">
          <FontAwesomeIcon icon={faReact} className="text-7xl text-blue-500 animate-rotate" />
          <p>React</p>
        </div>
        <div className="m-4">
          <FontAwesomeIcon icon={faVuejs} className="text-7xl text-green-500 animate-flip-up" />
          <p>Vue.js</p>
        </div>
        <div className="m-4">
          <FontAwesomeIcon icon={faCss3Alt} className="text-7xl text-blue-500 animate-flip" />
          <p>CSS</p>
        </div>
        <div className="m-4">
          <FontAwesomeIcon icon={faFigma} className="text-7xl text-black-500 animate-zoom-out" />
          <p>Figma</p>
        </div>
        <div className="m-4 flex flex-col items-center">
          <img src={photoshopIcon} alt="Photoshop" className="w-16 h-16 animate-jump" />
          <p className="pt-2">Photoshop</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-rotate {
          animation: rotate 2s linear infinite; /* Durasi dan kecepatan animasi */
        }

        @keyframes jump {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-jump {
          animation: jump 0.6s ease-in-out infinite; /* Durasi dan kecepatan animasi */
        }

        @keyframes flip-up {
          0% {
            transform: perspective(600px) rotateX(90deg);
          }
          50% {
            transform: perspective(600px) rotateX(-10deg);
          }
          100% {
            transform: perspective(600px) rotateX(0deg);
          }
        }

        .animate-flip-up {
          animation: flip-up 1s ease-in-out infinite; /* Durasi dan kecepatan animasi */
          display: inline-block;
        }

        @keyframes flip {
          0% {
            transform: perspective(600px) rotateY(0deg);
          }
          50% {
            transform: perspective(600px) rotateY(180deg);
          }
          100% {
            transform: perspective(600px) rotateY(0deg);
          }
        }

        .animate-flip {
          animation: flip 1s ease-in-out infinite; /* Durasi dan kecepatan animasi */
          display: inline-block;
        }

        @keyframes zoom-out {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.8);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-zoom-out {
          animation: zoom-out 1s ease-in-out infinite; /* Durasi dan kecepatan animasi */
        }

        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .animate-twinkle {
          animation: twinkle 1s ease-in-out infinite; /* Durasi dan kecepatan animasi */
        }
      `}</style>
    </div>
  );
};

export default Tools;