import Image from "next/image"
import Link from "next/link"

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

export function ProjectGrid() {
  return (
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
  )
}
