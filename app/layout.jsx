import './globals.css'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"



export const metadata = {
  title: 'Little Lemon',
  description: 'Traditional Greek Cousine with Modern Twist',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-hl1 max-w-5xl mx-auto h-[85vh]' >
      <Navbar/>
      

        
        
        
        
        
        
        {children}
      </body>
      <Footer />

    </html>
  )
}
