import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | EL-RAN Transformational Rendezvous</title>
        <meta
          name="description"
          content="Get in touch with EL-RAN Transformational Rendezvous for enquiries, collaborations, or program information."
        />
        <meta property="og:title" content="Contact Us | EL-RAN Transformational Rendezvous" />
        <meta property="og:description" content="Get in touch with EL-RAN Transformational Rendezvous for enquiries, collaborations, or program information." />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/og-image.png" />
      </Head>

      <main className="w-full">
        {/* Header Section - Full Width #FCFAFF */}
        <div className="w-full bg-[#FCFAFF] mt-36 mb-14 p-6 md:px-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary font-bricolage mb-6">
              Get in Touch
            </h1>
            <p className="text-base md:text-lg text-secondary/80 leading-relaxed max-w-2xl mx-auto mb-8">
              We'd love to hear from you. For enquiries, collaborations, or program information, please fill out the form.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm md:text-base font-medium text-secondary">
              <a href="mailto:theransomrendezvous@gmail.com" className="group hover:text-primary transition-colors flex items-center gap-2">
                <span className="text-secondary/70 group-hover:text-primary/70 transition-colors">Email:</span>
                <span>theransomrendezvous@gmail.com</span>
              </a>
              <span className="hidden md:inline text-gray-400">|</span>
              <a href="tel:08032388802" className="group hover:text-primary transition-colors flex items-center gap-2">
                <span className="text-secondary/70 group-hover:text-primary/70 transition-colors">Contact:</span>
                <span>08032388802</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form Section - White Card on #FCFAFF (or overlapping) */}
        <div className="w-full px-6 md:px-16 pb-20">
          <div className="max-w-[900px] mx-auto bg-white rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary font-bricolage mb-2">
              Send us a Message
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Use the form below to get in touch. All information are strictly confidential
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-secondary mb-2">Full name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#FAFAFA] px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all text-secondary"
                    placeholder=""
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-2">Email address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[#FAFAFA] px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all text-secondary"
                    placeholder=""
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-secondary mb-2">Subject of inquiry</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-[#FAFAFA] px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all text-secondary"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-secondary mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-[#FAFAFA] px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all text-secondary resize-none"
                  placeholder=""
                ></textarea>
              </div>

              <button className="px-6 py-2.5 bg-primary text-white rounded-xl font-medium text-sm hover:opacity-90 transition-all shadow-md hover:shadow-lg">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </main>
    </>
  );
}
