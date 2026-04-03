// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_SERVICE_TEASERS = gql`
  query GetServiceTeasers($first: Int = 10) {
    nodeServices(first: $first, sortKey: CREATED_AT) {
      nodes {
        id title path
        created { timestamp } changed { timestamp }
        ... on NodeService {
          body { processed summary }
          petTypes
          summary { processed }
          serviceCategory { ... on TermServiceCategory { id name } }
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_PROVIDER_TEASERS = gql`
  query GetProviderTeasers($first: Int = 10) {
    nodeProviders(first: $first, sortKey: CREATED_AT) {
      nodes {
        id title path
        created { timestamp } changed { timestamp }
        ... on NodeProvider {
          body { processed }
          credentials
          specialty
          education { processed }
          favoriteAnimals
          acceptingPatients
          providerRole { ... on TermProviderRole { id name } }
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_PET_RESOURCE_TEASERS = gql`
  query GetPetResourceTeasers($first: Int = 10) {
    nodePetResources(first: $first, sortKey: CREATED_AT) {
      nodes {
        id title path
        created { timestamp } changed { timestamp }
        ... on NodePetResource {
          body { processed summary }
          summary { processed }
          authorName
          publishedDate { timestamp }
          petType { ... on TermPetType { id name } }
          resourceCategory { ... on TermResourceCategory { id name } }
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed }
        heroImage { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        statsItems { ... on ParagraphStatItem { id number label } }
        featuredItemsTitle
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage { __typename id title body { processed } }
          ... on NodeService {
            __typename id title body { processed }
            petTypes
            summary { processed }
            serviceCategory { ... on TermServiceCategory { id name } }
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
          ... on NodeProvider {
            __typename id title body { processed }
            credentials specialty
            education { processed }
            favoriteAnimals acceptingPatients
            providerRole { ... on TermProviderRole { id name } }
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
          ... on NodePetResource {
            __typename id title body { processed }
            summary { processed }
            authorName
            publishedDate { timestamp }
            petType { ... on TermPetType { id name } }
            resourceCategory { ... on TermResourceCategory { id name } }
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
          ... on NodeHomepage {
            __typename id title heroTitle heroSubtitle heroDescription { processed }
            heroImage { url alt width height }
            statsItems { ... on ParagraphStatItem { id number label } }
            featuredItemsTitle
            ctaTitle ctaDescription { processed } ctaPrimary ctaSecondary
          }
        }
      }
    }
  }
`
