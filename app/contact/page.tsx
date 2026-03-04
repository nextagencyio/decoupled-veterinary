import Header from '../components/Header'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Schedule an appointment at Pawsitive Care Veterinary Clinic. View our hours, location, and contact information for your pet\'s care.',
  keywords: ['Pawsitive Care', 'Veterinary Clinic', 'Pet Appointment', 'Animal Hospital'],
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-base md:text-lg text-gray-600">
              Have questions about your pet&#39;s health or need to schedule an appointment? We&#39;re here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">care@pawsitivevetclinic.com</p>
                    <p className="text-gray-600">appointments@pawsitivevetclinic.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">(555) 729-7387</p>
                    <p className="text-sm text-gray-500">Appointments and general inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Location</h3>
                    <p className="text-gray-600">
                      1450 Companion Way<br />
                      Greenfield, CO 80525
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                    <p className="text-gray-600">
                      Mon - Fri: 7:00 AM - 9:00 PM<br />
                      Saturday: 8:00 AM - 5:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="petName" className="block text-sm font-medium text-gray-700 mb-2">
                      Pet&#39;s Name
                    </label>
                    <input
                      type="text"
                      id="petName"
                      name="petName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="Tell us about your pet and how we can help..."
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-sky-600 text-white py-3 px-4 rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 md:mt-12 bg-sky-50 rounded-lg p-6 md:p-8">
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Emergency Care</h2>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                If your pet is experiencing a medical emergency during our hours, please call us immediately. For after-hours emergencies, contact Metro Emergency Animal Hospital at (555) 999-PETS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/emergency"
                  className="inline-flex items-center justify-center px-6 py-3 border border-sky-600 text-sky-600 rounded-md hover:bg-sky-600 hover:text-white transition-colors duration-200 font-medium"
                >
                  Emergency Info
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors duration-200 font-medium"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
