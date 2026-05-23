import React from "react";
import Navbar from "../../Components/Navbar";

const values = [
  {
    icon: "❤️",
    title: "Handcrafted",
    desc: "Every piece is made with care by skilled artisans.",
  },
  {
    icon: "⭐",
    title: "Quality First",
    desc: "We never compromise on materials or finish.",
  },
  {
    icon: "🤝",
    title: "Community",
    desc: "Supporting local artisans and their families.",
  },
  {
    icon: "✨",
    title: "Authenticity",
    desc: "Rooted in Pakistani culture and tradition.",
  },
];

const stats = [
  { number: "500+", label: "Products" },
  { number: "2k+", label: "Happy Customers" },
  { number: "5+", label: "Years of Craft" },
];

const team = [
  { initials: "FA", name: "Fatima Ali", role: "Founder & CEO" },
  { initials: "ZK", name: "Zara Khan", role: "Head of Design" },
  { initials: "AR", name: "Ayesha Raza", role: "Operations" },
];

const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="bg-gray-50 text-center py-20 px-8 border-b border-gray-100">
        <p className="text-xs text-yellow-500 tracking-widest uppercase mb-4">
          Our Story
        </p>
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Crafted with <span className="text-yellow-500">love</span>, worn with
          pride
        </h1>
        <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed">
          Shehnayie is a celebration of Pakistani craftsmanship — bringing you
          handcrafted jewellery and accessories that tell a story.
        </p>
      </div>

      {/* Who We Are */}
      <section className="px-8 py-14 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Who we are</h2>
        <div className="w-10 h-0.5 bg-yellow-500 mb-6"></div>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          Shehnayie was born from a simple dream — to make beautiful,
          handcrafted Pakistani jewellery and accessories accessible to every
          woman. Founded in Karachi, we blend traditional artistry with modern
          aesthetics.
        </p>
        <p className="text-gray-500 text-sm leading-relaxed">
          Every necklace, earring, and handbag in our collection is carefully
          selected or crafted by skilled artisans who pour their heart into each
          piece. We believe fashion is not just about looking good — it's about
          feeling connected to your roots.
        </p>
      </section>

      {/* Values */}
      <section className="px-8 py-14 border-t border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Our values</h2>
        <div className="w-10 h-0.5 bg-yellow-500 mb-6"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="border border-gray-100 rounded-xl p-5"
            >
              <div className="text-2xl mb-3">{v.icon}</div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                {v.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 py-14 border-t border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          By the numbers
        </h2>
        <div className="w-10 h-0.5 bg-yellow-500 mb-6"></div>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <p className="text-3xl font-semibold text-yellow-500">
                {s.number}
              </p>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="px-8 py-14 border-t border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Meet the team
        </h2>
        <div className="w-10 h-0.5 bg-yellow-500 mb-6"></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="border border-gray-100 rounded-xl p-6 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 font-semibold text-lg mx-auto mb-3">
                {member.initials}
              </div>
              <h3 className="text-sm font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
