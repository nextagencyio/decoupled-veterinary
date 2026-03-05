'use client'

import Link from 'next/link'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { PawPrint, ShieldCheck, Stethoscope } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ErrorBoundary><HeroSection homepageContent={homepageContent} /></ErrorBoundary>
      <ErrorBoundary><StatsSection homepageContent={homepageContent} /></ErrorBoundary>

      <section className="py-16 bg-white border-y border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display text-primary-900 mb-3">Care Designed for Every Pet</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From preventive wellness to advanced treatment plans, our team supports every stage of pet health.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Stethoscope, title: 'Preventive Care', text: 'Wellness exams, vaccinations, diagnostics, and personalized health plans.' },
              { icon: ShieldCheck, title: 'Urgent Services', text: 'Same-day triage and compassionate treatment for acute illnesses and injuries.' },
              { icon: PawPrint, title: 'Pet Family Support', text: 'Nutrition guidance, behavior support, and proactive owner education.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-primary-100 rounded-xl p-6">
                <item.icon className="w-6 h-6 text-primary-700 mb-3" />
                <h3 className="text-lg font-semibold text-primary-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary><CTASection homepageContent={homepageContent} /></ErrorBoundary>

      <footer className="bg-primary-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-display font-bold text-accent-300 mb-4">Community Hub</h3>
              <p className="text-primary-100">Programs and services designed to strengthen our community together.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-100">
                <li><Link href="/services" className="hover:text-accent-200 transition-colors">Programs</Link></li>
                <li><Link href="/services" className="hover:text-accent-200 transition-colors">Events</Link></li>
                <li><Link href="/about" className="hover:text-accent-200 transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-primary-100">
                <li>123 Main Street</li>
                <li>Anytown, USA 12345</li>
                <li>info@example.com</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-500 mt-8 pt-8 text-center text-primary-200">
            <p>&copy; {new Date().getFullYear()} Community Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
