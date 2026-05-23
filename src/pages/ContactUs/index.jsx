import React, { useState } from "react";
import Navbar from "../../Components/Navbar";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", form);
    setSent(true);
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="bg-gray-50 text-center py-20 px-8 border-b border-gray-100">
        <p className="text-xs text-yellow-500 tracking-widest uppercase mb-4">
          Get in Touch
        </p>
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          We'd love to <span className="text-yellow-500">hear</span> from you
        </h1>
        <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed">
          Have a question, feedback, or just want to say hello? Drop us a
          message and we'll get back to you soon.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Contact info
          </h2>
          <div className="w-10 h-0.5 bg-yellow-500 mb-6"></div>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center text-lg shrink-0">
                📍
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Address</p>
                <p className="text-xs text-gray-500 mt-1">Karachi, Pakistan</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center text-lg shrink-0">
                📧
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Email</p>
                <p className="text-xs text-gray-500 mt-1">
                  hello@shehnayie.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center text-lg shrink-0">
                📞
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Phone</p>
                <p className="text-xs text-gray-500 mt-1">+92 300 0000000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center text-lg shrink-0">
                🕐
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Hours</p>
                <p className="text-xs text-gray-500 mt-1">
                  Mon – Sat, 10am – 7pm
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Send a message
          </h2>
          <div className="w-10 h-0.5 bg-yellow-500 mb-6"></div>

          {sent ? (
            <div className="bg-green-50 border border-green-100 rounded-xl p-6 text-center">
              <p className="text-2xl mb-2">✅</p>
              <p className="text-sm font-medium text-green-700">
                Message sent!
              </p>
              <p className="text-xs text-green-600 mt-1">
                We'll get back to you soon.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Fatima Ali"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-yellow-400"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-yellow-400"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-yellow-400 resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="bg-yellow-500 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-yellow-600 transition"
              >
                Send Message
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
