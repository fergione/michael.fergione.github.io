import { motion } from 'framer-motion';

function Resume() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="min-h-screen bg-black text-white flex justify-center items-start"
    >
      <div className="w-full max-w-[800px] p-8">
        <div className="bg-zinc-900 rounded-3xl p-12">
          <h1 className="text-4xl font-bold mb-6">Resume</h1>
          <div className="text-xl text-zinc-400">
            {/* Add your resume content here */}
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium text-white">Senior Developer</h3>
              <p className="text-zinc-400">Company Name • 2020 - Present</p>
              <ul className="list-disc list-inside mt-2">
                <li>Key achievement 1</li>
                <li>Key achievement 2</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium text-white">Computer Science</h3>
              <p className="text-zinc-400">University Name • 2016 - 2020</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;