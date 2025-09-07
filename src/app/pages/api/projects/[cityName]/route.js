import { NextResponse } from 'next/server'

// Mock data for testing
const mockProjects = {
  mumbai: [
    {
      id: 'mumbai_1',
      name: 'Lodha Park',
      location: 'Lower Parel',
      builder: 'Lodha Group',
      price: '₹2.5 Cr - ₹8.5 Cr',
      area: '1, 2, 3 BHK',
      status: 'Ready to Move',
      coordinates: { lat: 19.0144, lng: 72.8317 },
      amenities: ['Swimming Pool', 'Gym', 'Garden', 'Security'],
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3'
    },
    {
      id: 'mumbai_2',
      name: 'Oberoi Realty',
      location: 'Worli',
      builder: 'Oberoi Realty',
      price: '₹4.2 Cr - ₹12.5 Cr',
      area: '2, 3, 4 BHK',
      status: 'Under Construction',
      coordinates: { lat: 19.0176, lng: 72.8162 },
      amenities: ['Club House', 'Swimming Pool', 'Spa'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3'
    }
  ],
  ghaziabad: [
    {
      id: 'ghaziabad_1',
      name: 'Supertech Cape Town',
      location: 'Sector 74',
      builder: 'Supertech Limited',
      price: '₹85 Lac - ₹1.5 Cr',
      area: '2, 3 BHK',
      status: 'Ready to Move',
      coordinates: { lat: 28.6017, lng: 77.4085 },
      amenities: ['Swimming Pool', 'Gym', 'Garden', 'Security'],
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3'
    }
  ]
}

export async function GET(request, { params }) {
  console.log('API Route Hit:', params) // Debug log
  
  const { cityName } = params

  if (!cityName) {
    return NextResponse.json({ error: 'City name is required' }, { status: 400 })
  }

  try {
    // Get projects for the city (convert to lowercase for matching)
    const projects = mockProjects[cityName.toLowerCase()] || []
    
    console.log(`Found ${projects.length} projects for ${cityName}`) // Debug log

    return NextResponse.json({ 
      projects,
      message: `Found ${projects.length} projects in ${cityName}` 
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ 
      error: 'Failed to fetch projects',
      details: error.message 
    }, { status: 500 })
  }
}