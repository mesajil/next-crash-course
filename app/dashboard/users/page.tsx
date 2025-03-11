import Link from "next/link";

export default function About() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Users</h1>

      <div className="w-full max-w-2xl">
        <ul className="divide-y divide-gray-200">
          {users.map((user) => (
            <li key={user.id} className="py-4 flex items-center">
              <div>
                <Link href={`/dashboard/users/${user.id}`}>
                  <h2 className="text-lg font-medium text-gray-900">{user.name}</h2>
                </Link>
                <p className="text-gray-500">{user.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
