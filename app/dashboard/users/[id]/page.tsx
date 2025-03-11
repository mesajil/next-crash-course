export default function About({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">User info of user {params.id}</h1>
    </main>
  );
}
