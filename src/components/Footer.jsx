import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} NayaNotification. All rights reserved.</p>
          
          
        </div>
      </footer>
    </div>
  )
}
