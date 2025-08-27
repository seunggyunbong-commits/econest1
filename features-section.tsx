import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, BarChart3, Shield } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Automate Repetitive Tasks",
    description:
      "Save hours each week by automating routine tasks. Set up workflows once and let StreamLine handle the rest.",
  },
  {
    icon: Users,
    title: "Collaborate Seamlessly",
    description:
      "Bring your team together with real-time collaboration tools and shared workspaces that keep everyone aligned.",
  },
  {
    icon: BarChart3,
    title: "Gain Insights with Analytics",
    description:
      "Make data-driven decisions with comprehensive analytics and reporting that reveal productivity patterns.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Rest easy knowing your data is protected with bank-level encryption and compliance with industry standards.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to streamline your workflow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to help teams work smarter, not harder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
