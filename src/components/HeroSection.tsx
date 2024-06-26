'use client';

import { motion } from 'framer-motion';
import ProgressLine from './ProgressLine';
import { useRouter } from 'next/navigation';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
  const router = useRouter();

  return (
    <div >
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center gap-8 backdrop-blur-md">
        <section className="mx-4 flex flex-col lg:container lg:mx-auto lg:h-[calc(100vh-64px)] lg:flex-row lg:items-center lg:space-x-2 ">
          <div className="pl-7 mt-4 flex flex-col items-center space-y-6 lg:mt-0 lg:w-1/2 lg:items-start lg:space-y-10">
            <motion.div
              className="mb-8 text-center text-2xl font-bold text-black lg:mb-0 lg:text-left lg:text-5xl"
              initial={{ opacity: 0, x: -75 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Create quiz in seconds with the power of{' '}
              <span className=" text-blue-500">GPT-3.5 Turbo.</span>
            </motion.div>
            <motion.p
              className="rounded-xl bg-black bg-opacity-80 p-4 text-center text-xs text-white  shadow-2xl lg:text-left lg:text-base"
              initial={{ opacity: 0, x: 75 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Take your Data Structure and Algorithm knowledge to the next level on this platform where
              you can create quizzes of all topic. Choose the topic
              you are interested in and GPT will create your questions
              in seconds.
            </motion.p>
            <motion.button
              className="flex items-center gap-2 rounded bg-blue-600 px-8 py-4 text-xs font-medium text-gray-200 shadow-lg transition-all hover:bg-green-700 active:scale-95 lg:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              onClick={() => router.push('/settings')}
            >
              <RocketLaunchIcon className="h-7 w-7" />
              Start quiz now!
            </motion.button>
          </div>
          <div className="mt-8 lg:mt-0 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
            <ProgressLine />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
