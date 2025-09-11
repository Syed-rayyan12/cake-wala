// "use client"
// import React, { useEffect, useState } from "react"

// const timeline = [
//   {
//     year: "2015",
//     icon: "🏠",
//     title: "Humble Beginnings",
//   },
//   {
//     year: "2017",
//     icon: "🎯",
//     title: "First Bakery Opens",
//   },
//   {
//     year: "2019",
//     icon: "🏆",
//     title: "Award Recognition",
//   },
//   {
//     year: "2024",
//     icon: "🚀",
//     title: "Digital Transformation",
//   },
// ]

// const JourneySection = () => {
//   const [angle, setAngle] = useState(0)

//   // Auto rotate
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAngle((prev) => prev + 1) // speed of rotation
//     }, 50)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className="py-16 px-12">
//       <div className="container mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-serif font-bold text-primary mb-6">
//             Our Sweet Journey
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             From humble beginnings to becoming London's favorite bakery - discover the milestones that shaped our story
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
//               <h3 className="text-2xl font-serif font-bold text-primary mb-4">
//                 A Story of Passion
//               </h3>
//               <p className="text-muted-foreground leading-relaxed mb-6">
//                 Every great bakery has a story, and ours began with a simple dream: to create cakes that bring joy to
//                 every celebration.
//               </p>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="text-center p-4 bg-white rounded-lg shadow-sm">
//                   <div className="text-2xl font-bold text-primary">2015</div>
//                   <div className="text-sm text-muted-foreground">Founded</div>
//                 </div>
//                 <div className="text-center p-4 bg-white rounded-lg shadow-sm">
//                   <div className="text-2xl font-bold text-primary">10K+</div>
//                   <div className="text-sm text-muted-foreground">Happy Customers</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Semi-Circle Animation */}
//           <div className="relative flex justify-center items-center w-[400px] h-[400px]">
//             <div
//               className="absolute w-full h-full"
//               style={{ transform: `rotate(${angle}deg)` }}
//             >
//               {timeline.map((item, i) => {
//                 const radius = 150
//                 const total = timeline.length
//                 const step = 180 / (total - 1) // distribute across semi-circle
//                 const theta = (step * i - 90) * (Math.PI / 180)

//                 const x = radius * Math.cos(theta)
//                 const y = radius * Math.sin(theta)

//                 return (
//                   <div
//                     key={i}
//                     className="absolute w-32 h-40 bg-primary text-white rounded-xl shadow-lg flex flex-col justify-center items-center p-3 text-center"
//                     style={{
//                       transform: `translate(${200 + x}px, ${200 + y}px) rotate(${-angle}deg)`,
//                     }}
//                   >
//                     <div className="text-3xl mb-2">{item.icon}</div>
//                     <div className="text-lg font-bold">{item.year}</div>
//                     <h3 className="font-serif font-bold text-sm">{item.title}</h3>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default JourneySection
"use client"
import { Award, Beaker, Croissant, Home, Scale3D } from "lucide-react"
import React from "react"

const timeline = [
  { year: "2015", icon: <Croissant/>, title: "Humble Beginnings" },
  { year: "2017", icon: <Beaker/>, title: "First Bakery Opens" },
  { year: "2019", icon: <Award/>, title: "Award Recognition" },
  { year: "2024", icon: <Scale3D/>, title: "Digital Transformation" },
]

export default function JourneySection() {
  return (
    <section className="relative py-16 px-12 overflow-hidden">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">
            Our Sweet Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From humble beginnings to becoming London's favorite bakery - discover
            the milestones that shaped our story
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                A Story of Passion
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every great bakery has a story, and ours began with a simple dream:
                to create cakes that bring joy to every celebration.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary">2015</div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">
                    Happy Customers
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE 3D MARQUEE */}
          <div className="relative flex justify-center items-center">
            <div className="carousel">
              {timeline.map((item, i) => (
                <div key={i} className="carousel__item">
                  <div className="flex flex-col items-center justify-center w-full h-full px-3 text-center">
                    <div className="text-3xl mb-1 text-primary">{item.icon}</div>
                    <div className="text-lg font-bold">{item.year}</div>
                    <div className="font-serif text-sm">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .carousel {
          position: relative;
          width: 200px;
          height: 250px;
          transform-style: preserve-3d;
          animation: rotate 12s linear infinite;
        }

        .carousel__item {
          position: absolute;
          width: 160px;
          height: 200px;
          top: 0;
          left: 20px;
          background: #ffffff; /* White background */
          color: #333;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* Subtle shadow */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Place each card in 3D space */
        .carousel__item:nth-child(1) {
          transform: rotateY(0deg) translateZ(250px);
        }
        .carousel__item:nth-child(2) {
          transform: rotateY(90deg) translateZ(250px);
        }
        .carousel__item:nth-child(3) {
          transform: rotateY(180deg) translateZ(250px);
        }
        .carousel__item:nth-child(4) {
          transform: rotateY(270deg) translateZ(250px);
        }

        @keyframes rotate {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </section>
  )
}
