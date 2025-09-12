"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Footer from "@/components/footer"

const faqs = [
  {
    question: "How far in advance should I order?",
    answer:
      "For standard cakes, we recommend ordering at least 2-3 days in advance. For custom designs, wedding cakes, or special occasions, please order 1-2 weeks ahead to ensure availability.",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "Yes! We offer delivery within London and surrounding areas. Delivery is free for orders over £50. Same-day delivery is available for orders placed before 2 PM (subject to availability).",
  },
  {
    question: "Can you create custom designs?",
    answer:
      "Our talented decorators can create custom designs based on your vision. We can work with photos, themes, colors, and special requests. Contact us to discuss your ideas.",
  },
  {
    question: "Do you cater to dietary restrictions?",
    answer:
      "Yes, we offer various options including vegan, gluten-free, sugar-free, and nut-free cakes. Please inform us of any allergies or dietary requirements when placing your order.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "Orders can be cancelled up to 24 hours before the delivery date for a full refund. Custom cakes require 48 hours notice. Emergency cancellations will be considered on a case-by-case basis.",
  },
  {
    question: "How should I store my cake?",
    answer:
      "Most of our cakes should be stored in the refrigerator and are best consumed within 2-3 days. Remove from fridge 30 minutes before serving for optimal taste. Specific storage instructions are provided with each order.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="relative bg-secondary py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/cozy-bakery-storefront-with-warm-lighting-and-welc.jpg"
            alt="Our bakery storefront"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <nav className="text-sm text-white/80 mb-4">Home / Contact Us</nav>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg">Get in Touch</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
            We'd love to hear from you! Contact us for custom orders, inquiries, or just to say hello
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Visit Our Bakery</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground">
                <p>123 Baker Street</p>
                <p>London, England</p>
                <p>W1U 6QL, United Kingdom</p>
              </CardContent>
            </Card>

            <Card className="border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground">
                <p>Main: +44 20 7123 4567</p>
                <p>Orders: +44 20 7123 4568</p>
                <p>WhatsApp: +44 7891 234567</p>
              </CardContent>
            </Card>

            <Card className="border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground">
                <p>General: hello@cakewala.co.uk</p>
                <p>Orders: orders@cakewala.co.uk</p>
                <p>Support: support@cakewala.co.uk</p>
              </CardContent>
            </Card>

            <Card className="border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Opening Hours</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground">
                <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
                <p>Sunday: 10:00 AM - 6:00 PM</p>
                <p>Public Holidays: 10:00 AM - 4:00 PM</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        className="border-gray-200"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        className="border-gray-200"

                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="border-gray-200"

                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="border-gray-200"

                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Inquiry Type</label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => handleInputChange("inquiryType", value)}
                    
                    >
                      <SelectTrigger className="border-gray-200 w-full">

                        <SelectValue  placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="custom-cake">Custom Cake Order</SelectItem>
                        <SelectItem value="wedding">Wedding Cakes</SelectItem>
                        <SelectItem value="birthday">Birthday Cakes</SelectItem>
                        <SelectItem value="corporate">Corporate Orders</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                      className="border-gray-200"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      className="border-gray-200"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                    />
                    <label htmlFor="newsletter" className="text-sm">
                      Subscribe to our newsletter for special offers and new cake announcements
                    </label>
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Section */}
            <Card className="border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Find Us</CardTitle>
                <p className="text-muted-foreground text-sm">
                  Located in the heart of London, we're easy to reach by tube, bus, or car
                </p>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">123 Baker Street, London</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-16 px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Have Questions?</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We're here to help! Browse through our most frequently asked questions or reach out to us directly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Quick Response</p>
                    <p className="text-sm text-muted-foreground">Call us for immediate assistance</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Detailed Inquiries</p>
                    <p className="text-sm text-muted-foreground">Email us for custom orders</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p className="text-sm text-muted-foreground">Available during business hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right FAQ Accordion */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-4">
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
