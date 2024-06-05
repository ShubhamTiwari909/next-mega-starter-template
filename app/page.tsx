import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Kickstart your next js app with this mega starter template
            </h2>

            <p className="mt-4 text-gray-300">
              This template have been bootstrapped with Next.js, TypeScript, Tailwind CSS, ESLint, prettier and much
              more.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="/description/usehook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="pink"
                stroke="violet"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-webhook"
              >
                <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
                <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
                <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-white">Mantine hooks</h2>

              <p className="mt-1 text-sm text-gray-300">
                Leverage the power of mantine inbuilt hooks to build your next js app.
              </p>
            </Link>

            <Link
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="/description/nextui"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="lightgray"
                stroke="lightgray"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-component"
              >
                <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
                <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
                <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
                <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-white">NEXT UI</h2>

              <p className="mt-1 text-sm text-gray-300">
                Creative beautiful, highly customized and responsive UI components.
              </p>
            </Link>

            <Link
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="/description/zustand"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#C4A484"
                stroke="#C4A484"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-satellite"
              >
                <path d="M13 7 9 3 5 7l4 4" />
                <path d="m17 11 4 4-4 4-4-4" />
                <path d="m8 12 4 4 6-6-4-4Z" />
                <path d="m16 8 3-3" />
                <path d="M9 21a6 6 0 0 0-6-6" />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-white">Zustand State Managment</h2>

              <p className="mt-1 text-sm text-gray-300">React global state management using the power of zustand.</p>
            </Link>

            <Link
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="/description/react-hook-form"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#C70039"
                stroke="pink"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-open-text"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                <path d="M6 8h2" />
                <path d="M6 12h2" />
                <path d="M16 8h2" />
                <path d="M16 12h2" />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-white">React Hook Forms and ZOD</h2>

              <p className="mt-1 text-sm text-gray-300">
                Create and handle your forms with ease using react hook form and add validation of any type using zod.
              </p>
            </Link>

            <Link
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="/description/swr"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#DAF7A6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-hard-drive-download"
              >
                <path d="M12 2v8" />
                <path d="m16 6-4 4-4-4" />
                <rect
                  width="20"
                  height="8"
                  x="2"
                  y="14"
                  rx="2"
                />
                <path d="M6 18h.01" />
                <path d="M10 18h.01" />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-white">SWR Data fetching</h2>

              <p className="mt-1 text-sm text-gray-300">
                Handle the client side data manipulation and fetching with ease using swr.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
