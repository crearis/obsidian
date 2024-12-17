import type { Endpoints } from '@crearis/odoo-sdk-api-client'
import { defineEventHandler, getCookie } from 'h3'
import type { Partner } from '../../graphql'
import { query } from '#pruvious/server'

export default defineEventHandler(async (event) => {
  // const api: Endpoints = event.context.apolloClient.api
  // const cookie = getCookie(event, 'session_id')

  const cookie = getCookie(event, 'odoo-user')
  // const response = await api.query<any, { partner: Partner }>({ queryName: 'LoadUserQuery' } as any, null as any)

  if (cookie) {
    //extract the user from the cookie
    const partner = JSON.parse(cookie) as Partner

    if (partner.email) {
      const user = await query('users').deselect({ password: true }).where('email', partner.email).populate().first()

      event.context.auth = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user }
    } else {
      event.context.auth = { isLoggedIn: false, user: null }
    }
  } else {
    event.context.auth = { isLoggedIn: false, user: null }
  }
})