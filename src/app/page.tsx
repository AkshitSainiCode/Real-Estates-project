// app/page.js
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [cityName, setCityName] = useState('')
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    if (cityName.trim()) {
      router.push(`/city/${cityName.toLowerCase()}`)
    }
  }

  const popularCitiesData = [
    { 
      name: 'Ghaziabad',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=250&fit=crop&crop=center',
      alt: 'Ghaziabad cityscape',
      // projects: '200+'
    },
    { 
      name: 'Noida',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=250&fit=crop&crop=center',
      alt: 'Noida modern buildings',
      // projects: '350+'
    },
    { 
      name: 'Delhi',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=250&fit=crop&crop=center',
      alt: 'Delhi India Gate',
      // projects: '480+'
    },
    { 
      name: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop&crop=center',
      alt: 'Bangalore IT city skyline',
      // projects: '420+'
    },
    { 
      name: 'Greater Noida',
      image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=400&h=250&fit=crop&crop=center',
      alt: 'Greater Noida expressway',
      // projects: '280+'
    },
    { 
      name: 'Pune',
      image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=400&h=250&fit=crop&crop=center',
      alt: 'Pune cityscape',
      // projects: '320+'
    },
    { 
      name: 'Hyderabad',
      image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQdvsEoezftVEY2wXA7K9c0OQ1YxgwMZXYeD9GSo6QuwyQX1wiUZes-axsjCF3b7lnCdkCykyVa4XI7FoxDkLVRezKfPyfXSSS9xT0Q3A',
      alt: 'Hyderabad skyline with Charminar',
      // projects: '450+'
    },
    { 
      name: 'Gurugram',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=250&fit=crop&crop=center',
      alt: 'Gurugram modern skyline',
      // projects: '380+'
    },
    {
      name: 'Chandigarh',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Palace_of_Assembly_Chandigarh_2006.jpg',
      alt: 'Chandigarh planned city',
      // projects: '150+'
    },
    { 
      name: 'Chennai',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=250&fit=crop&crop=center',
      alt: 'Chennai Marina Beach and skyline',
      // projects: '340+'
    },
    { 
      name: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=400&h=250&fit=crop&crop=center',
      alt: 'Mumbai Marine Drive',
      // projects: '520+'
    },
    { 
      name: 'Kolkata',
      image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=400&h=250&fit=crop&crop=center',
      alt: 'Kolkata Victoria Memorial',
      // projects: '250+'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Premium Real Estate Projects
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore real-time property listings with interactive maps and
            <br />
            comprehensive project details across major Indian cities
          </p>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-16">
            <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="flex-1 relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                  placeholder="Enter city name (e.g., Ghaziabad, Noida, Delhi, Bangalore)"
                  className="w-full pl-12 pr-4 py-4 text-lg border-none focus:outline-none text-gray-700 placeholder-gray-400 rounded-l-lg sm:rounded-r-none rounded-r-lg"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-r-lg sm:rounded-l-none rounded-l-lg hover:bg-blue-700 transition duration-200"
              >
                Search Projects
              </button>
            </div>
          </form>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Cities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {popularCitiesData.map((city) => (
                <div
                  key={city.name}
                  onClick={() => router.push(`/city/${city.name.toLowerCase()}`)}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 cursor-pointer hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1"
                >
                  {/* City Image */}
                  <div className="relative h-40 w-full overflow-hidden">
                    <img
                      src={city.image}
                      alt={city.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* City Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                          {city.name}
                        </h3>
                        {/* <p className="text-gray-500 text-sm">
                          {city.projects} active projects
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Show More Cities Button */}
          {/* <div className="text-center mt-12">
            <button 
              onClick={() => {
                // You can implement show more functionality here
                console.log('Show more cities clicked')
              }}
              className="inline-flex items-center px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Explore All Cities
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}