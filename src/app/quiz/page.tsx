import QuizForm from '@/components/QuizForm';
import { fetchUsers } from "../(auth)/action/fetchUsers";

export const dynamic = "force-dynamic";

/*export default async function Quiz() {
  return (
    
    <main className="bg-white">
      <div className="min-h-screen backdrop-blur-md">
        <QuizForm userId={userId}  />
      </div>
    </main>
  );
}*/

const Quiz = async () => {
  const user = await fetchUsers();
  const userId = user?.data.user.id;
  return (
    <>
      <QuizForm userId={userId} question={''} options={[]} answer={''} explanation={''} />
    </>
  );
};

export default Quiz;
