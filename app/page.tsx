import Hello from "@/app/components/hello";

export default function Home() {
  console.log("Hello World");
  return (
    <>
      <h1 className="text-3xl font-bold underline">Welcome to Next.js</h1>
      <Hello />
    </>
  );
}
