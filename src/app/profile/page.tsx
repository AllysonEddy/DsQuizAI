"use server"
import { fetchUsers } from "../(auth)/action/fetchUsers";
import { FaTrophy, FaMedal,FaStar} from 'react-icons/fa';
import Achievements from "@/components/Achievement";




const page = async () => {
  
    const currentUser = await fetchUsers();
    return (
        <main className="bg-white text-black min-h-screen p-4">
      <div className="text-center mb-10">
        <div className="text-center mb-10 text-2xl uppercase">
          <h1 className="text-4xl font-bold uppercase">{currentUser?.data?.user.username} Stats 📊</h1>
        </div>
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
        <h2 className="text-4xl flex items-center justify-center gap-2">
                        <FaTrophy /> Total Points
                    </h2>
                    <p className="text-5xl font-bold">{currentUser?.data?.quizResults[0].quizScore}</p>
                    <Achievements achievements={currentUser?.data?.user.achievements} />
        </div>
      </div>
      </main>
    );
  };
  
  export default page;
  