// components/ProjectCard.js
import { useState } from 'react'

export default function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const openModal = () => {
    setIsModalOpen(true)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'auto'
  }

  // Close modal when clicking outside or pressing escape
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  // Handle escape key
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48">
          {!imageError ? (
            <img
              src={project.image || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'}
              alt={project.name}
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 21V5m0 16h10" />
                </svg>
                <p className="text-sm">Property Image</p>
              </div>
            </div>
          )}
          
          {project.status && (
            <div className="absolute top-4 right-4">
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                project.status === 'Ready to Move' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {project.status}
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            <span className='text-blue-600'>ProjectName = </span>{project.name}
          </h3>
          
          <div className="flex items-center text-gray-600 mb-2">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span className='text-blue-600 text-xl'>Location = </span>
            <span className="text-sm">{project.location}</span>
          </div>
          
          <div className="flex items-center text-gray-600 mb-2">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 21V5m0 16h10" />
            </svg>
            <span className="text-sm">
              <span className='text-blue-600 font-medium'>Builder Name = </span>
              {project.builder}
            </span>
          </div>
          
          <div className="flex items-center text-gray-600 mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
            </svg>
            <span className="text-sm">
              <span className="text-blue-600 font-medium">Coordinates = </span>
              {project.coordinates ? 
                `(${project.coordinates.lat.toFixed(4)}, ${project.coordinates.lng.toFixed(4)})` : 
                'Not available'
              }
            </span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="text-xl font-bold text-blue-600">
                <span>Price Range = </span>{project.price}
              </p>
              {project.area && (
                <p className="text-sm text-gray-500">{project.area}</p>
              )}
            </div>
            
            <button 
              onClick={openModal}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View Details
            </button>
          </div>
          
          {project.amenities && project.amenities.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {project.amenities.slice(0, 3).map((amenity, index) => (
                  <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                    {amenity}
                  </span>
                ))}
                {project.amenities.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                    +{project.amenities.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
          onClick={handleModalClick}
          onKeyDown={handleKeyDown}
          tabIndex="-1"
        >
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-2xl font-bold text-gray-900">
                {project.name}
              </h2>
              <button 
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Image and Gallery */}
                <div className="space-y-4">
                  <div className="relative h-80 rounded-xl overflow-hidden">
                    {!imageError ? (
                      <img
                        src={project.image || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'}
                        alt={project.name}
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                        <div className="text-center text-white">
                          <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 21V5m0 16h10" />
                          </svg>
                          <p className="text-lg">Property Image</p>
                        </div>
                      </div>
                    )}
                    
                    {project.status && (
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                          project.status === 'Ready to Move' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">Property Details</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Location</p>
                          <p className="text-gray-600">{project.location}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 21V5m0 16h10" />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Builder</p>
                          <p className="text-gray-600">{project.builder}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Price Range</p>
                          <p className="text-2xl font-bold text-blue-600">{project.price}</p>
                          {project.area && (
                            <p className="text-sm text-gray-500">{project.area}</p>
                          )}
                        </div>
                      </div>
                      
                      {project.coordinates && (
                        <div className="flex items-start space-x-3">
                          <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                          </svg>
                          <div>
                            <p className="font-semibold text-gray-900">Coordinates</p>
                            <p className="text-gray-600">
                              {`${project.coordinates.lat.toFixed(4)}, ${project.coordinates.lng.toFixed(4)}`}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Amenities */}
                  {project.amenities && project.amenities.length > 0 && (
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Amenities</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.amenities.map((amenity, index) => (
                          <span key={index} className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <button className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200">
                      Contact Builder
                    </button>
                    <button className="flex-1 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200">
                      Schedule Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}