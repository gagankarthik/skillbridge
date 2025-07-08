"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AuthUser } from 'aws-amplify/auth'

const Signup = ({user}: {user: AuthUser}) => {
  const router = useRouter()
  useEffect(() => {
    if (user) {
      router.push(`/dashboard`)
    }
  }, [user, router])
  return  null
}

export default Signup