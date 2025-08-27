import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function OrderSection() {
  return (
    <section id="order" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            미꾸라지 납품 주문
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            BFT 기술로 생산한 고품질 미꾸라지를 신선하게 공급해드립니다. 대량 주문 및 정기 납품 상담 가능합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 주문 정보 */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
                  상품 정보
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">품종</span>
                  <span className="text-gray-600">국내산 미꾸라지</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">크기</span>
                  <span className="text-gray-600">10g~20g (출하 기준)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">포장 단위</span>
                  <span className="text-gray-600">5kg 단위 (산소포장)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">가격</span>
                  <span className="text-cyan-600 font-bold">15,000원/kg</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">최소 주문량</span>
                  <span className="text-gray-600">20kg 이상</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
                  납품 조건
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium">출하 일정</div>
                      <div className="text-sm text-gray-600">연 3회 출하 (5월, 8월, 11월)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium">배송 지역</div>
                      <div className="text-sm text-gray-600">전국 배송 가능 (당일 또는 익일 배송)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium">결제 조건</div>
                      <div className="text-sm text-gray-600">현금 결제 시 3% 할인, 정기 납품 시 추가 할인</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium">품질 보증</div>
                      <div className="text-sm text-gray-600">생존율 95% 이상 보장, 불량품 100% 교환</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 주문 양식 */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              주문 문의
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">업체명/성함 *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="업체명 또는 성함을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">연락처 *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">주문 수량 (kg) *</label>
                  <input
                    type="number"
                    min="20"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="최소 20kg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">희망 납품일</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">배송 주소 *</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="상세 주소를 입력하세요"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">추가 요청사항</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="정기 납품, 특별 포장 요구사항 등을 입력하세요"
                ></textarea>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white py-3">주문 문의하기</Button>
                <Button
                  variant="outline"
                  className="flex-1 border-cyan-600 text-cyan-600 hover:bg-cyan-50 py-3 bg-transparent"
                >
                  전화 상담
                </Button>
              </div>
            </form>

            <div className="mt-8 p-4 bg-white rounded-lg">
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">주문 문의:</strong> 010-4919-2937
                <br />
                <strong className="text-gray-900">영업시간:</strong> 평일 09:00~18:00
                <br />
                <strong className="text-gray-900">이메일:</strong> bsk0103@naver.com
              </div>
            </div>
          </div>
        </div>

        {/* 대량 주문 안내 */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              대량 주문 및 정기 납품
            </h3>
            <p className="text-gray-600">식당, 유통업체, 가공업체를 위한 특별 조건을 제공합니다</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="text-xl font-bold text-cyan-600 mb-2">100kg 이상</div>
              <div className="text-gray-600 mb-2">대량 주문 할인</div>
              <div className="text-sm text-gray-500">kg당 500원 할인</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="text-xl font-bold text-cyan-600 mb-2">정기 납품</div>
              <div className="text-gray-600 mb-2">월 단위 계약</div>
              <div className="text-sm text-gray-500">추가 5% 할인</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="text-xl font-bold text-cyan-600 mb-2">맞춤 서비스</div>
              <div className="text-gray-600 mb-2">특별 포장/배송</div>
              <div className="text-sm text-gray-500">업체별 맞춤 대응</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
