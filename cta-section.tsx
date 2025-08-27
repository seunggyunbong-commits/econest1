import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-600 to-pink-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to transform your workflow?</h2>
        <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
          Join thousands of teams who have already streamlined their processes with StreamLine. Start your free trial
          today and see the difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 text-lg bg-transparent"
          >
            Schedule Demo
          </Button>
        </div>

        <p className="text-cyan-100 text-sm mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
      </div>
    </section>
  )
}
