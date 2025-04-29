import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "COMSCI@UP.BAG",
    image: "/placeholder.svg?height=600&width=600&text=COMSCI@UP.BAG",
    category: "Department Branding",
    link: "/org/comsci",
  },
  {
    id: 2,
    title: "AWSLC - UP Baguio",
    image: "/placeholder.svg?height=600&width=600&text=AWSLC",
    category: "Organization Branding",
    link: "/org/awslc",
  },
  {
    id: 3,
    title: "YES-O TNHS",
    image: "/placeholder.svg?height=600&width=600&text=YES-O+TNHS",
    category: "Organization Branding",
    link: "/org/yeso",
  },
  {
    id: 4,
    title: "Ang Supling - TNHS",
    image: "/placeholder.svg?height=600&width=600&text=Ang+Supling",
    category: "School Publication",
    link: "/org/supling",
  },
  {
    id: 5,
    title: "The Melting Pot - TNHS",
    image: "/placeholder.svg?height=600&width=600&text=The+Melting+Pot",
    category: "School Publication",
    link: "/org/meltingpot",
  },
  {
    id: 6,
    title: "Publication Materials",
    image: "/placeholder.svg?height=600&width=600&text=Publication+Materials",
    category: "Print & Digital Design",
    link: "/publication-materials",
  },
]

export default function GraphicsPage() {
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
                <Link href="/graphics" className="hover:text-neutral-500 transition-colors font-medium">
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
            a collection of my graphic design work across various student organizations and projects. each piece
            represents my approach to visual communication and problem-solving through design.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100">
          {projects.map((project) => (
            <Link key={project.id} href={project.link} className="block relative group bg-white">
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
                <p className="text-sm lowercase">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
