"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <span className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
                  에코네스트
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                기술소개
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                사업영역
              </a>
              <a
                href="#order"
                className="text-gray-600 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                미꾸라지 주문
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                문의하기
              </a>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">농장 구축 상담</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900 p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-cyan-600">
                기술소개
              </a>
              <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-cyan-600">
                사업영역
              </a>
              <a href="#order" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-cyan-600">
                미꾸라지 주문
              </a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-cyan-600">
                문의하기
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">농장 구축 상담</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
