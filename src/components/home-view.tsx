import { Button } from '@/components/ui/button'
import { isDevelopment } from '@/constants'
import React from 'react'

export default function HomeView() {
  const handleDynamicImportElectronInEjs = async () => {
    if (!isDevelopment) {
      // Use electron APIs here
      const { ipcRenderer } = require('electron')

      ipcRenderer.on('', (_event: any, value: any) => {
        console.log(value)
      })

      ipcRenderer.send('', {})
    }
  }

  React.useEffect(() => {
    handleDynamicImportElectronInEjs()
    return () => {}
  }, [])

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Button onClick={() => {}}>Click me</Button>
    </div>
  )
}
