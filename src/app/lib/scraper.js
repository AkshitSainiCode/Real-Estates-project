// lib/scraper.js
// Mock scraper function - replace with actual scraping logic
export async function getProjectsForCity(cityName) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Mock data based on city - replace with actual scraping
  const mockProjects = {
    mumbai: [
      {
        id: '1',
        name: 'Lodha Park',
        location: 'Lower Parel',
        builder: 'Lodha Group',
        price: '₹2.5 Cr - ₹8.5 Cr',
        area: '1, 2, 3 BHK',
        status: 'Ready to Move',
        amenities: ['Swimming Pool', 'Gym', 'Garden', 'Security', 'Parking'],
        image: 'https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixlib=rb-4.0.3'
      }
    ],
    bangalore: [
      {
        id: '6',
        name: 'Prestige Lakeside Habitat',
        location: 'Whitefield',
        builder: 'Prestige Group',
        price: '₹1.5 Cr - ₹4.2 Cr',
        area: '2, 3, 4 BHK',
        status: 'Ready to Move',
        amenities: ['Lake View', 'Swimming Pool', 'Gym', 'Club House'],
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3'
      },
      {
        id: '7',
        name: 'Brigade Gateway',
        location: 'Rajaji Nagar',
        builder: 'Brigade Group',
        price: '₹2.1 Cr - ₹6.8 Cr',
        area: '2, 3, 4 BHK',
        status: 'Under Construction',
        amenities: ['Mall', 'Office Space', 'Hotel', 'Residential'],
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3'
      }
    ],
    hyderabad: [
      {
        id: '8',
        name: 'My Home Avatar',
        location: 'Kokapet',
        builder: 'My Home Constructions',
        price: '₹1.8 Cr - ₹5.2 Cr',
        area: '2, 3, 4 BHK',
        status: 'Ready to Move',
        amenities: ['Swimming Pool', 'Gym', 'Garden', 'Security'],
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3'
      },
      {
        id: '9',
        name: 'Aparna Sarovar Zenith',
        location: 'Nallagandla',
        builder: 'Aparna Constructions',
        price: '₹1.2 Cr - ₹3.8 Cr',
        area: '2, 3 BHK',
        status: 'Under Construction',
        amenities: ['Club House', 'Swimming Pool', 'Gym', 'Garden'],
        image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3'
      }
    ],
    ghaziabad: [
      {
        id: '10',
        name: 'Supertech Cape Town',
        location: 'Sector 74',
        builder: 'Supertech Limited',
        price: '₹85 Lac - ₹1.5 Cr',
        area: '2, 3 BHK',
        status: 'Ready to Move',
        amenities: ['Swimming Pool', 'Gym', 'Garden', 'Security'],
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3'
      },
      {
        id: '11',
        name: 'ATS One Hamlet',
        location: 'Sector 104',
        builder: 'ATS Infrastructure',
        price: '₹1.2 Cr - ₹2.8 Cr',
        area: '2, 3, 4 BHK',
        status: 'Under Construction',
        amenities: ['Club House', 'Swimming Pool', 'Spa', 'Garden'],
        image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3'
      },
      {
        id: '12',
        name: 'Mahagun Moderne',
        location: 'Sector 78',
        builder: 'Mahagun Group',
        price: '₹75 Lac - ₹1.8 Cr',
        area: '2, 3 BHK',
        status: 'Ready to Move',
        amenities: ['Swimming Pool', 'Gym', 'Park', 'Security', 'Shopping'],
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3'
      }
    ]
  }
  
  const cityProjects = mockProjects[cityName.toLowerCase()] || []
  
  // Return projects with unique IDs
  return cityProjects.map(project => ({
    ...project,
    id: `${cityName.toLowerCase()}_${project.id}`
  }))
}
