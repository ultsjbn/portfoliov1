import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Organization Logo",
    image: "/placeholder.svg?height=600&width=600&text=AWSLC+Logo",
    description: "branding for the all women student leaders coalition",
  },
  {
    id: 2,
    title: "Campaign Materials",
    image: "/placeholder.svg?height=600&width=600&text=AWSLC+Campaign",
    description: "visual assets for advocacy campaigns and initiatives",
  },
  {
    id: 3,
    title: "Event Collaterals",
    image: "/placeholder.svg?height=600&width=600&text=AWSLC+Events",
    description: "designs for organization events and activities",
  },
  {
    id: 4,
    title: "Social Media Content",
    image: "/placeholder.svg?height=600&width=600&text=AWSLC+Social",
    description: "graphics for the organization's online platforms",
  },
]

export default function AwslcPage() {
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
                <Link href="/about" className="hover:text-neutral-500 transition-colors">
                  about
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mb-8">
            <h2 className="text-xl font-normal mb-4">AWSLC - UP Baguio</h2>
            <p className="lowercase mb-4">
              branding and visual communication for the all women student leaders coalition at up baguio. the project
              focuses on creating empowering visual materials that highlight women's leadership and advocacy within the
              university community.
            </p>
            <p className="text-sm text-neutral-500">2023-Present</p>
          </div>

          <Link href="/" className="text-sm hover:text-neutral-500 transition-colors">
            ← back to home
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100">
          {projects.map((project) => (
            <div key={project.id} className="block relative group bg-white">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 text-white">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-sm lowercase">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
