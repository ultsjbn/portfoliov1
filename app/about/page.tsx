import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-1/3 p-8 lg:p-12 lg:sticky lg:top-0 lg:h-screen lg:overflow-auto">
        <div className="max-w-md">
          <h1 className="text-3xl font-normal mb-8">
            <Link href="/" className="hover:text-neutral-500 transition-colors">
              jessica bea novesteras
            </Link>
          </h1>

          <nav className="mb-8">
            <ul className="flex space-x-4 text-sm uppercase tracking-wide">
              <li>
                <Link href="/graphics" className="hover:text-neutral-500 transition-colors">
                  graphics
                </Link>
              </li>
              <li>
                <span className="text-neutral-400">/</span>
              </li>
              <li>
                <Link href="/photography" className="hover:text-neutral-500 transition-colors">
                  photography
                </Link>
              </li>
              <li>
                <span className="text-neutral-400">/</span>
              </li>
              <li>
                <Link href="/about" className="hover:text-neutral-500 transition-colors font-medium">
                  about
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="w-full lg:w-2/3 p-8 lg:p-12">
        <div className="max-w-3xl">
          <div className="mb-12">
            <div className="relative w-48 h-48 mb-8 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Profile"
                alt="Jessica Bea Novesteras"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-normal mb-4">about me</h2>

            <div className="space-y-4">
              <p className="lowercase">
                hello! i am a 2nd year bs computer science student at up baguio with a passion for visual communication.
                i specialize in graphic design and publication materials, with a growing portfolio of work for
                university organizations. currently pursuing my path as an aspiring ui/ux designer and developer,
                combining technical knowledge with creative problem-solving.
              </p>

              <p className="lowercase">
                my design philosophy centers on creating clean, purposeful visuals that effectively communicate messages
                while maintaining aesthetic appeal. i enjoy the challenge of balancing form and function in every
                project.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-normal mb-4">connect with me</h2>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <Link
                  href="https://www.facebook.com/jsscbea/"
                  target="_blank"
                  className="lowercase hover:text-neutral-500 transition-colors"
                >
                  facebook.com/jsscbea
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <Link
                  href="https://www.linkedin.com/in/jessica-bea-a-novesteras-423302328/"
                  target="_blank"
                  className="lowercase hover:text-neutral-500 transition-colors"
                >
                  jessica bea novesteras
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <Link
                  href="mailto:jbnovesteras@gmail.com"
                  className="lowercase hover:text-neutral-500 transition-colors"
                >
                  jbnovesteras@gmail.com
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
                <Link
                  href="https://t.me/ultsjbn"
                  target="_blank"
                  className="lowercase hover:text-neutral-500 transition-colors"
                >
                  @ultsjbn
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="12" r="1" />
                  <circle cx="15" cy="12" r="1" />
                  <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
                  <path d="M7.5 16.5c3.5 1 5.5 1 9 0" />
                  <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5" />
                  <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.476-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5" />
                </svg>
                <Link
                  href="https://discord.com/users/jeonvcrs"
                  target="_blank"
                  className="lowercase hover:text-neutral-500 transition-colors"
                >
                  @jeonvcrs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
