import { ProjectDetail } from "@/components/project-detail"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const projects = [
  {
    id: "1",
    title: "COMSCI@UP.BAG",
    description:
      "ongoing design work for the computer science department at the university of the philippines baguio. this project involves creating cohesive visual materials for department events, announcements, and academic initiatives that represent the technical and innovative nature of the program.",
    images: [
      "/placeholder.svg?height=800&width=1200&text=COMSCI@UP.BAG+1",
      "/placeholder.svg?height=800&width=1200&text=COMSCI@UP.BAG+2",
    ],
    client: "up baguio computer science department",
    services: ["social media pubmats", "event graphics", "digital marketing"],
    year: "2023-Present",
  },
  {
    id: "2",
    title: "AWSLC - UP Baguio",
    description:
      "branding and visual communication for the all women student leaders coalition at up baguio. the project focuses on creating empowering visual materials that highlight women's leadership and advocacy within the university community.",
    images: [
      "/placeholder.svg?height=800&width=1200&text=AWSLC+1",
      "/placeholder.svg?height=800&width=1200&text=AWSLC+2",
    ],
    client: "all women student leaders coalition",
    services: ["brand development", "social media marketing", "campaign materials"],
    year: "2023-Present",
  },
  {
    id: "3",
    title: "YES-O TNHS",
    description:
      "a comprehensive branding project for the young entrepreneurs society organization at tarlac national high school. the work included creating visual identity materials, social media graphics, and event collaterals that helped establish the organization's presence from 2020 to 2023.",
    images: [
      "/placeholder.svg?height=800&width=1200&text=YES-O+TNHS+1",
      "/placeholder.svg?height=800&width=1200&text=YES-O+TNHS+2",
      "/placeholder.svg?height=800&width=1200&text=YES-O+TNHS+3",
    ],
    client: "young entrepreneurs society organization",
    services: ["brand development", "social media pubmats", "print design"],
    year: "2020-2023",
  },
  {
    id: "4",
    title: "Ang Supling - TNHS",
    description:
      "design work for ang supling, the official school publication of tarlac national high school. this involved creating layouts, illustrations, and graphics for the school newspaper, helping to communicate important news and stories to the student body.",
    images: [
      "/placeholder.svg?height=800&width=1200&text=Ang+Supling+1",
      "/placeholder.svg?height=800&width=1200&text=Ang+Supling+2",
    ],
    client: "tarlac national high school publication",
    services: ["publication design", "layout design", "illustration"],
    year: "2022-2023",
  },
  {
    id: "5",
    title: "The Melting Pot - TNHS",
    description:
      "creative contributions to the melting pot, a literary folio at tarlac national high school. the project involved designing visually engaging layouts for student literary works, poetry, and creative writing, enhancing the reading experience through thoughtful typography and visual elements.",
    images: [
      "/placeholder.svg?height=800&width=1200&text=The+Melting+Pot+1",
      "/placeholder.svg?height=800&width=1200&text=The+Melting+Pot+2",
    ],
    client: "tarlac national high school literary organization",
    services: ["publication design", "typography", "print design"],
    year: "2021-2023",
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return <ProjectDetail {...project} />
}
