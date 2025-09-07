// lib/geocoding.js
const POSITIONSTACK_API_KEY = process.env.POSITIONSTACK_API_KEY || 'demo_key'

export async function geocodeLocation(location) {
  try {
    // Mock geocoding for demo - replace with actual PositionStack API call
    const mockCoordinates = {
      'Lower Parel, mumbai': { lat: 19.0144, lng: 72.8317 },
      'Worli, mumbai': { lat: 19.0176, lng: 72.8162 },
      'Vikhroli, mumbai': { lat: 19.1056, lng: 72.9258 },
      'Moti Nagar, delhi': { lat: 28.6631, lng: 77.1462 },
      'Sector 88A, delhi': { lat: 28.4089, lng: 77.0507 },
      'Whitefield, bangalore': { lat: 12.9698, lng: 77.7500 },
      'Rajaji Nagar, bangalore': { lat: 12.9916, lng: 77.5712 },
      'Kokapet, hyderabad': { lat: 17.4065, lng: 78.3430 },
      'Nallagandla, hyderabad': { lat: 17.4441, lng: 78.3267 },
      'Sector 74, ghaziabad': { lat: 28.6017, lng: 77.4085 },
      'Sector 104, ghaziabad': { lat: 28.4744, lng: 77.4943 },
      'Sector 78, ghaziabad': { lat: 28.6195, lng: 77.4519 }
    }
    
    const coordinates = mockCoordinates[location.toLowerCase()]
    
    if (coordinates) {
      return coordinates
    }
    
    // Fallback to random coordinates within city bounds
    const cityBounds = {
      mumbai: { lat: 19.0760, lng: 72.8777 },
      delhi: { lat: 28.6139, lng: 77.2090 },
      bangalore: { lat: 12.9716, lng: 77.5946 },
      hyderabad: { lat: 17.3850, lng: 78.4867 },
      ghaziabad: { lat: 28.6692, lng: 77.4538 }
    }
    
    const cityName = location.split(',')[1]?.trim().toLowerCase()
    const baseCords = cityBounds[cityName] || { lat: 28.6139, lng: 77.2090 }
    
    return {
      lat: baseCords.lat + (Math.random() - 0.5) * 0.1,
      lng: baseCords.lng + (Math.random() - 0.5) * 0.1
    }
    
    /* 
    // Uncomment for actual PositionStack API integration
    const response = await fetch(`http://api.positionstack.com/v1/forward?access_key=${POSITIONSTACK_API_KEY}&query=${encodeURIComponent(location)}`)
    const data = await response.json()
    
    if (data.data && data.data.length > 0) {
      return {
        lat: data.data[0].latitude,
        lng: data.data[0].longitude
      }
    }
    */
    
  } catch (error) {
    console.error('Geocoding error:', error)
    // Return default coordinates for Delhi
    return { lat: 28.6139, lng: 77.2090 }
  }
}
