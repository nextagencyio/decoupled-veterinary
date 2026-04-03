/**
 * Drupal client singleton using decoupled-client.
 *
 * Usage:
 *   import { getClient } from '@/lib/drupal-client'
 *   const client = getClient()
 *   const page = await client.getEntryByPath('/about')
 */

import { createClient } from 'decoupled-client'
import type { TypedClient } from '@/schema/client'
import { isDemoMode, handleMockQuery } from './demo-mode'
import { GET_NODE_BY_PATH, GET_HOMEPAGE_DATA } from './queries'

let _client: TypedClient | null = null
let _mockClient: TypedClient | null = null

function createMockTypedClient(): TypedClient {
  if (_mockClient) return _mockClient

  _mockClient = {
    async getEntries() { return [] },
    async getEntry() { return null },
    async getEntryByPath(path) {
      // For homepage, return the first homepage node from mock data
      if (!path || path === '/') {
        const result = handleMockQuery(JSON.stringify({
          query: 'GetHomepageData nodeHomepages',
          variables: {}
        }))
        return result?.data?.nodeHomepages?.nodes?.[0] || null
      }
      // For other paths, try route lookup
      const result = handleMockQuery(JSON.stringify({
        query: 'route',
        variables: { path }
      }))
      return result?.data?.route?.entity || null
    },
    async raw(query, variables) {
      const result = handleMockQuery(JSON.stringify({ query: typeof query === 'string' ? query : '', variables })); return result?.data ?? result
    },
  } as TypedClient

  return _mockClient
}

export function getClient(): TypedClient {
  if (isDemoMode()) {
    return createMockTypedClient()
  }

  if (_client) return _client

  const baseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
  const clientId = process.env.DRUPAL_CLIENT_ID
  const clientSecret = process.env.DRUPAL_CLIENT_SECRET

  if (!baseUrl || !clientId || !clientSecret) {
    throw new Error('Missing Drupal credentials. Set NEXT_PUBLIC_DRUPAL_BASE_URL, DRUPAL_CLIENT_ID, DRUPAL_CLIENT_SECRET.')
  }

  const base = createClient({
    baseUrl,
    clientId,
    clientSecret,
    fetch: ((input: RequestInfo | URL, init?: RequestInit) =>
      globalThis.fetch(input, {
        ...init,
        next: { tags: ['drupal'] },
      } as RequestInit)) as typeof globalThis.fetch,
  })

  _client = {
    async getEntries() { return [] },
    async getEntry() { return null },
    async getEntryByPath(path) {
      if (!path || path === '/') {
        // For homepage, use the dedicated homepage query
        const data = await base.query(GET_HOMEPAGE_DATA)
        return data?.nodeHomepages?.nodes?.[0] || null
      }
      // For other paths, use the route-based query with all content type fragments
      const data = await base.query(GET_NODE_BY_PATH, { path })
      return data?.route?.entity || null
    },
    async raw(query, variables) { return base.query(query, variables) },
  } as TypedClient

  return _client
}
