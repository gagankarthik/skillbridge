"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AuthUser } from 'aws-amplify/auth'
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

const Signup = ({user}: {user?: AuthUser}) => {
  const router = useRouter()
  useEffect(() => {
    if (user) {
      router.push(`/dashboard`)
    }
  })
    return null
}

export default withAuthenticator(Signup)