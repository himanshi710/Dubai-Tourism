import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Crown,
  Gem,
  Globe2,
  MapPin,
  Sparkles,
  Star,
  Sun,
  Waves,
  Building2,
} from "lucide-react";

import { Link } from "react-router-dom";
import { experiences } from "../data/experiences";

import "./Experiences.css";


// Icons for each experience
const experienceIcons = [
  Compass,
  Crown,
  Waves,
  Gem,
  Globe2,
  Sun,
  Building2,
  Star,
  Sparkles,
  MapPin,
  Compass,
  Crown,
];


const Experiences = () => {
  return (
    <main className="experiences-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="experiences-hero">

        <div className="experiences-overlay"></div>

        <div className="container experiences-hero-content">

          <span>
            LIVE THE EXTRAORDINARY
          </span>

          <h1>
            EXPERIENCES
            <br />
            <em>WITHOUT LIMITS.</em>
          </h1>

          <p>
            Go beyond sightseeing. Discover Dubai through
            unforgettable moments, private adventures and
            experiences designed around you.
          </p>

        </div>

      </section>


      {/* =========================
          EXPERIENCE SECTION
      ========================= */}

      <section className="experiences-section">

        <div className="container">

          <div className="experiences-intro">

            <span>
              <Sparkles size={14} />
              OUR EXPERIENCE COLLECTION
            </span>

            <h2>
              MOMENTS,
              <em> NOT CHECKLISTS.</em>
            </h2>

          </div>


          <div className="experience-page-grid">

            {experiences.map((item, index) => {

              // Guaranteed valid icon
              const Icon =
                experienceIcons[
                  index % experienceIcons.length
                ];

              const number =
                item.number ||
                String(index + 1).padStart(2, "0");

              return (

                <article
                  className="experience-page-card"
                  key={`${number}-${item.title || index}`}
                >

                  {/* CARD TOP */}

                  <div className="experience-page-top">

                    <span>
                      {number}
                    </span>

                    <Icon
                      size={24}
                      strokeWidth={1.5}
                    />

                  </div>


                  {/* CARD CONTENT */}

                  <div className="experience-card-content">

                    <span className="experience-card-category">
                      SIGNATURE EXPERIENCE
                    </span>

                    <h3>
                      {item.title ||
                        "DUBAI EXPERIENCE"}
                    </h3>

                    <p>
                      {item.description ||
                        "Discover Dubai through an unforgettable luxury experience."}
                    </p>

                  </div>


                  {/* CARD FOOTER */}

                  <div className="experience-card-bottom">

                    <div className="experience-card-location">

                      <MapPin size={13} />

                      <span>
                        DUBAI · UAE
                      </span>

                    </div>


                    <Link to="/contact">

                      CREATE EXPERIENCE

                      <ArrowUpRight size={17} />

                    </Link>

                  </div>

                </article>

              );

            })}

          </div>

        </div>

      </section>


      {/* =========================
          FEATURED EXPERIENCE
      ========================= */}

      <section className="experience-feature">

        <div className="experience-feature-image"></div>

        <div className="experience-feature-overlay"></div>

        <div className="container experience-feature-container">

          <div className="experience-feature-content">

            <div className="experience-feature-kicker">

              <Crown size={15} />

              THE DUBAI SIGNATURE

            </div>

            <span className="experience-feature-number">
              04
            </span>

            <h2>
              ABOVE THE
              <br />
              <em>ORDINARY.</em>
            </h2>

            <p>
              Imagine Dubai from a completely different
              perspective. Private views, golden sunsets,
              exceptional service and moments created
              exclusively for you.
            </p>

            <Link
              to="/contact"
              className="experience-feature-button"
            >

              CREATE YOUR MOMENT

              <ArrowUpRight size={17} />

            </Link>

          </div>


          <div className="experience-feature-side">

            <div className="feature-side-line"></div>

            <span>
              PRIVATE
            </span>

            <strong>
              DUBAI
            </strong>

          </div>

        </div>

      </section>


      {/* =========================
          PHILOSOPHY
      ========================= */}

      <section className="experience-philosophy">

        <div className="container">

          <div className="experience-philosophy-grid">

            <div className="philosophy-index">
              05
            </div>


            <div className="philosophy-title">

              <span>
                OUR PHILOSOPHY
              </span>

              <h2>
                DON'T JUST
                <br />
                <em>SEE</em>
                <br />
                DUBAI.
              </h2>

            </div>


            <div className="philosophy-copy">

              <div className="philosophy-star">

                <Star size={18} />

              </div>

              <p>
                Feel the heat of the desert beneath your
                feet. Watch the skyline glow at sunset.
                Taste something completely new.
              </p>

              <p>
                Because the most unforgettable journeys
                are the ones that make you feel something.
              </p>

              <Link to="/contact">

                PLAN MY EXPERIENCE

                <ArrowRight size={15} />

              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================= */}

      <section className="experiences-final">

        <div className="experiences-final-ring ring-one"></div>

        <div className="experiences-final-ring ring-two"></div>

        <div className="container experiences-final-content">

          <span>
            YOUR NEXT MEMORY STARTS HERE
          </span>

          <h2>
            WHAT WILL YOU
            <br />
            <em>EXPERIENCE?</em>
          </h2>

          <p>
            Tell us what inspires you and we'll create
            an experience that feels uniquely yours.
          </p>

          <Link
            to="/contact"
            className="experiences-final-button"
          >

            PLAN MY EXPERIENCE

            <ArrowUpRight size={18} />

          </Link>

        </div>

      </section>

    </main>
  );
};

export default Experiences;