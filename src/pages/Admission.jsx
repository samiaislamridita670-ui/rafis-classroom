import { useState } from 'react'

function Admission() {
  const [formData, setFormData] = useState({
    studentName: '',
    className: '',
    phone: '',
    address: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = `
Assalamu Alaikum, Rafi's Classroom!

I want to know about admission.

Student Name: ${formData.studentName}
Class: ${formData.className}
Phone: ${formData.phone}
Address: ${formData.address}
Additional Message: ${formData.message}
    `

    const whatsappNumber = '8801781925805'

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappURL, '_blank')
  }

  return (
    <section
      id="admission-form"
      className="min-h-screen bg-slate-100 px-4 py-16"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-blue-950 text-white text-center px-6 py-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Admission Form
          </h1>

          <p className="mt-3 text-blue-200">
            Rafi's Classroom-এ ভর্তির জন্য ফর্মটি পূরণ করুন।
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-6">
          <div>
            <label className="block font-semibold mb-2">
              Student Name *
            </label>

            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="শিক্ষার্থীর নাম লিখুন"
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Select Class *
            </label>

            <select
              name="className"
              value={formData.className}
              onChange={handleChange}
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">শ্রেণি নির্বাচন করুন</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={`Class ${i + 1}`}>
                  Class {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Student/Guardian Phone *
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="01XXXXXXXXX"
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Address
            </label>

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="আপনার এলাকার নাম লিখুন"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Additional Message
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="কোন বিষয়ে পড়তে চাও, লিখতে পারো"
              rows="4"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-4 rounded-lg hover:bg-green-700 transition"
          >
            Submit via WhatsApp
          </button>

          <div className="text-center text-sm text-slate-600 space-y-2">
            <p>সরাসরি যোগাযোগ করুন:</p>

            <p>
              WhatsApp:{' '}
              <a
                href="https://wa.me/8801781925805"
                target="_blank"
                rel="noreferrer"
                className="text-green-700 font-semibold"
              >
                01781925805
              </a>
            </p>

            <p>
              Email:{' '}
              <a
                href="mailto:rakibulhasanrafi@gmail.com"
                className="text-blue-700 font-semibold"
              >
                rakibulhasanrafi@gmail.com
              </a>
            </p>
          </div>

          <p className="text-xs text-slate-500 text-center">
            আপনার তথ্য সরাসরি WhatsApp মেসেজে যুক্ত হবে।
            মেসেজ পাঠাতে WhatsApp-এ Send বাটনে চাপ দিতে হবে।
          </p>
        </form>
      </div>
    </section>
  )
}

export default Admission