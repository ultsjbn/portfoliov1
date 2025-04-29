import Link from "next/link"
import { ProjectGrid } from "@/components/project-grid"

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-1/3 p-8 lg:p-12 lg:sticky lg:top-0 lg:h-screen lg:overflow-auto">
        <div className="max-w-md">
          <h1 className="text-3xl font-normal mb-8">jessica bea novesteras</h1>

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
                <Link href="/about" className="hover:text-neutral-500 transition-colors">
                  about
                </Link>
              </li>
            </ul>
          </nav>

          <p className="mb-8 lowercase">
            hello! i am a 2nd year bs computer science student at up baguio with a passion for visual communication. i
            specialize in graphic design and publication materials, with a growing portfolio of work for university
            organizations. currently pursuing my path as an aspiring ui/ux designer and developer, combining technical
            knowledge with creative problem-solving.
          </p>

          <div className="mb-8">
            <h2 className="text-sm mb-2">Services:</h2>
            <ul className="text-sm space-y-1 lowercase">
              <li>social media pubmats</li>
              <li>social media marketing</li>
              <li>brand development</li>
              <li>photography</li>
              <li>merchandise design</li>
              <li>print design</li>
            </ul>
          </div>

          <Link href="#" className="inline-block text-sm mb-8 hover:text-neutral-500 transition-colors">
            Resume
          </Link>

          <div className="mb-8">
            <h2 className="text-sm mb-2">My Works Under Student Orgs:</h2>
            <ol className="text-sm space-y-1 list-decimal list-inside">
              <li>
                <Link href="/org/comsci" className="hover:text-neutral-500 transition-colors">
                  COMSCI@UP.BAG (2023-Present)
                </Link>
              </li>
              <li>
                <Link href="/org/awslc" className="hover:text-neutral-500 transition-colors">
                  AWSLC - UP Baguio (2023-Present)
                </Link>
              </li>
              <li>
                <Link href="/org/yeso" className="hover:text-neutral-500 transition-colors">
                  YES-O TNHS (2020-2023)
                </Link>
              </li>
              <li>
                <Link href="/org/supling" className="hover:text-neutral-500 transition-colors">
                  Ang Supling - TNHS (2022-2023)
                </Link>
              </li>
              <li>
                <Link href="/org/meltingpot" className="hover:text-neutral-500 transition-colors">
                  The Melting Pot - TNHS (2021-2023)
                </Link>
              </li>
            </ol>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="https://www.facebook.com/jsscbea/"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-neutral-500 transition-colors"
            >
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
            </Link>
            <Link
              href="https://www.linkedin.com/in/jessica-bea-a-novesteras-423302328/"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-neutral-500 transition-colors"
            >
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
            </Link>
            <Link
              href="mailto:jbnovesteras@gmail.com"
              aria-label="Email"
              className="hover:text-neutral-500 transition-colors"
            >
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
            </Link>
            <Link
              href="https://t.me/ultsjbn"
              target="_blank"
              aria-label="Telegram"
              className="hover:text-neutral-500 transition-colors"
            >
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
            </Link>
            <Link
              href="https://discord.com/users/jeonvcrs"
              target="_blank"
              aria-label="Discord"
              className="hover:text-neutral-500 transition-colors"
            >
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
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/3">
        <ProjectGrid />
      </div>
    </div>
  )
}
