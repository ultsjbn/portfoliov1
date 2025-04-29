import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brush, Instagram, Layout, Megaphone, PenTool, Share2 } from "lucide-react"

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Professional creative services to help your brand stand out
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="mb-2 w-fit rounded-full bg-primary/10 p-2 text-primary">
                <PenTool className="h-6 w-6" />
              </div>
              <CardTitle>Graphic Design</CardTitle>
              <CardDescription>Custom designs that communicate your brand message effectively</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Print Design</Badge>
                <Badge variant="outline">Digital Graphics</Badge>
                <Badge variant="outline">Illustrations</Badge>
                <Badge variant="outline">Infographics</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="mb-2 w-fit rounded-full bg-primary/10 p-2 text-primary">
                <Instagram className="h-6 w-6" />
              </div>
              <CardTitle>Social Media Management</CardTitle>
              <CardDescription>Strategic social media presence to engage your audience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Content Creation</Badge>
                <Badge variant="outline">Scheduling</Badge>
                <Badge variant="outline">Community Management</Badge>
                <Badge variant="outline">Analytics</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="mb-2 w-fit rounded-full bg-primary/10 p-2 text-primary">
                <Layout className="h-6 w-6" />
              </div>
              <CardTitle>Branding</CardTitle>
              <CardDescription>Cohesive brand identity that resonates with your target audience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Logo Design</Badge>
                <Badge variant="outline">Brand Guidelines</Badge>
                <Badge variant="outline">Visual Identity</Badge>
                <Badge variant="outline">Brand Strategy</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="mb-2 w-fit rounded-full bg-primary/10 p-2 text-primary">
                <Brush className="h-6 w-6" />
              </div>
              <CardTitle>Content Creation</CardTitle>
              <CardDescription>Engaging visual content that tells your brand story</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Photography</Badge>
                <Badge variant="outline">Video Editing</Badge>
                <Badge variant="outline">Motion Graphics</Badge>
                <Badge variant="outline">Copywriting</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="mb-2 w-fit rounded-full bg-primary/10 p-2 text-primary">
                <Megaphone className="h-6 w-6" />
              </div>
              <CardTitle>Digital Marketing</CardTitle>
              <CardDescription>Strategic marketing to increase your online presence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Email Campaigns</Badge>
                <Badge variant="outline">Ad Design</Badge>
                <Badge variant="outline">Landing Pages</Badge>
                <Badge variant="outline">SEO Basics</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="mb-2 w-fit rounded-full bg-primary/10 p-2 text-primary">
                <Share2 className="h-6 w-6" />
              </div>
              <CardTitle>Consultation</CardTitle>
              <CardDescription>Expert advice to improve your brand and social media strategy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Brand Audit</Badge>
                <Badge variant="outline">Social Media Strategy</Badge>
                <Badge variant="outline">Content Planning</Badge>
                <Badge variant="outline">Market Research</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
