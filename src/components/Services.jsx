import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCode, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const carServices = [
  { title: 'Web Development', icon: faCode, description: 'Building responsive and high-performance websites.' },
  { title: 'Video Editing', icon: faVideo, description: 'Professional video editing services to bring your content to life.' },
  { title: 'Graphic Design', icon: faPaintBrush, description: 'Creative design solutions for branding and marketing.' }
];

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1, 
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <div id="services" className="mt-20">
      <div className="max-w-7xl mx-auto py-4 flex flex-col md:flex-row justify-start items-start md:px-32">
        <h1 className="p-6 font-bold text-5xl lg:pl-5">What Services you will Get from me!</h1>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto py-10 md:px-32">
        
        {carServices.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} 
            variants={cardVariants}
            className="relative bg-white bg-opacity-30 backdrop-blur-sm shadow-lg rounded-lg p-6 text-center overflow-hidden group"
          >
            <div className="absolute inset-0 bg-red-500 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
            <FontAwesomeIcon icon={service.icon} className="relative z-10 text-black-500 group-hover:text-white text-4xl mb-4 mx-auto" />
            <h2 className="relative z-10 text-xl font-bold mb-2 text-black-500 group-hover:text-white">{service.title}</h2>
            <p className="relative z-10 text-sm text-black-500 group-hover:text-white">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;