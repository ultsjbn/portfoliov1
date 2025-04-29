import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Creative Design Solutions for Your Brand
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Graphic design and social media management that elevates your brand and engages your audience.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#portfolio">
                <Button size="lg" className="gap-1.5">
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-[450px]">
              <Image
                src="/placeholder.svg?height=450&width=450"
                alt="Designer at work"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
