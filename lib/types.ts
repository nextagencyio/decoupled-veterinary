
export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface DrupalNode {
  id: string
  title: string
  path: string
  created: { timestamp: number }
  changed: { timestamp: number }
  __typename?: string
}

export interface TaxonomyTerm {
  id: string
  name: string
}

export interface DrupalService extends DrupalNode {
  body?: { processed: string; summary?: string }
  petTypes?: string[]
  summary?: { processed: string }
  serviceCategory?: TaxonomyTerm[]
  image?: DrupalImage
}

export interface DrupalProvider extends DrupalNode {
  body?: { processed: string }
  credentials?: string
  specialty?: string
  education?: { processed: string }
  favoriteAnimals?: string
  acceptingPatients?: boolean
  providerRole?: TaxonomyTerm[]
  image?: DrupalImage
}

export interface DrupalPetResource extends DrupalNode {
  body?: { processed: string; summary?: string }
  summary?: { processed: string }
  authorName?: string
  publishedDate?: { timestamp: number }
  petType?: TaxonomyTerm[]
  resourceCategory?: TaxonomyTerm[]
  image?: DrupalImage
}

export interface DrupalPage extends DrupalNode {
  body?: { processed: string }
}

export interface ParagraphStatItem {
  id: string
  number: string
  label: string
}

export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: { processed: string }
  heroImage?: DrupalImage
  statsItems?: ParagraphStatItem[]
  featuredItemsTitle?: string
  featuresTitle?: string
  featuresSubtitle?: string
  featuresItems?: DrupalFeature[]
  ctaTitle?: string
  ctaDescription?: { processed: string }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalFeature {
  id: string
  title: string
  description?: { processed: string }
  icon?: string
}

export interface HomepageData { nodeHomepages: { nodes: DrupalHomepage[] } }
export interface ServiceListData { nodeServices: { nodes: DrupalService[] } }
export interface ProviderListData { nodeProviders: { nodes: DrupalProvider[] } }
export interface PetResourceListData { nodePetResources: { nodes: DrupalPetResource[] } }

export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
