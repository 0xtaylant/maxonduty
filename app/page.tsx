import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-white w-screen h-screen flex justify-center items-center'>
      <div className="relative w-screen h-screen">  {/* Adjusted height and added padding */}
        <Image 
          style={{objectFit: "contain"}}
          src="/figshomescreen.jpg"
          alt="Description of Image"
          fill={true}
        />
      </div>
    </div>
  )
}
