import { useState } from "react";
import styles, { layout } from "../style";
import PhishingBanner from "../assets/PhishingBanner.png";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdfaC2GmhbBsvdPoTOn9LRyIA5j3ixmK13njvcnml0aBNDtQA/formResponse";

const FIELD_MAP = {
  name: "entry.726004286",     // Full Name
  email: "entry.959984559",    // Email
  message: "entry.393130259",  // Query
};


const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData();
    formData.append(FIELD_MAP.name, form.name);
    formData.append(FIELD_MAP.email, form.email);
    formData.append(FIELD_MAP.message, form.message);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors", // REQUIRED for Google Forms
        body: formData,
      });

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className={`${layout.section} scroll-reveal scroll-section3 justify-center`}
    >
      <div className="w-full max-w-[900px] bg-black/40 border border-gray-700/50 rounded-2xl p-10 mx-auto">
      {/* Banner Image */}
<div className="w-full mb-8 overflow-hidden rounded-xl">
  <img
    src={PhishingBanner}
    alt="Contact Phishing Village"
    className="
      w-full
      h-[220px]
      object-cover
      transition-transform
      duration-700
      hover:scale-105
    "
  />
</div>

        <h2 className={`${styles.heading2} text-center mb-4`}>
          Get in Touch
        </h2>

        <p className="text-dimWhite text-center max-w-[600px] mx-auto mb-8">
          Have questions or want to collaborate with Phishing Village?
          Send us a message and we’ll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex md:flex-row flex-col gap-6">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-lg px-5 py-3 text-white"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-lg px-5 py-3 text-white"
            />
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Query"
            required
            className="bg-[#1a1a1a] border border-gray-700 rounded-lg px-5 py-4 text-white resize-none"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="self-center px-10 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold hover:scale-105 transition"
          >
            {status === "loading" ? "Sending..." : "Submit"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-center">
             Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-center">
              Something went wrong. Try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
