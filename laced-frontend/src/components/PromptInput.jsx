import React, { useState } from 'react'
import axios from 'axios'

const PromptInput = () => {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!prompt) return

    setLoading(true)

    try {
      await axios.post('/api/generate', { prompt })
      setPrompt('')
    } catch (error) {
      console.error('Generation failed:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Whisper your prompt here..."
        className="w-full p-3 border border-gold/40 rounded-lg resize-none bg-white text-black"
        rows={4}
      />
      <button
        type="submit"
        disabled={loading}
        className="mt-2 bg-wine hover:bg-gold transition text-white font-semibold py-2 px-6 rounded-lg"
      >
        {loading ? 'Whispering...' : 'Generate'}
      </button>
    </form>
  )
}

export default PromptInput
