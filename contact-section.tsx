import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cyan-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            함께 성장하세요
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            에코네스트와 함께 지속가능한 양식업의 미래를 만들어가실 파트너를 찾습니다
          </p>
        </div>

        <Card className="border-none shadow-xl bg-white">
          <CardContent className="p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">전화 문의</h3>
                  <p className="text-cyan-600 font-semibold">010-4919-2937</p>
                  <p className="text-sm text-gray-500 mt-1">평일 09:00 - 18:00</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">이메일</h3>
                  <p className="text-cyan-600 font-semibold">bsk0103@naver.com</p>
                  <p className="text-sm text-gray-500 mt-1">24시간 접수 가능</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">주소</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    경상북도 안동시
                    <br />
                    금곡아랫길 32, 2층 269호
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 pt-8 border-t border-gray-100">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-12 py-4 text-lg">
                상담 신청하기
              </Button>
              <p className="text-sm text-gray-500 mt-4">친환경 양식업의 새로운 시작, 에코네스트와 함께하세요</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
