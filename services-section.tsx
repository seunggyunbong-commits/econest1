import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            우리의 사업 영역
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            미꾸라지-미나리 아쿠아포닉스 시스템을 통한 원물 생산부터 농장 구축 솔루션까지 종합적인 서비스를 제공합니다
          </p>
        </div>

        <div className="mb-16 text-center">
          <div className="max-w-4xl mx-auto">
            <img
              src="/fresh-mudfish-bft.png"
              alt="BFT 바이오플락 기술로 키운 싱싱한 국내산 미꾸라지"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
            />
            <p className="mt-4 text-gray-600 text-lg">BFT 바이오플락 기술로 키운 건강하고 품질 좋은 미꾸라지</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
                원물 생산 및 판매
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">BFT 기술로 생산한 고품질 미꾸라지와 친환경 미나리를 공급합니다</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 연간 미꾸라지 3회 출하 (100평 기준)</li>
                <li>• 미나리 800kg 이상 생산</li>
                <li>• 로컬푸드 매장 및 B2B 납품</li>
                <li>• 친환경 인증 획득 추진</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
                농장 구축 솔루션
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">100평~500평 규모의 아쿠아포닉스 양식장 설계 및 구축을 지원합니다</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 시설 설계 및 장비 설치</li>
                <li>• BFT 시스템 구축</li>
                <li>• 자동화 수질 관리 시스템</li>
                <li>• 운영 교육 및 기술 지원</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
                기술 이전 및 교육
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">전문적인 인공종묘 생산기술과 운영 노하우를 전수합니다</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 인공채란 및 부화 기술</li>
                <li>• 치어 이유식 제조법</li>
                <li>• 수질 관리 및 사료 급이</li>
                <li>• 농가 맞춤형 컨설팅</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3
            className="text-2xl font-bold text-gray-900 mb-6 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            수익성 시뮬레이션 (100평 기준)
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-cyan-50 rounded-xl">
              <div className="text-3xl font-bold text-cyan-600 mb-2">3,600만원</div>
              <div className="text-gray-600 mb-2">미꾸라지 연간 매출</div>
              <div className="text-sm text-gray-500">40,000마리 × 3회 출하</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">3,168만원</div>
              <div className="text-gray-600 mb-2">미나리 연간 매출</div>
              <div className="text-sm text-gray-500">800kg × 8회 수확</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">5,108만원</div>
              <div className="text-gray-600 mb-2">연간 순수익</div>
              <div className="text-sm text-gray-500">총매출 - 운영비용</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
