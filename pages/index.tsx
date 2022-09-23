import type { NextPage } from 'next'
import Layout from '../components/Layout'
import PageProfile from '../components/PageUserProfile'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [domain, setDomain] = useState<string>('')
  useEffect(() => {
    const hostname = window.location.hostname
    if (hostname === 'nf.hustle') {
      setDomain('')
    } else if (hostname.endsWith('.nf.hustle')) {
      setDomain(hostname.replace('.hustle', ''))
    } else {
      setDomain('nf.hustle')
    }
  }, [])

  return (
    <Layout>
      <PageProfile domain={domain} />
    </Layout>
  )
}

export default Home
