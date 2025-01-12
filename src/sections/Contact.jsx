import { useState } from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try{
      await emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: 'Tathagata Chakraborty',
            from_email: form.email,
            to_email: 'tathagatachakraborty571@gmail.com',
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        )
    
        setLoading(false);
        alert('Your message has been sent successfully!');

        setForm({
                  name: '',
                  email: '',
                  message: '',
                });
    } catch(error) {
      setLoading(false);
      console.log(error);
      alert('Your message could not be sent. Please try again later!');
    }

  };



  
  return (
    <section className="my-20 c-space" id="contact">
      <div className="relative flex flex-col items-center justify-center min-h-screen">
      <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />
        <div className="contact-container">
        <h3 className="head-text">Let&apos;s talk</h3>
          <p className="mt-3 text-lg text-white-600">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col mt-12 space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact