import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Custom404() {
  const router = useRouter()
  
  useEffect(() => {
    // GitHub Pages 404 handling
    const path = window.location.pathname
    const pathWithoutBase = path.replace('/jojigames.github.io', '')
    router.replace(pathWithoutBase)
  }, [router])
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6">Redirecting to the correct path...</p>
    </div>
  )
}