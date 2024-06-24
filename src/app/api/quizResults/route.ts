import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { checkAchievements } from "@/utils/achievementUtils";


export async function POST(req:NextRequest) {
  const body = await req.json()
  const {userId, quizScore} = body;
 
  try{
    let existingUser = await prisma.user.findUnique({
      where: { id: userId },
      include: { quizResults: true },
    });
    const newAchievements = checkAchievements(existingUser, quizScore);
    if (newAchievements.length > 0) {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        achievements: {
          push: newAchievements
        }
      },
    });
    return NextResponse.json({ updatedUser });
  }

    if (existingUser && existingUser.quizResults && existingUser.quizResults.length > 0) {
      const updatedUserStats = await prisma.quizResult.update({
          where: { id: existingUser.quizResults[0].id },
          data: {
            quizScore: existingUser.quizResults[0].quizScore + quizScore,
          },
      });
      return NextResponse.json({ updatedUserStats });
      
  }
  else {
    const newUser = await prisma.user.update({
      where: {id: userId},
      data: {
        quizResults: {
          create: {
            quizScore: quizScore,
          },
        },
      },
    })
   return NextResponse.json({newUser})
  }
}
   catch (error) {
    console.error(error)
    return
  }

}