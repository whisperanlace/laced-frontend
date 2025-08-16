import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ImageGrid = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    try {
      const res = await axios.get('/api/images')
      setImages(res.data)
    } catch (err) {
      console.error('Failed to fetch images', err)
    }
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {images.map((img, idx) => (
        <div key={idx} className="rounded overflow-hidden shadow border border-gold/10">
          <img src={img.url} alt={`Generated ${idx}`} className="w-full h-auto object-cover" />
        </div>
      ))}
    </div>
  )
}

export default ImageGrid
