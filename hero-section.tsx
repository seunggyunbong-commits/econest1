import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            농가 수익 극대화를 위한 <span className="text-cyan-600">미꾸라지-미나리</span>
            <br />
            <span className="text-cyan-600">아쿠아포닉스</span> 무환수 양식기술
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            BFT(바이오플락) 기술과 아쿠아포닉스를 결합한 친환경 순환농업 모델로 미꾸라지와 미나리를 동시 재배하여 농가
            소득을 극대화합니다. 생존율 80% 이상, 연간 순수익 5,000만원 이상 달성 가능합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg">
              수익성 시뮬레이션 보기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg border-gray-300 hover:border-cyan-600 hover:text-cyan-600 bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              양식장 둘러보기
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-2xl font-bold text-cyan-600 mb-2">80%+</div>
              <div className="text-sm text-gray-600">생존율</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-2xl font-bold text-cyan-600 mb-2">3회</div>
              <div className="text-sm text-gray-600">연간 출하</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-2xl font-bold text-cyan-600 mb-2">800kg</div>
              <div className="text-sm text-gray-600">미나리 생산</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-2xl font-bold text-cyan-600 mb-2">5,108만원</div>
              <div className="text-sm text-gray-600">연간 순수익</div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
              <img
                src="/aquaponics-system-facility.png"
                alt="에코네스트 BFT 아쿠아포닉스 시스템 - 미꾸라지와 미나리를 함께 키우는 통합 양식장"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
