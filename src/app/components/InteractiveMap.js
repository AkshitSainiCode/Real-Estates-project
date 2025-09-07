// components/InteractiveMap.js
'use client'
import { useEffect, useRef } from 'react'

export default function InteractiveMap({ projects, center }) {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && !mapInstanceRef.current) {
      // Dynamically import Leaflet to avoid SSR issues
      import('leaflet').then((L) => {
        // Fix for default markers
        delete L.Icon.Default.prototype._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        })

        // Initialize map
        mapInstanceRef.current = L.map(mapRef.current).setView(center, 11)

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(mapInstanceRef.current)
      })
    }
  }, [center])

  useEffect(() => {
    if (mapInstanceRef.current && projects.length > 0) {
      import('leaflet').then((L) => {
        // Clear existing markers
        mapInstanceRef.current.eachLayer((layer) => {
          if (layer instanceof L.Marker) {
            mapInstanceRef.current.removeLayer(layer)
          }
        })

        // Add markers for each project
        projects.forEach((project) => {
          if (project.coordinates) {
            const marker = L.marker([project.coordinates.lat, project.coordinates.lng])
              .addTo(mapInstanceRef.current)
              .bindPopup(`
                <div class="p-2">
                  <h3 class="font-semibold text-lg mb-1">${project.name}</h3>
                  <p class="text-gray-600 text-sm mb-1">${project.location}</p>
                  <p class="text-gray-600 text-sm mb-2">${project.builder}</p>
                  <p class="font-bold text-blue-600">${project.price}</p>
                </div>
              `)

            // Add animation effect when marker is added
            setTimeout(() => {
              marker.openPopup()
              setTimeout(() => marker.closePopup(), 2000)
            }, 100)
          }
        })

        // Fit map to show all markers
        if (projects.length > 0) {
          const group = new L.featureGroup(
            projects
              .filter(p => p.coordinates)
              .map(p => L.marker([p.coordinates.lat, p.coordinates.lng]))
          )
          
          if (group.getLayers().length > 0) {
            mapInstanceRef.current.fitBounds(group.getBounds().pad(0.1))
          }
        }
      })
    }
  }, [projects])

  return (
    <div>
      <link 
        rel="stylesheet" 
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" 
      />
      <div ref={mapRef} className="leaflet-container" />
    </div>
  )
}
