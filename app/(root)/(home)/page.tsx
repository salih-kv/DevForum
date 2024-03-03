import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      <header className="border-b p-4">
        <UserButton />
      </header>
      <div className="flex items-center justify-center p-8">
        <p>Home</p>
      </div>
    </div>
  );
}
