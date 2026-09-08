import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  MapPin,
  Play,
  Sparkles,
  Star,
  Crown,
  Heart,
  Camera,
  Headphones,
  ShieldCheck,
} from "lucide-react";

import { destinations } from "../data/destinations";
import { packages } from "../data/packages";
import { experiences } from "../data/experiences";

import "./Home.css";

const Home = () => {
  return (
    <main className="home">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="home-hero">

        <div className="home-hero-bg"></div>

        <div className="home-hero-overlay"></div>

        <div className="container home-hero-content">

          <div className="hero-eyebrow">
            <span></span>
            CURATED DUBAI JOURNEYS
          </div>

          <h1>
            Discover
            <em> Dubai</em>
            <br />
            Beyond The Ordinary.
          </h1>

          <p>
            Private escapes, extraordinary experiences and beautifully
            curated journeys through one of the world's most fascinating
            cities.
          </p>

          <div className="hero-actions">

            <a href="/packages" className="btn btn-gold">
              Explore Journeys
              <ArrowUpRight size={17} />
            </a>

            <a href="/plan-trip" className="btn btn-outline">
              Plan Your Trip
              <ArrowRight size={17} />
            </a>

          </div>

          <div className="hero-scroll">
            <span className="hero-scroll-line"></span>
            SCROLL TO EXPLORE
          </div>

        </div>

        <div className="hero-location">
          <MapPin size={15} />
          DUBAI · UNITED ARAB EMIRATES
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="home-intro section">

        <div className="container">

          <div className="intro-grid">

            <div className="intro-label">
              <span>01</span>
              THE DUBAI ESCAPE
            </div>

            <div className="intro-content">

              <p className="section-kicker">
                TRAVEL DIFFERENTLY
              </p>

              <h2>
                Dubai is not just
                <br />
                a destination.
                <span>It's a feeling.</span>
              </h2>

              <p className="intro-text">
                From the futuristic skyline of Downtown to the golden silence
                of the desert, Dubai brings together contrasts that create
                unforgettable journeys.
              </p>

              <a href="/about" className="text-link">
                Discover Our Story
                <ArrowUpRight size={17} />
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DESTINATIONS
      ===================================================== */}

      <section className="home-destinations section section-cream">

        <div className="container">

          <div className="section-heading-row">

            <div>

              <p className="section-kicker">
                PLACES TO DISCOVER
              </p>

              <h2 className="section-title">
                Iconic <span>Dubai</span>
              </h2>

            </div>

            <a
              href="/destinations"
              className="view-all"
            >
              View All Destinations
              <ArrowUpRight size={17} />
            </a>

          </div>


          <div className="destination-grid">

            {destinations.slice(0, 4).map((destination, index) => (

              <article
                className={`destination-card destination-card-${index + 1}`}
                key={destination.id || destination.title || index}
              >

                <div className="destination-image">

                  <img
                    src={destination.image}
                    alt={destination.title || destination.name}
                  />

                  <div className="destination-overlay"></div>

                  <span className="destination-number">
                    0{index + 1}
                  </span>

                  <div className="destination-arrow">
                    <ArrowUpRight size={20} />
                  </div>

                </div>

                <div className="destination-info">

                  <span>
                    {destination.location ||
                      destination.category ||
                      "DUBAI"}
                  </span>

                  <h3>
                    {destination.title || destination.name}
                  </h3>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DUBAI BY MOOD — NEW SECTION 01
      ===================================================== */}

      <section className="home-moods section">

        <div className="container">

          <div className="moods-header">

            <div>

              <p className="section-kicker">
                FIND YOUR DUBAI
              </p>

              <h2 className="section-title">
                Travel by <span>mood.</span>
              </h2>

            </div>

            <p>
              Whether you want a slow luxury escape or an adventure
              packed with energy, Dubai has a side waiting for you.
            </p>

          </div>


          <div className="moods-grid">

            <article className="mood-card mood-luxury">

              <div className="mood-image">
                <img
                  src={
                    destinations[0]?.image ||
                    "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=85"
                  }
                  alt="Dubai luxury experience"
                />

                <div className="mood-overlay"></div>
              </div>

              <div className="mood-content">

                <div className="mood-icon">
                  <Crown size={19} />
                </div>

                <span>01 · LUXURY</span>

                <h3>
                  The Art of
                  <em> Indulgence.</em>
                </h3>

                <p>
                  Five-star stays, private dining, premium transfers
                  and experiences designed without compromise.
                </p>

                <a href="/experiences">
                  Discover Luxury
                  <ArrowUpRight size={16} />
                </a>

              </div>

            </article>


            <article className="mood-card mood-adventure">

              <div className="mood-image">
                <img
                  src={
                    experiences[1]?.image ||
                    "https://images.unsplash.com/photo-1453599294564-01f45fc2f3f7?auto=format&fit=crop&w=1000&q=85"
                  }
                  alt="Dubai adventure"
                />

                <div className="mood-overlay"></div>
              </div>

              <div className="mood-content">

                <div className="mood-icon">
                  <Compass size={19} />
                </div>

                <span>02 · ADVENTURE</span>

                <h3>
                  Chase the
                  <em> Extraordinary.</em>
                </h3>

                <p>
                  Desert safaris, dune adventures, sky-high views
                  and unforgettable moments beyond the city.
                </p>

                <a href="/experiences">
                  Explore Adventure
                  <ArrowUpRight size={16} />
                </a>

              </div>

            </article>


            <article className="mood-card mood-culture">

              <div className="mood-image">
                <img
                  src={
                    destinations[2]?.image ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPLDL7a-ES8dvh_bBLRrqQZGFEj01i8rm1guGhXNrkA&s=10"
                  }
                  alt="Dubai culture"
                />

                <div className="mood-overlay"></div>
              </div>

              <div className="mood-content">

                <div className="mood-icon">
                  <Sparkles size={19} />
                </div>

                <span>03 · CULTURE</span>

                <h3>
                  Discover the
                  <em> Soul of Dubai.</em>
                </h3>

                <p>
                  Explore heritage districts, local traditions,
                  art, architecture and stories that shaped the city.
                </p>

                <a href="/destinations">
                  Discover Culture
                  <ArrowUpRight size={16} />
                </a>

              </div>

            </article>


            <article className="mood-card mood-wellness">

              <div className="mood-image">
                <img
                  src={
                    destinations[3]?.image ||
                    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=85"
                  }
                  alt="Dubai wellness escape"
                />

                <div className="mood-overlay"></div>
              </div>

              <div className="mood-content">

                <div className="mood-icon">
                  <Heart size={19} />
                </div>

                <span>04 · WELLNESS</span>

                <h3>
                  Slow Down.
                  <em> Breathe.</em>
                </h3>

                <p>
                  Beach mornings, peaceful retreats, spa experiences
                  and quiet moments away from the city's energy.
                </p>

                <a href="/experiences">
                  Find Your Escape
                  <ArrowUpRight size={16} />
                </a>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED EXPERIENCE
      ===================================================== */}

      <section className="home-feature section">

        <div className="container">

          <div className="feature-grid">

            <div className="feature-image">

              <img
                src={
                  experiences[0]?.image ||
                  "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=85"
                }
                alt={
                  experiences[0]?.title ||
                  "Dubai desert experience"
                }
              />

              <div className="feature-image-overlay"></div>

              <button
                type="button"
                className="feature-play"
                aria-label="Play experience video"
              >
                <Play size={20} fill="currentColor" />
              </button>

              <div className="feature-image-caption">
                <span>01</span>
                DESERT · DUBAI
              </div>

            </div>


            <div className="feature-content">

              <p className="section-kicker">
                SIGNATURE EXPERIENCE
              </p>

              <h2>
                Where the
                <br />
                <span>desert comes alive.</span>
              </h2>

              <p>
                Leave the city behind and enter a world of endless golden
                dunes, spectacular sunsets and timeless Arabian traditions.
              </p>

              <div className="feature-points">

                <div className="feature-point">

                  <div>
                    <Compass size={19} />
                  </div>

                  <span>
                    Private Desert Safari
                  </span>

                </div>


                <div className="feature-point">

                  <div>
                    <Star size={19} />
                  </div>

                  <span>
                    Premium Arabian Camp
                  </span>

                </div>


                <div className="feature-point">

                  <div>
                    <Sparkles size={19} />
                  </div>

                  <span>
                    Sunset & Fine Dining
                  </span>

                </div>

              </div>

              <a
                href="/experiences"
                className="btn btn-dark"
              >
                Explore Experiences
                <ArrowRight size={17} />
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY TRAVEL WITH US — NEW SECTION 02
      ===================================================== */}

      <section className="home-why section section-cream">

        <div className="container">

          <div className="why-heading">

            <div>

              <p className="section-kicker">
                THE DIFFERENCE
              </p>

              <h2 className="section-title">
                Dubai, made
                <span> personal.</span>
              </h2>

            </div>

            <p>
              We believe the best journeys are not simply booked.
              They are thoughtfully designed around the person travelling.
            </p>

          </div>


          <div className="why-grid">

            <article className="why-card">

              <div className="why-number">
                01
              </div>

              <div className="why-icon">
                <Compass size={23} />
              </div>

              <h3>
                Tailored Journeys
              </h3>

              <p>
                Every itinerary is shaped around your interests,
                travel pace, preferences and the way you want to
                experience Dubai.
              </p>

              <span className="why-line"></span>

            </article>


            <article className="why-card">

              <div className="why-number">
                02
              </div>

              <div className="why-icon">
                <Star size={23} />
              </div>

              <h3>
                Handpicked Experiences
              </h3>

              <p>
                We select memorable stays, restaurants and
                experiences that add meaning to every day of your
                Dubai adventure.
              </p>

              <span className="why-line"></span>

            </article>


            <article className="why-card">

              <div className="why-number">
                03
              </div>

              <div className="why-icon">
                <Headphones size={23} />
              </div>

              <h3>
                Personal Support
              </h3>

              <p>
                From your first enquiry to your journey home,
                our team is available whenever you need us.
              </p>

              <span className="why-line"></span>

            </article>


            <article className="why-card">

              <div className="why-number">
                04
              </div>

              <div className="why-icon">
                <ShieldCheck size={23} />
              </div>

              <h3>
                Travel With Confidence
              </h3>

              <p>
                Clear planning, trusted recommendations and
                thoughtful support give you complete peace of mind
                throughout your trip.
              </p>

              <span className="why-line"></span>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          PACKAGES
      ===================================================== */}

      <section className="home-packages section section-dark">

        <div className="container">

          <div className="section-heading-row dark-heading">

            <div>

              <p className="section-kicker">
                CURATED JOURNEYS
              </p>

              <h2 className="section-title">
                Travel in <span>style.</span>
              </h2>

            </div>

            <a
              href="/packages"
              className="view-all light-view"
            >
              Explore All Packages
              <ArrowUpRight size={17} />
            </a>

          </div>


          <div className="packages-grid">

            {packages.slice(0, 3).map((pkg, index) => (

              <article
                className="home-package-card"
                key={pkg.id || pkg.title || index}
              >

                <div className="package-image">

                  <img
                    src={pkg.image}
                    alt={
                      pkg.title ||
                      "Dubai travel package"
                    }
                  />

                  <div className="package-image-overlay"></div>

                  <span className="package-category">
                    {pkg.category || "DUBAI"}
                  </span>

                  <div className="package-number">
                    0{index + 1}
                  </div>

                </div>


                <div className="package-content">

                  <div className="package-meta">

                    <span>
                      {pkg.duration ||
                        "5 DAYS / 4 NIGHTS"}
                    </span>

                    <span>
                      {pkg.price ||
                        "FROM ₹89,999"}
                    </span>

                  </div>

                  <h3>
                    {pkg.title}
                  </h3>

                  <p>
                    {pkg.description ||
                      "A beautifully curated Dubai journey designed for unforgettable moments."}
                  </p>

                  <a
                    href="/packages"
                    className="package-link"
                  >
                    View Journey
                    <ArrowUpRight size={16} />
                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DUBAI TRAVEL MOMENTS — NEW SECTION 03
      ===================================================== */}

      <section className="home-moments section">

        <div className="container">

          <div className="moments-heading">

            <div>

              <p className="section-kicker">
                MOMENTS IN DUBAI
              </p>

              <h2 className="section-title">
                See Dubai
                <span> differently.</span>
              </h2>

            </div>

            <a
              href="/gallery"
              className="view-all"
            >
              View Full Gallery
              <ArrowUpRight size={17} />
            </a>

          </div>


          <div className="moments-grid">

            <div className="moment-item moment-large">

              <img
                src={
                  destinations[0]?.image ||
                  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85"
                }
                alt="Dubai skyline"
              />

              <div className="moment-overlay"></div>

              <div className="moment-content">
                <span>01 · CITY</span>
                <h3>
                  A skyline that
                  <em> never sleeps.</em>
                </h3>
              </div>

            </div>


            <div className="moment-item">

              <img
                src={
                  experiences[0]?.image ||
                  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85"
                }
                alt="Dubai desert"
              />

              <div className="moment-overlay"></div>

              <div className="moment-content">
                <span>02 · DESERT</span>
                <h3>
                  Golden
                  <em> horizons.</em>
                </h3>
              </div>

            </div>


            <div className="moment-item">

              <img
                src={
                  destinations[1]?.image ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQ7_fml-LSJ7JiR61HzddVnwYP7HmTy8BWx9dxZpBHQ&s=10"
                }
                alt="Dubai architecture"
              />

              <div className="moment-overlay"></div>

              <div className="moment-content">
                <span>03 · ARCHITECTURE</span>
                <h3>
                  Built for
                  <em> wonder.</em>
                </h3>
              </div>

            </div>


          

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="home-stats section">

        <div className="container">

          <div className="stats-grid">

            <div className="stat-item">

              <strong>
                15+
              </strong>

              <span>
                CURATED EXPERIENCES
              </span>

            </div>


            <div className="stat-item">

              <strong>
                25+
              </strong>

              <span>
                LUXURY STAYS
              </span>

            </div>


            <div className="stat-item">

              <strong>
                4.9
              </strong>

              <span>
                AVERAGE GUEST RATING
              </span>

            </div>


            <div className="stat-item">

              <strong>
                24/7
              </strong>

              <span>
                TRAVEL ASSISTANCE
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="home-cta">

        <div className="home-cta-bg"></div>

        <div className="home-cta-overlay"></div>

        <div className="container home-cta-content">

          <p className="section-kicker">
            YOUR NEXT CHAPTER
          </p>

          <h2>
            Your Dubai story
            <br />
            <span>starts here.</span>
          </h2>

          <p>
            Tell us how you want to experience Dubai.
            We'll take care of the rest.
          </p>

          <a
            href="/plan-trip"
            className="btn btn-gold"
          >
            Plan My Trip
            <ArrowUpRight size={17} />
          </a>

        </div>

      </section>

    </main>
  );
};

export default Home;