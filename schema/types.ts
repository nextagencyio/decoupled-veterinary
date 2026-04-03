// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeArticle {
  id: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  tags: any[];
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  featuresItems: any[];
  featuresSubtitle: string;
  featuresTitle: string;
  heroDescription: { value: string };
  heroImage: { url: string; alt: string; width: number; height: number };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphFeatureItem {
  id: string;
  description: { value: string };
  icon: string;
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodePetResource {
  id: string;
  authorName: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  petType: any[];
  publishedDate: { time: string };
  resourceCategory: any[];
  summary: { value: string };
  title: string;
}

export interface NodeProvider {
  id: string;
  acceptingPatients: boolean;
  body: { value: string; summary?: string };
  credentials: string;
  education: { value: string };
  favoriteAnimals: string;
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  providerRole: any[];
  specialty: string;
  title: string;
}

export interface NodeService {
  id: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  petTypes: string[];
  serviceCategory: any[];
  summary: { value: string };
  title: string;
}
