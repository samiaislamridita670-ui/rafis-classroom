function WhatsAppButton() {
  const phoneNumber = '8801781925805'

  const message = "Assalamu Alaikum, Rafi's Classroom! আমি ভর্তি সম্পর্কে জানতে চাই।"

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-4 font-bold text-white shadow-xl hover:bg-green-600"
    >
      <span className="text-xl">☏</span>
      <span>Chat with us</span>
    </a>
  )
}

export default WhatsAppButton