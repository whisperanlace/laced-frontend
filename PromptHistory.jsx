import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PromptHistory = () => {
  const [history, setHistory] = useState([])

  useEffect(() => {
    fetchHistory()
  }, [])

  const fetchHistory = async () => {
    try {
      const res = await axios.get('/api/history')
      setHistory(res.data)
    } catch (err) {
      console.error('Failed to load prompt history', err)
    }
  }

  return (
    <aside className="hidden lg:block w-64 bg-white border-l border-gold/30 px-4 py-4 overflow-y-auto">
      <h2 className="text-lg font-playfair mb-3">Prompt History</h2>
      <ul className="space-y-2 text-sm">
        {history.map((item, idx) => (
          <li key={idx} className="border-b border-gold/10 pb-2">{item.prompt}</li>
        ))}
      </ul>
    </aside>
  )
}

export default PromptHistory
