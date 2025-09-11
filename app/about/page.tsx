import Image from "next/image"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import JourneySection from "@/components/journey-section"
import { BadgeCheck, Eye, Gem, GemIcon, ScanEye, Shield, Telescope, TreePalm } from "lucide-react"

const stats = [
  { number: "10,000+", label: "Happy Customers" },
  { number: "15,000+", label: "Cakes Delivered" },
  { number: "9", label: "Years Experience" },
  { number: "50", label: "Cake Varieties" },
]



const team = [
  {
    name: "Sarah Johnson",
    role: "Head Baker & Founder",
    description:
      "With over 15 years of experience, Sarah leads our team with passion and expertise in creating extraordinary cakes.",
    image: "/professional-female-baker-portrait.jpg",
  },
  {
    name: "Michael Chen",
    role: "Senior Pastry Chef",
    description: "Specializes in intricate decorations and custom designs, bringing artistic flair to every creation.",
    image: "/professional-male-pastry-chef-portrait.jpg",
  },
  {
    name: "Emma Wilson",
    role: "Creative Cake Designer",
    description: "Transforms ideas into edible art, specializing in themed cakes and innovative flavor combinations.",
    image: "/professional-female-cake-designer-portrait.jpg",
  },
]

const values = [
  {
    title: "Quality First",
    description:
      "We use only the finest ingredients and never compromise on quality. Every cake is made with premium materials and careful attention to detail.",
  },
  {
    title: "Customer Focused",
    description:
      "Your satisfaction is our priority. We listen to your needs and work closely with you to create the perfect cake for your special occasion.",
  },
  {
    title: "Fresh & Natural",
    description:
      "All our cakes are made fresh daily using natural ingredients. We believe in sustainable practices and supporting local suppliers.",
  },
  {
    title: "Creative Excellence",
    description:
      "Our team constantly innovates to bring you unique designs and flavors. We turn your dreams into delicious reality.",
  },
]

export default function page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="relative bg-secondary py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/warm-bakery-team-working-together-in-artisan-kitch.jpg"
            alt="Our bakery team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <nav className="text-sm text-white/80 mb-4">Home / About Us</nav>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg">Our Sweet Story</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Crafting moments of joy with premium cakes and pastries since 2015
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">


              <h2 className="text-3xl font-serif font-bold text-primary mb-6">About Cake Wala</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">Where passion meets perfection in every bite</p>
              <div className="space-y-4 text-foreground leading-relaxed ">

                <p>
                  At Cake Wala, we believe that every celebration deserves the perfect sweet touch. Founded in 2015,
                  we've been crafting premium cakes that bring joy to countless special moments across the UK. Our
                  passion for baking excellence drives us to create masterpieces that become the centerpiece of your
                  celebrations.
                </p>
                <p>
                  What started as a small family bakery has grown into one of the most trusted names in premium cake
                  crafting. We use only the finest ingredients, from Belgian chocolate to Madagascar vanilla, ensuring
                  every bite is a testament to quality and taste.
                </p>
                <p>
                  Our team of skilled bakers and decorators work tirelessly to bring your vision to life, whether it's a
                  whimsical birthday cake for your little one or an elegant wedding centerpiece. Every cake tells a
                  story, and we're honored to be part of your special moments.
                </p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="#D62828" className="absolute top-0 right-0 rotate-8 opacity-50 w-12 h-12">
                <path d="M12 2a4 4 0 0 0-4 4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1a4 4 0 0 0-4-4zm-7 9c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v2H5v-2zm0 4h14l-1.5 6h-11L5 15z" />
              </svg>


            </div>


            <div className="relative h-96 rounded-lg ">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-18 right-0 rotate-8 opacity-50 w-12 h-12" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#D62828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z" />
                <path d="M5 11h14v2H5z" />
                <path d="M6.5 15l1.5 6h8l1.5-6z" />
              </svg>
              <Image src="/bakery-interior-working.png" alt="Our bakery" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <JourneySection />

      {/* Mission & Vision */}
      <section className="bg-gray-100 relative py-20 px-12">


        <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-18 left-8 rotate-8 animate-bounce transition-all duration-300 opacity-70 w-12 h-12" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#D62828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z" />
          <path d="M5 11h14v2H5z" />
          <path d="M6.5 15l1.5 6h8l1.5-6z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#D62828" viewBox="0 0 24 24" className="absolute top-18 right-8 -rotate-8 animate-bounce transition-all duration-300 opacity-70 w-12 h-12">
          <path d="M12 2c.83 0 1.5.67 1.5 1.5S12.83 5 12 5s-1.5-.67-1.5-1.5S11.17 2 12 2zM6 7h12c1.1 0 2 .9 2 2v2H4V9c0-1.1.9-2 2-2zm-2 6h16v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7z" />
        </svg>

        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Foundation</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The core principles that guide everything we do at Cake Wala
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 text-center border hover:border-[#d40000]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">
                  <Telescope className="text-white" />
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create extraordinary moments through exceptional cakes that bring families and friends together, one
                celebration at a time.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center border hover:border-[#d40000]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">
                  <Eye className="text-white" />
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most beloved bakery brand, known for innovation, quality, and turning every occasion into a
                sweet memory.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center border hover:border-[#d40000]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">
                  <Shield className="text-white" />
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Our Promise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every cake is made with love, using the finest ingredients, and delivered with a smile that matches the
                joy it brings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-12 relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none" className="absolute top-8 rotate-6 left-4 w-16 h-16">

          <ellipse cx="100" cy="140" rx="70" ry="20" fill="#D62828" stroke="#D62828" strokeWidth="4" />
          <rect x="30" y="60" width="140" height="80" fill="#D62828" stroke="#D62828" strokeWidth="4" />
          <ellipse cx="100" cy="60" rx="70" ry="20" fill="#fff" stroke="#D62828" strokeWidth="4" />

          <circle cx="60" cy="50" r="8" fill="#9B111E" stroke="white" strokeWidth="2" />
          <circle cx="100" cy="40" r="8" fill="#9B111E" stroke="white" strokeWidth="2" />
          <circle cx="140" cy="50" r="8" fill="#9B111E" stroke="white" strokeWidth="2" />
        </svg>


        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 5 200" fill="none" className="absolute top-4 -right-[0px] pl-2">
          <path
            d="M100 8 A95 95 0 0 0 100 195"
            stroke="#D62828"
            strokeWidth="10"
            fill="none"
          />
        </svg>




        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Meet Our Master Bakers</h2>
            <p className="text-muted-foreground">The talented hands behind every delicious creation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-12 relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none" className="absolute top-0 -left-25">
          <path
            d="M50 5 A95 95 0 0 1 100 195"
            stroke="#D62828"
            stroke-width="10"
            fill="none"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none" className="absolute top-8 right-8 w-18  -rotate-6 h-18">

          <path d="M40 100 A60 40 0 0 1 160 100" fill="none" stroke="#D62828" stroke-width="4" />

          <line x1="30" y1="100" x2="170" y2="100" stroke="#D62828" stroke-width="4" />

          <rect x="90" y="100" width="20" height="40" fill="#D62828" />
          <ellipse cx="100" cy="140" rx="40" ry="8" fill="#D62828" />
        </svg>

        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that drive us to create exceptional experiences for every customer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 border hover:border-[#d40000]/50 transition-all duration-300 hover:translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0  transition-colors">
                    <span className="text-xl">
                      {index === 0 && <BadgeCheck className="text-white"/>}
                      {index === 1 && <ScanEye className="text-white"/>}
                      {index === 2 && <TreePalm className="text-white"/>}
                      {index === 3 && <GemIcon className="text-white"/>}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
