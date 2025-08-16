import React from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import PromptInput from './components/PromptInput'
import ImageGrid from './components/ImageGrid'
import PromptHistory from './components/PromptHistory'

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <div className="flex flex-row h-full">
          <div className="flex-1 p-4 overflow-y-auto">
            <PromptInput />
            <ImageGrid />
          </div>
          <PromptHistory />
        </div>
      </div>
    </div>
  )
}

export default App
