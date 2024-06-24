'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="flex h-[calc(100vh-64px)] flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center gap-10 rounded-md bg-blue-500 bg-opacity-100 p-10">
        <h1 className="text-2xl tracking-widest text-white">LOADING</h1>
        <h2 className="text-base text-white">
          Your quiz is currently being created. It takes approximately 5-10
          seconds.
        </h2>
        <div className="mt-6 flex items-center justify-center gap-2">
          <motion.span
            className="h-8 w-8 rounded-full border-2 border-white"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          ></motion.span>
          <motion.span
            className="h-8 w-8 rounded-full border-2 border-white"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, delay: 0.1 }}
          ></motion.span>
          <motion.span
            className="h-8 w-8 rounded-full border-2 border-white"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
          ></motion.span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
