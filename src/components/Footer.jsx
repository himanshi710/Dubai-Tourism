
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* =========================
          FOOTER CTA
      ========================= */}

    

      {/* =========================
          MAIN FOOTER
      ========================= */}

      <div className="footer-main">

        <div className="container">

          <div className="footer-top-grid">

            {/* BRAND */}

            <div className="footer-brand">

              <div className="footer-brand-top">
                <span className="footer-brand-line"></span>

                <span className="footer-brand-country">
                  UAE · DUBAI
                </span>
              </div>

              <div className="footer-logo">
                DUBAI<span>ESCAPE</span>
              </div>

              <p className="footer-description">
                Curated journeys for those who seek more than
                a holiday. Discover Dubai through luxury, culture,
                adventure and extraordinary moments.
              </p>

              <div className="footer-socials">

                <a href="#" aria-label="Instagram">
                  IG
                </a>

                <a href="#" aria-label="Facebook">
                  FB
                </a>

                <a href="#" aria-label="LinkedIn">
                  IN
                </a>

                <a href="#" aria-label="YouTube">
                  YT
                </a>

              </div>

            </div>


            {/* EXPLORE */}

            <div className="footer-column">

              <div className="footer-column-title">
                <span>01</span>
                EXPLORE
              </div>

              <a href="/destinations">
                <span>Destinations</span>
                <ArrowUpRight size={15} />
              </a>

              <a href="/packages">
                <span>Luxury Packages</span>
                <ArrowUpRight size={15} />
              </a>

              <a href="/experiences">
                <span>Experiences</span>
                <ArrowUpRight size={15} />
              </a>

              <a href="/gallery">
                <span>Gallery</span>
                <ArrowUpRight size={15} />
              </a>

              <a href="/journal">
                <span>Travel Journal</span>
                <ArrowUpRight size={15} />
              </a>

            </div>


            {/* COMPANY */}

            <div className="footer-column">

              <div className="footer-column-title">
                <span>02</span>
                COMPANY
              </div>

              <a href="/about">
                <span>Our Story</span>
                <ArrowUpRight size={15} />
              </a>

              <a href="/contact">
                <span>Contact</span>
                <ArrowUpRight size={15} />
              </a>

              <a href="/plan-trip">
                <span>Plan Your Trip</span>
                <ArrowUpRight size={15} />
              </a>

              <a href="#">
                <span>Privacy Policy</span>
                <ArrowUpRight size={15} />
              </a>

              <a href="#">
                <span>Terms & Conditions</span>
                <ArrowUpRight size={15} />
              </a>

            </div>


            {/* CONTACT */}

            <div className="footer-contact">

              <div className="footer-column-title">
                <span>03</span>
                CONTACT
              </div>

              <div className="footer-contact-card">

                <div className="footer-contact-icon">
                  <MapPin size={17} />
                </div>

                <div>
                  <small>VISIT US</small>
                  <p>Downtown Dubai, UAE</p>
                </div>

              </div>


              <div className="footer-contact-card">

                <div className="footer-contact-icon">
                  <Phone size={17} />
                </div>

                <div>
                  <small>CALL US</small>
                  <p>+971 4 000 0000</p>
                </div>

              </div>


              <div className="footer-contact-card">

                <div className="footer-contact-icon">
                  <Mail size={17} />
                </div>

                <div>
                  <small>EMAIL US</small>
                  <p>hello@dubaiescape.com</p>
                </div>

              </div>

            </div>

          </div>


          {/* HUGE DUBAI TEXT */}

          <div className="footer-monogram">
            <span>DUBAI</span>
          </div>


          {/* BOTTOM */}

          <div className="footer-bottom">

            <div className="footer-copyright">
              © 2026 DUBAI ESCAPE
            </div>

            <div className="footer-bottom-center">
              <span>CURATED TRAVEL</span>
              <span>·</span>
              <span>UNITED ARAB EMIRATES</span>
            </div>

            <div className="footer-bottom-links">

              <a href="#">
                Privacy
              </a>

              <a href="#">
                Terms
              </a>

              <a href="#">
                Cookies
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

