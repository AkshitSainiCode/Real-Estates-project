// components/Header.js - Fixed Version
'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [city, setCity] = useState('Ghaziabad')
  const [activeMenu, setActiveMenu] = useState(null)
  const router = useRouter()

  const cities = [
    'Ghaziabad','Mumbai','Delhi','Bangalore',
    'Hyderabad','Chennai','Pune','Kolkata',
    'Gurgaon','Noida'
  ]

  const handleCityChange = (selectedCity) => {
    setCity(selectedCity)
    router.push(`/city/${selectedCity.toLowerCase()}`)
  }

  const handleSearch = () => {
    router.push(`/city/${city.toLowerCase()}`)
  }

  // Dropdown data (from your screenshots)
  const dropdowns = {
    buy: [
      {
        heading: 'Popular Choices',
        links: ['Ready to Move','Owner Properties','Budget Homes','Premium Homes','New Projects']
      },
      {
        heading: 'Property Types',
        links: [
          'Flats in Ghaziabad','House for sale in Ghaziabad','Villa in Ghaziabad',
          'Plot in Ghaziabad','Office Space in Ghaziabad','Commercial Space in Ghaziabad'
        ]
      },
      {
        heading: 'Budget',
        links: ['Under ₹ 50 Lac','₹ 50 Lac - ₹ 1 Cr','₹ 1 Cr - ₹ 1.5 Cr','Above ₹ 1.5 Cr']
      },
      {
        heading: 'Explore',
        links: ['Localities in Ghaziabad','Projects in Ghaziabad','Investment Hotspot','Find an Agent','Home Interiors in Ghaziabad']
      },
      {
        heading: 'Buying Tools',
        links: ['PropWorth','Rates & Trends','Buy vs Rent','Tips and Guides']
      }
    ],
    rent: [
      {
        heading: 'Popular Choices',
        links: ['Owner Properties','Verified Properties','Furnished Homes','Bachelor Friendly Homes','Immediately Available']
      },
      {
        heading: 'Property Types',
        links: [
          'Flat for rent in Ghaziabad','House for rent in Ghaziabad','Villa for rent in Ghaziabad',
          'PG in Ghaziabad','Office Space in Ghaziabad','Commercial Space in Ghaziabad',
          'Coliving Space in Ghaziabad','Student Hostels in Ghaziabad','Luxury PG in Ghaziabad'
        ]
      },
      {
        heading: 'Budget',
        links: ['Under ₹ 10,000','₹ 10,000 - ₹ 15,000','₹ 15,000 - ₹ 25,000','Above ₹ 25,000']
      },
      {
        heading: 'Explore',
        links: ['Localities','Buy Vs Rent','Find an Agent','Share Requirement','Property Services','Rent Agreement']
      }
    ],
    sell: [
      {
        heading: 'Apply Now',
        links: ['Home Loans','Balance Transfer','Loan Against Property']
      },
      {
        heading: 'Partners',
        links: ['SBI Home Loan','HDFC Ltd Home Loan','Axis Home Loan','Kotak Home Loan','LIC HF Home Loan']
      },
      {
        heading: 'Explore',
        links: [
          'Home Loan EMI Calculator','Home Loan Eligibility','Get Home Loan Offers',
          'Check Credit Score','Home Loan Prepayment','Home Loan Interest Rate',
          'Home Loan Balance Transfer','Home Loan Documentation'
        ]
      },
      {
        heading: 'EMI Calculators',
        links: [
          'SBI Home Loan EMI Calculator','HDFC Home Loan EMI Calculator',
          'Axis Bank Home Loan EMI Calculator','Bajaj Home Loan EMI Calculator',
          'Kotak Home Loan EMI Calculator','L&T Home Loan EMI Calculator'
        ]
      },
      {
        heading: 'Interest Rates',
        links: [
          'SBI Home Loan Interest Rate','HDFC Home Loan Interest Rate',
          'Axis Bank Home Loan Interest Rate','Bajaj Home Loan Interest Rate',
          'Kotak Bank Interest Rate','L&T Home Loan Interest Rate'
        ]
      }
    ],
    homeLoans: [
      {
        heading: 'Apply Now',
        links: ['Home Loans','Balance Transfer','Loan Against Property']
      },
      {
        heading: 'Partners',
        links: ['SBI Home Loan','HDFC Ltd Home Loan','Axis Home Loan','Kotak Home Loan','LIC HF Home Loan']
      },
      {
        heading: 'Explore',
        links: [
          'Home Loan EMI Calculator','Home Loan Eligibility','Get Home Loan Offers',
          'Check Credit Score','Home Loan Prepayment','Home Loan Interest Rate',
          'Home Loan Balance Transfer','Home Loan Documentation'
        ]
      },
      {
        heading: 'EMI Calculators',
        links: [
          'SBI Home Loan EMI Calculator','HDFC Home Loan EMI Calculator',
          'Axis Bank Home Loan EMI Calculator','Bajaj Home Loan EMI Calculator',
          'Kotak Home Loan EMI Calculator','L&T Home Loan EMI Calculator'
        ]
      },
      {
        heading: 'Interest Rates',
        links: [
          'SBI Home Loan Interest Rate','HDFC Home Loan Interest Rate',
          'Axis Bank Home Loan Interest Rate','Bajaj Home Loan Interest Rate',
          'Kotak Bank Interest Rate','L&T Home Loan Interest Rate'
        ]
      }
    ]
  }

  return (
    <header className="bg-blue-600 text-white shadow-lg relative">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-white text-blue-600 px-2 py-1 rounded font-bold text-xl">Real</div>
            <span className="text-xl font-bold">Estate</span>
          </Link>

          {/* City Selector */}
          <div className="relative">
            <select
              value={city}
              onChange={(e) => handleCityChange(e.target.value)}
              className="bg-white text-gray-800 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 min-w-[140px]"
            >
              {cities.map((cityOption) => (
                <option key={cityOption} value={cityOption}>
                  {cityOption}
                </option>
              ))}
            </select>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-white hover:text-gray-200">Login</Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-blue-500">
          <div className="flex items-center justify-between py-3">
            <nav className="hidden md:flex items-center space-x-8">
              {['buy','rent','sell','homeLoans'].map((menu) => (
                <div
                  key={menu}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(menu)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="text-white hover:text-gray-200 font-medium capitalize">
                    {menu === 'homeLoans' ? 'Home Loans' : menu}
                  </button>
                  {activeMenu === menu && (
                    <div className="absolute left-0 mt-2 w-[1000px] bg-white text-black p-6 shadow-lg grid grid-cols-5 gap-6 z-50">
                      {dropdowns[menu].map((col, idx) => (
                        <div key={idx}>
                          <h3 className="font-semibold mb-3 border-b border-gray-200 pb-1">{col.heading}</h3>
                          <ul className="space-y-2">
                            {col.links.map((link, i) => (
                              <li key={i}>
                                <Link href="#" className="hover:text-blue-600 text-sm">{link}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <button
              onClick={handleSearch}
              className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100"
            >
              Search Projects in {city}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
