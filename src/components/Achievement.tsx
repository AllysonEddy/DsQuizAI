"use client"
import React, { useState } from 'react';
import {  FaMedal} from 'react-icons/fa';
import {TbMoodCry} from "react-icons/tb"
import {GiLaurelsTrophy,GiMuscleUp, GiStarMedal,GiBookAura  } from "react-icons/gi"
import { FaFaceSadCry } from "react-icons/fa6"; 

interface AchievementsProps {
  achievements: string[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  const [selectedAchievement, setSelectedAchievement] = useState<string | null>(null);
  const achievementIcons = {
    "Revise Your Knowledge": { icon: <TbMoodCry className="text-3xl" />, description: "You earned 0 point in one of the quizzes. Review topics to improve your knowledge." },
    "Better Luck Next Time": { icon: <FaFaceSadCry className="text-3xl" />, description: "You earned less than 30 point in one of the quizzes. Don't worry, try again to improve your score!" },
    "Try Harder": { icon: <GiMuscleUp className="text-3xl" />, description: "More than 30 Points in one of the quizzes! You're getting there, push a bit harder!" },
    "Not Bad": { icon: <GiBookAura className="text-3xl" />, description: "More than 40 Points in one of the quizzes! Good effort, but you can do better!" },
    "High Scorer": { icon: <GiStarMedal className="text-3xl" />, description: "More than 80 Points in one of the quizzes! Excellent work scoring high on this quiz!" },
    "Expert": { icon: <GiLaurelsTrophy className="text-3xl" />, description: "More than 100 Points in one of the quizzes! WOW! You're an expert in this area!" }
  };
  return (
    <div className="w-full max-w-md">
      <h3 className="text-2xl flex items-center justify-center gap-2 mb-4">
        <FaMedal /> Achievements
      </h3>
      <ul className="list-none bg-blue-600 p-4 rounded-lg shadow-lg">
        {achievements.map((achievement, index: number) => (
          <li key={index} className="flex items-center gap-2 text-lg cursor-pointer" onClick={() => setSelectedAchievement(achievement)}>
            {achievementIcons[achievement as keyof typeof achievementIcons].icon}
            <span className="text-xl">{achievement}</span>
          </li>
        ))}
       </ul>
      {selectedAchievement && (
        <div className="mt-4 p-2 bg-blue-800 text-white rounded">
          {achievementIcons[selectedAchievement as keyof typeof achievementIcons].description}
        </div>
      )}
    </div>
  );
};

export default Achievements;