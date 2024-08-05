import { Button } from '@/components/ui/button'
// import { ipcRenderer } from 'electron' // dynamic import electron will cause errors in develop profile

export default function HomeView() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Button
        onClick={() => {
          // ipcRenderer.send('click_message', new Date().toISOString())
        }}
      >
        Click me
      </Button>
    </div>
  )
}
