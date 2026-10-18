import Link from 'next/link'
export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-8xl font-bold">404</h1>

      <h2 className="text-2xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2">
        Sorry, the page you are looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-6 px-5 py-2 bg-black text-white rounded"
      >
        Go Home
      </Link>
    </main>
  );
}