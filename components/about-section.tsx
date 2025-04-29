import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex justify-center">
            <div className="relative h-[400px] w-[400px] overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Profile"
                alt="Designer profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm a passionate graphic designer and social media manager with over 5 years of experience helping
                brands connect with their audience through compelling visual storytelling.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">My Approach</h3>
              <p className="max-w-[600px] text-muted-foreground">
                I believe in creating designs that not only look beautiful but also effectively communicate your brand
                message. My work combines creativity with strategic thinking to deliver results that engage and convert.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Experience</h3>
              <p className="max-w-[600px] text-muted-foreground">
                I've worked with clients across various industries, from startups to established brands, helping them
                establish a strong visual presence and grow their social media engagement.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button variant="outline" className="gap-1.5">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <Link href="#contact">
                <Button className="gap-1.5">
                  Let's Work Together
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
