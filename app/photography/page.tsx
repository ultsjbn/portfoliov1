import Link from "next/link"
import Image from "next/image"

const photos = [
  {
    id: 1,
    title: "Nature",
    image: "/placeholder.svg?height=600&width=600&text=Nature+Photo",
  },
  {
    id: 2,
    title: "Urban",
    image: "/placeholder.svg?height=600&width=600&text=Urban+Photo",
  },
  {
    id: 3,
    title: "Portrait",
    image: "/placeholder.svg?height=600&width=600&text=Portrait+Photo",
  },
  {
    id: 4,
    title: "Event",
    image: "/placeholder.svg?height=600&width=600&text=Event+Photo",
  },
  {
    id: 5,
    title: "Abstract",
    image: "/placeholder.svg?height=600&width=600&text=Abstract+Photo",
  },
  {
    id: 6,
    title: "Street",
    image: "/placeholder.svg?height=600&width=600&text=Street+Photo",
  },
]

export default function PhotographyPage() {
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
                <Link href="/photography" className="hover:text-neutral-500 transition-colors font-medium">
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
            a selection of my photography work capturing moments, spaces, and subjects through my lens. these images
            represent my visual perspective and attention to composition, light, and storytelling.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100">
          {photos.map((photo) => (
            <div key={photo.id} className="block relative group bg-white">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={photo.image || "/placeholder.svg"}
                  alt={photo.title}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 text-white">
                <h3 className="text-lg font-medium">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
