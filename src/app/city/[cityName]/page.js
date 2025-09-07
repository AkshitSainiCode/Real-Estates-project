// app/city/[cityName]/page.js
'use client'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useProjectStore } from '../../store/projectStore'
import ProjectCard from '../../components/ProjectCard'
import InteractiveMap from '../../components/InteractiveMap'
import LoadingSpinner from '../../components/LoadingSpinner'

export default function CityPage() {
  const { cityName } = useParams()
  const router = useRouter()
  const { projects, loading, error, fetchProjects, clearProjects } = useProjectStore()
  const [mapCenter, setMapCenter] = useState([28.6139, 77.2090]) // Default Delhi

  useEffect(() => {
    if (cityName) {
      clearProjects()
      fetchProjects(cityName)
      
      // Set map center based on city
      const cityCoordinates = {
        mumbai: [19.0760, 72.8777],
        delhi: [28.6139, 77.2090],
        bangalore: [12.9716, 77.5946],
        hyderabad: [17.3850, 78.4867],
        chennai: [13.0827, 80.2707],
        pune: [18.5204, 73.8567],
        kolkata: [22.5726, 88.3639],
        gurgaon: [28.4595, 77.0266],
        noida: [28.5355, 77.3910],
        ghaziabad: [28.6692, 77.4538]
      }
      
      const coords = cityCoordinates[cityName.toLowerCase()] || [28.6139, 77.2090]
      setMapCenter(coords)
    }
  }, [cityName, fetchProjects, clearProjects])

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Projects</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Go Back Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 capitalize">
                Real Estate Projects in {cityName}
              </h1>
              <p className="text-gray-600 mt-1">
                {projects.length} projects found
              </p>
            </div>
            <button
              onClick={() => router.push('/')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Search Other Cities
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {loading && projects.length === 0 && (
          <div className="flex items-center justify-center py-12">
            <LoadingSpinner />
          </div>
        )}

        {projects.length > 0 && (
          <>
            {/* Map Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Locations</h2>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <InteractiveMap projects={projects} center={mapCenter} />
              </div>
            </div>

            {/* Projects Grid */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Available Projects</h2>
                {loading && (
                  <div className="flex items-center text-blue-600">
                    <LoadingSpinner size="sm" />
                    <span className="ml-2 text-sm">Loading more projects...</span>
                  </div>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </>
        )}

        {!loading && projects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏢</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Projects Found</h2>
            <p className="text-gray-600 mb-4">
              No real estate projects were found for {cityName}. Try searching for another city.
            </p>
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Search Other Cities
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
