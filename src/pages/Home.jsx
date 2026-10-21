function Home() {
  const courses = [
    {
      title: 'Class 1–5',
      description: 'সব বিষয়ে যত্নসহকারে পাঠদান ও নিয়মিত পরীক্ষার ব্যবস্থা।',
      icon: '📚',
    },
    {
      title: 'Class 6–8',
      description: 'সকল বিষয়ের বেসিক মজবুত করা ও পরীক্ষার প্রস্তুতি।',
      icon: '🎓',
    },
    {
      title: 'Class 9–10',
      description: 'গণিত, বিজ্ঞানসহ গুরুত্বপূর্ণ বিষয়ের বিশেষ যত্ন।',
      icon: '🏆',
    },
  ]

  return (
    <main className="bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-950 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-yellow-400 font-bold mb-4">
              WELCOME TO RAFI'S CLASSROOM
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Build Your Future Through
              <span className="text-yellow-400"> Quality Education</span>
            </h1>

            <p className="text-blue-100 text-lg mb-8 leading-8">
              সঠিক দিকনির্দেশনা, নিয়মিত অনুশীলন এবং যত্নশীল শিক্ষাদানের
              মাধ্যমে তোমার পড়াশোনাকে আরও সহজ ও আনন্দদায়ক করে তুলুন।
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#courses"
                className="bg-yellow-400 text-blue-950 px-7 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
              >
                Explore Courses
              </a>

              <a
                href="#contact"
                className="border border-white px-7 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-950 transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div>
           <img
  src="/rafi-sir.jpg"
  alt="Rafi Sir - Rafi's Classroom"
  className="w-full h-[350px] md:h-[450px] object-cover object-top rounded-3xl border-4 border-white shadow-2xl"
/>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-2xl font-bold text-blue-950">Quality</h3>
          <p className="mt-2 text-slate-600">যত্নসহকারে পাঠদান</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-2xl font-bold text-blue-950">Practice</h3>
          <p className="mt-2 text-slate-600">নিয়মিত অনুশীলন</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-2xl font-bold text-blue-950">Guidance</h3>
          <p className="mt-2 text-slate-600">সঠিক দিকনির্দেশনা</p>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-bold mb-3">OUR COURSES</p>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
              Choose Your Learning Path
            </h2>

            <p className="mt-4 text-slate-600">
              শিক্ষার্থীর শ্রেণি অনুযায়ী উপযুক্ত পাঠদান।
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="text-5xl mb-5">{course.icon}</div>

                <h3 className="text-2xl font-bold text-blue-950 mb-4">
                  {course.title}
                </h3>

                <p className="text-slate-600 leading-7 mb-6">
                  {course.description}
                </p>

                <a
                  href="#contact"
                  className="inline-block bg-blue-950 text-white px-5 py-3 rounded-lg hover:bg-blue-800 transition"
                >
                  Get Information →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-700 font-bold mb-3">ABOUT US</p>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
            About Rafi's Classroom
          </h2>

          <p className="text-slate-600 text-lg leading-8 max-w-3xl mx-auto">
            Rafi's Classroom একটি শিক্ষামূলক প্ল্যাটফর্ম, যেখানে শিক্ষার্থীদের
            নিয়মিত পড়াশোনা, বিষয়ভিত্তিক অনুশীলন এবং পরীক্ষার প্রস্তুতিতে
            সহায়তা করার লক্ষ্য নিয়ে কাজ করা হয়।
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 bg-yellow-400 text-blue-950 px-7 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
              Why Choose Us?
            </h2>

            <p className="mt-4 text-slate-600">
              শিক্ষার্থীর শেখার অভিজ্ঞতাকে আরও সহজ করার চেষ্টা।
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'সহজভাবে বিষয় বোঝানো',
              'নিয়মিত অনুশীলন',
              'পরীক্ষার প্রস্তুতি',
              'শিক্ষার্থীর প্রতি যত্ন',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow text-center"
              >
                <div className="text-3xl mb-3">✓</div>
                <h3 className="font-bold text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-950 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-yellow-400 font-bold mb-3">GET IN TOUCH</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Learning?
          </h2>

          <p className="text-blue-100 text-lg mb-8">
            কোর্স ও ভর্তি সম্পর্কে জানতে আমাদের সঙ্গে যোগাযোগ করুন।
          </p>

          <a
            href="https://www.facebook.com/profile.php?id=61594448456349"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-yellow-400 text-blue-950 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
          >
            Contact on Facebook
          </a>
        </div>
      </section>

      {/* Admission Section */}
      <section id="admission" className="bg-yellow-400 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">
            Join Rafi's Classroom Today!
          </h2>

          <p className="text-blue-950 mb-6">
            ভর্তি ও ক্লাসের বিস্তারিত জানতে যোগাযোগ করুন।
          </p>

          <a
            href="https://www.facebook.com/profile.php?id=61594448456349"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-950 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition"
          >
            Admission Inquiry
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white text-center py-6 px-4">
        <p>© {new Date().getFullYear()} Rafi's Classroom. All rights reserved.</p>
        <p className="text-slate-400 mt-2 text-sm">
          Learn Today, Lead Tomorrow.
        </p>
      </footer>
    </main>
  )
}

export default Home