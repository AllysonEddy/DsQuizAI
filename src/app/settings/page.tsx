import SettingsForm from "@/components/SettingsForm";

export default async function Settings() {
  return (
    <main className="bg-white">
        <div className="flex h-screen items-center backdrop-blur-md">
          <SettingsForm />
        </div>
    </main>
  );
}
