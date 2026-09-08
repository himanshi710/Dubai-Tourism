
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

        <div className="experiences-hero-image"></div>
        <div className="experiences-overlay"></div>

        <div className="experiences-hero-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="container experiences-hero-content">

          <div className="experiences-hero-top">

            <span className="experiences-kicker">
              <i></i>
              LIVE THE EXTRAORDINARY
            </span>

            <span className="experiences-location">
              DUBAI · UAE
            </span>

          </div>

          <div className="experiences-hero-main">

            <div className="experiences-hero-number">
              01 / EXPERIENCES
            </div>

            <h1>
              EXPERIENCES
              <br />
              <em>WITHOUT LIMITS.</em>
            </h1>

            <div className="experiences-hero-bottom">

              <p>
                Go beyond sightseeing. Discover Dubai through
                unforgettable moments, private adventures and
                experiences designed around you.
              </p>

              <a href="#experience-collection">
                DISCOVER EXPERIENCES
                <ArrowRight size={16} />
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          INTRO
      ========================= */}

      <section className="experiences-intro-section">

        <div className="container">

          <div className="experiences-intro-top">

            <div className="experiences-section-label">
              <span>02</span>
              THE EXPERIENCE COLLECTION
            </div>

            <div className="experiences-intro-note">
              <Sparkles size={14} />
              CURATED FOR THE CURIOUS
            </div>

          </div>


          <div className="experiences-intro-grid">

            <div className="experiences-intro-title">

              <span className="experiences-outline">
                FEEL
              </span>

              <h2>
                MOMENTS,
                <br />
                <em>NOT CHECKLISTS.</em>
              </h2>

            </div>


            <div className="experiences-intro-copy">

              <p className="experiences-large-copy">
                The best memories aren't planned around
                landmarks. They're created around feelings.
              </p>

              <p>
                From the silence of the desert at sunset to
                private moments above the city, our experiences
                are designed to show you a side of Dubai that
                ordinary tours simply cannot.
              </p>


              <div className="experiences-stats">

                <div>
                  <strong>12+</strong>
                  <span>
                    CURATED
                    <br />
                    EXPERIENCES
                  </span>
                </div>

                <div>
                  <strong>24/7</strong>
                  <span>
                    PERSONAL
                    <br />
                    SUPPORT
                  </span>
                </div>

                <div>
                  <strong>01</strong>
                  <span>
                    UNIQUE
                    <br />
                    DUBAI
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          EXPERIENCE COLLECTION
      ========================= */}

      <section
        className="experiences-section"
        id="experience-collection"
      >

        <div className="container">

          <div className="experiences-heading">

            <div>

              <span>03 / SIGNATURE EXPERIENCES</span>

              <h2>
                CHOOSE YOUR
                <em>MOMENT.</em>
              </h2>

            </div>

            <p>
              Every experience is carefully selected to reveal
              another side of Dubai — from adrenaline and
              adventure to quiet luxury and culture.
            </p>

          </div>


          <div className="experience-page-grid">

            {experiences.map((item, index) => {

              // Always use a valid icon
              const Icon =
                experienceIcons[index % experienceIcons.length];

              return (
                <article
                  className={`experience-page-card ${
                    index === 0
                      ? "experience-featured"
                      : ""
                  }`}
                  key={
                    item.id ||
                    item.number ||
                    item.title ||
                    `experience-${index}`
                  }
                >

                  {/* TOP */}

                  <div className="experience-card-top">

                    <span className="experience-card-number">
                      {item.number ||
                        String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="experience-card-icon">
                      <Icon
                        size={22}
                        strokeWidth={1.4}
                      />
                    </div>

                  </div>


                  {/* BIG BACKGROUND NUMBER */}

                  <div className="experience-card-bg-number">
                    {item.number ||
                      String(index + 1).padStart(2, "0")}
                  </div>


                  {/* CONTENT */}

                  <div className="experience-card-content">

                    <span className="experience-card-category">
                      SIGNATURE EXPERIENCE
                    </span>

                    <h3>
                      {item.title || "DUBAI EXPERIENCE"}
                    </h3>

                    <p>
                      {item.description ||
                        "Discover Dubai through a beautifully curated experience designed around you."}
                    </p>

                  </div>


                  {/* BOTTOM */}

                  <div className="experience-card-bottom">

                    <div className="experience-card-location">

                      <MapPin size={13} />

                      <span>
                        DUBAI · UAE
                      </span>

                    </div>

                    <Link to="/contact">
                      CREATE EXPERIENCE
                      <ArrowUpRight size={16} />
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

            <span>PRIVATE</span>
            <strong>DUBAI</strong>

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

              <span>OUR PHILOSOPHY</span>

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
                Feel the heat of the desert beneath your feet.
                Watch the skyline glow at sunset. Taste
                something completely new.
              </p>

              <p>
                Because the most unforgettable journeys are
                the ones that make you feel something.
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

