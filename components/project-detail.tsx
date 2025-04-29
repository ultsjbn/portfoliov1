import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface ProjectDetailProps {
  title: string
  description: string
  images: string[]
  client: string
  services: string[]
  year: string
}

export function ProjectDetail({ title, description, images, client, services, year }: ProjectDetailProps) {
  return (
    <div className="min-h-screen">
      <div className="p-8 lg:p-12">
        <Link href="/" className="inline-flex items-center text-sm hover:text-neutral-500 transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to projects
        </Link>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-normal mb-4">{title}</h1>
            <p className="lowercase">{description}</p>
          </div>

          <div>
            <div className="mb-4">
              <h2 className="text-sm mb-1">Client:</h2>
              <p className="text-sm lowercase">{client}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-sm mb-1">Services:</h2>
              <ul className="text-sm space-y-1 lowercase">
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm mb-1">Year:</h2>
              <p className="text-sm">{year}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-px">
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <Image
              src={image || "/placeholder.svg"}
              alt={`${title} - Image ${index + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
