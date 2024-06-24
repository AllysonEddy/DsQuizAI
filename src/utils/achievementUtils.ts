import { FaStar, FaRocket, FaMedal, FaTrophy } from 'react-icons/fa';

export const checkAchievements = (user:any, quizScore:number) => {
    const achievements: string[] = []; 
    const addAchievement = (achievement: string) => {
        if (!user.achievements.includes(achievement)) {
            achievements.push(achievement);
        }
    };

    if (quizScore === 0) {
        addAchievement("Revise Your Knowledge ");
    }
    if (quizScore < 30 && quizScore > 0) {
        addAchievement("Better Luck Next Time");
    }
    if (quizScore < 40 && quizScore > 30) {
        addAchievement("Try Harder");
    }
    if (quizScore < 50 && quizScore >= 40) {
        addAchievement("Not Bad");
    }
    if (quizScore >= 80 && quizScore < 100) {
        addAchievement("High Scorer");
    }
    if (quizScore > 100) {
        addAchievement("Expert");
    }

    return achievements;
};