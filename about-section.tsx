import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            에코네스트의 혁신 기술
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            자체 개발한 BFT 기술과 아쿠아포닉스를 결합하여 친환경 순환농업의 새로운 패러다임을 제시합니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                BFT 바이오플락 기술
              </h3>
              <p className="text-gray-600">
                유용 미생물을 활용하여 무환수, 무항생제, 무병의 3무 시스템으로 생존율 80% 이상을 달성합니다
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                아쿠아포닉스 순환시스템
              </h3>
              <p className="text-gray-600">
                미꾸라지 배설물이 미나리의 영양분이 되는 완전한 순환 시스템으로 무배출수, 무농약, 무인공영양분을
                실현합니다
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                수익 극대화 모델
              </h3>
              <p className="text-gray-600">
                미꾸라지 연 3회 출하와 미나리 연 8회 수확으로 100평 기준 연간 순수익 5,108만원 달성 가능합니다
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="mb-8">
            <img
              src="/aquaponics-system-facility.png"
              alt="BFT 아쿠아포닉스 시스템 - 미꾸라지 수조와 미나리 재배베드가 연결된 순환 시스템"
              className="w-full max-w-2xl mx-auto rounded-xl shadow-lg"
            />
          </div>
          <h3
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            기존 양식 vs 에코네스트 BFT 아쿠아포닉스
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-700 mb-4">기존 전통 양식</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 생존율: 50% 이하</li>
                <li>• 환수 필요 (높은 운영비)</li>
                <li>• 단일 작물 재배</li>
                <li>• 화학비료 사용</li>
                <li>• 제한적인 기술 지원</li>
              </ul>
            </div>
            <div className="bg-cyan-50 rounded-xl p-6 border-2 border-cyan-200">
              <h4 className="text-lg font-bold text-cyan-700 mb-4">에코네스트 BFT 시스템</h4>
              <ul className="space-y-2 text-cyan-700">
                <li>• 생존율: 80% 이상</li>
                <li>• 무환수 (운영비 절감)</li>
                <li>• 미꾸라지+미나리 동시 재배</li>
                <li>• 자연 순환 영양분</li>
                <li>• 전문 기술 및 교육 제공</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
