import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Send,
  ShieldCheck,
  Compass,
  Star,
  Headphones,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <main className="contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">
        <div className="contact-overlay"></div>

        <div className="container contact-hero-content">
          <span>LET'S PLAN</span>

          <h1>
            YOUR DUBAI
            <br />
            <em>STARTS HERE.</em>
          </h1>

          <p>
            Tell us what you're dreaming about and we'll turn it
            into a journey designed around you.
          </p>
        </div>
      </section>


      {/* =====================================================
          CONTACT + FORM
      ===================================================== */}

      <section className="contact-section">
        <div className="container contact-grid">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <span className="contact-kicker">
              GET IN TOUCH
            </span>

            <h2>
              LET'S CREATE
              <em>SOMETHING SPECIAL.</em>
            </h2>

            <p>
              Whether you're planning your first Dubai escape or
              returning for something extraordinary, our team is
              here to help you create a trip that feels completely
              your own.
            </p>


            {/* CONTACT DETAILS */}

            <div className="contact-details">

              <div>
                <Mail size={19} />

                <span>
                  <small>EMAIL</small>
                  hello@dubaitravel.com
                </span>
              </div>


              <div>
                <Phone size={19} />

                <span>
                  <small>PHONE</small>
                  +971 50 123 4567
                </span>
              </div>


              <div>
                <MapPin size={19} />

                <span>
                  <small>OFFICE</small>
                  Downtown Dubai, UAE
                </span>
              </div>


              <div>
                <Clock3 size={19} />

                <span>
                  <small>AVAILABLE</small>
                  24 hours, 7 days
                </span>
              </div>

            </div>


            {/* SUPPORT BOX */}

            <div className="contact-support">

              <MessageCircle size={24} />

              <div>
                <strong>
                  NEED QUICK ASSISTANCE?
                </strong>

                <span>
                  Speak with our Dubai travel specialists anytime.
                </span>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE FORM */}

          <div className="contact-form-wrapper">

            <form
              className="contact-form"
              onSubmit={(e) => e.preventDefault()}
            >

              {/* NAME + EMAIL */}

              <div className="form-row">

                <label>
                  YOUR NAME

                  <input
                    type="text"
                    placeholder="Your full name"
                  />
                </label>


                <label>
                  EMAIL ADDRESS

                  <input
                    type="email"
                    placeholder="you@example.com"
                  />
                </label>

              </div>


              {/* PHONE + DATES */}

              <div className="form-row">

                <label>
                  PHONE NUMBER

                  <input
                    type="tel"
                    placeholder="+91 / +971"
                  />
                </label>


                <label>
                  TRAVEL DATES

                  <input
                    type="text"
                    placeholder="When are you travelling?"
                  />
                </label>

              </div>


              {/* TRAVELLERS + TRIP STYLE */}

              <div className="form-row">

                <label>
                  TRAVELLERS

                  <select defaultValue="">
                    <option value="" disabled>
                      Number of travellers
                    </option>

                    <option>1 Traveller</option>
                    <option>2 Travellers</option>
                    <option>3 Travellers</option>
                    <option>4 Travellers</option>
                    <option>5+ Travellers</option>
                  </select>
                </label>


                <label>
                  TRIP STYLE

                  <select defaultValue="">
                    <option value="" disabled>
                      Choose your style
                    </option>

                    <option>Luxury Escape</option>
                    <option>Romantic Getaway</option>
                    <option>Family Holiday</option>
                    <option>Adventure Trip</option>
                    <option>Friends Holiday</option>
                    <option>Corporate Travel</option>
                    <option>Something Custom</option>
                  </select>
                </label>

              </div>


              {/* EXPERIENCE */}

              <label>
                WHAT ARE YOU LOOKING FOR?

                <select defaultValue="">
                  <option value="" disabled>
                    Choose an experience
                  </option>

                  <option>
                    Burj Khalifa & Downtown
                  </option>

                  <option>
                    Desert Safari
                  </option>

                  <option>
                    Luxury Shopping
                  </option>

                  <option>
                    Beach & Resort
                  </option>

                  <option>
                    Dubai Marina
                  </option>

                  <option>
                    Culture & Heritage
                  </option>

                  <option>
                    Food & Dining
                  </option>

                  <option>
                    Complete Dubai Experience
                  </option>

                </select>
              </label>


              {/* MESSAGE */}

              <label>
                TELL US MORE

                <textarea
                  rows="5"
                  placeholder="Tell us about your ideal Dubai trip..."
                ></textarea>
              </label>


              {/* PRIVACY NOTE */}

              <div className="form-note">

                <ShieldCheck size={15} />

                <span>
                  Your information is kept private and will only
                  be used to plan your journey.
                </span>

              </div>


              {/* BUTTON */}

              <button type="submit">
                SEND ENQUIRY

                <ArrowUpRight size={17} />
              </button>

            </form>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY TRAVEL WITH US
      ===================================================== */}

      <section className="contact-values">

        <div className="container">

          <div className="contact-values-header">

            <div>

              <span className="contact-values-kicker">
                THE DIFFERENCE
              </span>

              <h2>
                TRAVEL
                <em>WITHOUT LIMITS.</em>
              </h2>

            </div>

            <p>
              From the first conversation to the moment you
              return home, every detail is carefully planned
              around your journey.
            </p>

          </div>


          <div className="contact-values-grid">

            {/* CARD 01 */}

            <article className="contact-value-card">

              <span className="contact-value-number">
                01
              </span>

              <div className="contact-value-icon">
                <Compass size={22} />
              </div>

              <h3>
                Personalised Planning
              </h3>

              <p>
                No two travellers are the same. We create
                personalised Dubai experiences based on your
                interests, pace and travel style.
              </p>

            </article>


            {/* CARD 02 */}

            <article className="contact-value-card">

              <span className="contact-value-number">
                02
              </span>

              <div className="contact-value-icon">
                <Star size={22} />
              </div>

              <h3>
                Local Knowledge
              </h3>

              <p>
                Discover Dubai beyond the usual highlights with
                carefully selected experiences, hidden corners
                and trusted local recommendations.
              </p>

            </article>


            {/* CARD 03 */}

            <article className="contact-value-card">

              <span className="contact-value-number">
                03
              </span>

              <div className="contact-value-icon">
                <Headphones size={22} />
              </div>

              <h3>
                24/7 Support
              </h3>

              <p>
                From airport arrival to your final evening,
                our travel specialists remain available whenever
                you need assistance.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAP SECTION
      ===================================================== */}

      <section className="contact-map-section">

        <div className="container">

          <div className="contact-map-header">

            <div>

              <span className="contact-map-kicker">
                FIND US IN DUBAI
              </span>

              <h2>
                COME SAY
                <em>HELLO.</em>
              </h2>

            </div>

            <p>
              Our travel team is based in the heart of Dubai,
              making it easy to connect with us before or during
              your journey.
            </p>

          </div>


          {/* MAP */}

          <div className="contact-map">

            <iframe
              title="Dubai Travel Office Location"
              src="https://www.google.com/maps?q=Downtown%20Dubai%2C%20UAE&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>


            {/* MAP CARD */}

            <div className="contact-map-card">

              <span>
                OUR LOCATION
              </span>

              <h3>
                Downtown Dubai
              </h3>

              <p>
                Dubai, United Arab Emirates
                <br />
                Near Burj Khalifa & Dubai Mall
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Downtown+Dubai+UAE"
                target="_blank"
                rel="noreferrer"
              >
                GET DIRECTIONS

                <ArrowUpRight size={14} />

              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONNECT SECTION
      ===================================================== */}

      <section className="contact-connect">

        <div className="container contact-connect-inner">

          <div>

            <h2>
              LET'S STAY
              <em>CONNECTED.</em>
            </h2>

            <p>
              Have a question before you start planning?
              Our team is always happy to help you discover
              the right way to experience Dubai.
            </p>

          </div>


          <div className="contact-socials">

            <a
              href="mailto:hello@dubaitravel.com"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>


            <a
              href="tel:+971501234567"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>


            <a
              href="/contact"
              aria-label="Message"
            >
              <MessageCircle size={18} />
            </a>


            <a
              href="/contact"
              aria-label="Send enquiry"
            >
              <Send size={18} />
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact-bottom">

        <div className="container">

          <span>
            WE'RE HERE WHEN YOU NEED US
          </span>

          <h2>
            YOUR NEXT
            <em>ADVENTURE AWAITS.</em>
          </h2>

        </div>

      </section>

    </main>
  );
};

export default Contact;