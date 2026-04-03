import Link from 'next/link'
import { DrupalProvider } from '@/lib/types'
import ResponsiveImage from './ResponsiveImage'
import { ArrowRight } from 'lucide-react'

interface ProviderCardProps {
  item: DrupalProvider
}

export default function ProviderCard({ item }: ProviderCardProps) {
  return (
    <Link
      href={item.path || '#'}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-48 bg-gradient-to-br from-teal-600 to-teal-800">
        {item.image?.url ? (
          <ResponsiveImage
            src={item.image.url}
            alt={item.image.alt || item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            variations={item.image.variations}
            targetWidth={400}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 text-white/30 text-4xl font-bold">{item.title?.charAt(0)}</div>
          </div>
        )}
      </div>

      <div className="p-6">
        {item.credentials && (
          <p className="text-sm text-teal-700 font-medium mb-1">{item.credentials}</p>
        )}
        {item.specialty && (
          <p className="text-xs text-gray-500 mb-2">{item.specialty}</p>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
          {item.title}
        </h3>

        {item.body?.processed && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {item.body.processed.replace(/<[^>]*>/g, '').substring(0, 150)}
          </p>
        )}

        {item.acceptingPatients && (
          <span className="inline-block text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full mb-3">Accepting New Patients</span>
        )}

        <div className="flex items-center text-teal-700 font-medium group-hover:gap-2 transition-all">
          Learn more
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
