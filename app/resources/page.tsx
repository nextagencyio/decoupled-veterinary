import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_PET_RESOURCE_TEASERS } from '@/lib/queries'
import { PetResourceListData } from '@/lib/types'
import Header from '../components/Header'
import PetResourceCard from '../components/PetResourceCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Pet Resources | Veterinary',
  description: 'Browse our pet resources.',
}

async function getPetResources() {
  try {
    const client = getClient()
    const data = await client.raw(GET_PET_RESOURCE_TEASERS, { first: 50 })
    return data?.nodePetResources?.nodes || []
  } catch (error) {
    console.error('Error fetching pet resources:', error)
    return []
  }
}

export default async function PetResourcesPage() {
  const items = await getPetResources()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Pet Resources
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Explore our pet resources.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Pet Resources Yet</h2>
              <p className="text-gray-500">
                Pet Resources will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item: any) => (
                <PetResourceCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
