import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Globe2,
  Heart,
  MapPin,
  Sparkles,
  Users,
  Star,
  Crown,
  Gem,
} from "lucide-react";

import "./About.css";

const values = [
  {
    number: "01",
    icon: Compass,
    title: "CURATED",
    text: "Every experience is selected with purpose. We focus on places, stays and moments that genuinely deserve your time.",
  },
  {
    number: "02",
    icon: Heart,
    title: "PERSONAL",
    text: "No two journeys should feel the same. Your interests, rhythm and expectations shape every itinerary we create.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "EXCEPTIONAL",
    text: "From the first conversation to the final goodbye, every detail is thoughtfully considered and beautifully delivered.",
  },
  {
    number: "04",
    icon: Users,
    title: "HUMAN",
    text: "Behind every itinerary is a real person who listens, understands and helps make your Dubai experience effortless.",
  },
];

const milestones = [
  {
    year: "01",
    title: "DISCOVER",
    text: "We begin by understanding what you want from Dubai — not simply where you want to go.",
  },
  {
    year: "02",
    title: "DESIGN",
    text: "Our local knowledge becomes a carefully considered itinerary built around your interests.",
  },
  {
    year: "03",
    title: "REFINE",
    text: "Every detail is reviewed, balanced and polished before your journey begins.",
  },
  {
    year: "04",
    title: "EXPERIENCE",
    text: "You arrive with nothing to worry about except enjoying the city your way.",
  },
];

const stats = [
  {
    number: "12+",
    label: "CURATED EXPERIENCES",
  },
  {
    number: "25+",
    label: "DUBAI LOCATIONS",
  },
  {
    number: "98%",
    label: "HAPPY TRAVELLERS",
  },
  {
    number: "24/7",
    label: "TRAVEL SUPPORT",
  },
];

const About = () => {
  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-image"></div>

        <div className="about-hero-overlay"></div>

        <div className="about-hero-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="container about-hero-content">

          <div className="about-hero-top">
            <span className="about-kicker">
              <span className="kicker-line"></span>
              OUR STORY
            </span>

            <span className="about-hero-location">
              <MapPin size={14} />
              DUBAI · UAE
            </span>
          </div>

          <div className="about-hero-main">

            <p className="about-hero-number">
              01 / 04
            </p>

            <h1>
              WE DON'T JUST
              <br />
              <em>PLAN TRIPS.</em>
            </h1>

            <div className="about-hero-bottom">

              <p>
                We create beautifully considered Dubai experiences
                for travellers who expect more.
              </p>

              <a href="#about-intro" className="hero-scroll">
                <span>DISCOVER OUR STORY</span>
                <ArrowRight size={16} />
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="about-intro" id="about-intro">

        <div className="container">

          <div className="about-intro-top">

            <div className="section-index">
              <span>01</span>
              WHO WE ARE
            </div>

            <div className="intro-mini">
              <span></span>
              DUBAI TRAVEL COLLECTION
            </div>

          </div>

          <div className="about-intro-grid">

            <div className="intro-heading">

              <span className="outline-word">
                DUBAI
              </span>

              <h2>
                DUBAI IS OUR
                <br />
                <em>PASSION.</em>
              </h2>

            </div>

            <div className="intro-copy">

              <p className="intro-lead">
                Dubai Travel Collection was created with one simple
                idea: <strong>travel should feel personal.</strong>
              </p>

              <p>
                Not a checklist. Not a rushed itinerary. Not a collection
                of places copied from a guidebook. A journey designed
                around you.
              </p>

              <p>
                We combine local knowledge, premium hospitality and
                carefully selected experiences to reveal Dubai in a way
                that feels authentic, effortless and unforgettable.
              </p>

              <div className="intro-signature">
                <div className="signature-mark">
                  D
                </div>

                <div>
                  <strong>DUBAI ESCAPE</strong>
                  <span>CURATED WITH INTENTION</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="about-stats">

        <div className="container about-stats-grid">

          {stats.map((stat, index) => (
            <div className="about-stat" key={stat.label}>

              <span className="stat-index">
                0{index + 1}
              </span>

              <strong>
                {stat.number}
              </strong>

              <span className="stat-label">
                {stat.label}
              </span>

            </div>
          ))}

        </div>

      </section>


      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="about-values">

        <div className="container">

          <div className="about-section-heading">

            <div>
              <span className="heading-kicker">
                OUR PHILOSOPHY
              </span>

              <h2>
                DESIGNED WITH
                <br />
                <em>INTENTION.</em>
              </h2>
            </div>

            <p>
              Luxury isn't about adding more.
              It's about choosing better.
            </p>

          </div>


          <div className="values-grid">

            {values.map((value) => {

              const Icon = value.icon;

              return (
                <article
                  className="value-card"
                  key={value.number}
                >

                  <div className="value-card-top">

                    <span>
                      {value.number}
                    </span>

                    <Icon size={22} strokeWidth={1.4} />

                  </div>

                  <div className="value-card-line"></div>

                  <h3>
                    {value.title}
                  </h3>

                  <p>
                    {value.text}
                  </p>

                  <div className="value-card-arrow">
                    <ArrowUpRight size={17} />
                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          STORY IMAGE
      ===================================================== */}

      <section className="about-story">

        <div className="story-image-wrap">

          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=90"
            alt="Dubai skyline at sunset"
          />

          <div className="story-image-overlay"></div>

          <div className="story-image-caption">
            <span>THE CITY WE LOVE</span>
            <strong>DUBAI</strong>
          </div>

        </div>


        <div className="container story-grid">

          <div className="story-number">
            <span>02</span>
            THE DUBAI
            <br />
            DIFFERENCE
          </div>

          <div className="story-content">

            <span className="story-kicker">
              <span></span>
              SEE IT DIFFERENTLY
            </span>

            <h2>
              SEE THE CITY
              <br />
              <em>THROUGH OUR EYES.</em>
            </h2>

            <p>
              We believe the best Dubai memories happen between
              the famous landmarks.
            </p>

            <p>
              A quiet sunrise over the desert. An evening on the
              water with the skyline glowing in the distance.
              A hidden restaurant. A conversation with a local.
            </p>

            <p>
              That's why our itineraries combine the iconic with
              the unexpected — giving you a Dubai that feels
              richer, slower and more personal.
            </p>

            <a href="/contact" className="about-btn">
              START YOUR JOURNEY
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          LUXURY EXPERIENCE
      ===================================================== */}

      <section className="about-luxury">

        <div className="container">

          <div className="luxury-header">

            <div>
              <span>03 / THE EXPERIENCE</span>

              <h2>
                MORE THAN
                <br />
                <em>A DESTINATION.</em>
              </h2>
            </div>

            <div className="luxury-icon">
              <Crown size={28} strokeWidth={1.2} />
            </div>

          </div>


          <div className="luxury-grid">

            <div className="luxury-image large">

              <img
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=85"
                alt="Dubai luxury architecture"
              />

              <div className="image-label">
                <span>01</span>
                ARCHITECTURE
              </div>

            </div>


            <div className="luxury-text">

              <Gem size={27} strokeWidth={1.2} />

              <h3>
                ICONIC.
                <br />
                <em>UNFORGETTABLE.</em>
              </h3>

              <p>
                From architectural masterpieces to desert
                landscapes, Dubai has a visual language unlike
                anywhere else.
              </p>

              <span className="luxury-small">
                EXPERIENCE THE EXTRAORDINARY
              </span>

            </div>


            <div className="luxury-image">

              <img
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=85"
                alt="Dubai city experience"
              />

              <div className="image-label">
                <span>02</span>
                MOMENTS
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          JOURNEY PROCESS
      ===================================================== */}

      <section className="about-process">

        <div className="container">

          <div className="process-heading">

            <div className="section-index">
              <span>04</span>
              HOW WE WORK
            </div>

            <h2>
              FROM IDEA
              <br />
              <em>TO EXPERIENCE.</em>
            </h2>

          </div>


          <div className="process-list">

            {milestones.map((item) => (
              <div
                className="process-item"
                key={item.year}
              >

                <div className="process-number">
                  {item.year}
                </div>

                <div className="process-title">
                  <h3>{item.title}</h3>
                </div>

                <div className="process-text">
                  <p>{item.text}</p>
                </div>

                <ArrowUpRight
                  className="process-arrow"
                  size={20}
                />

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          QUOTE
      ===================================================== */}

      <section className="about-quote">

        <div className="quote-background"></div>

        <div className="quote-overlay"></div>

        <div className="container quote-content">

          <Star
            size={24}
            strokeWidth={1.2}
          />

          <span>
            OUR PROMISE
          </span>

          <blockquote>
            “THE BEST JOURNEYS
            <br />
            ARE THE ONES THAT
            <em>FEEL LIKE YOURS.</em>”
          </blockquote>

          <div className="quote-line"></div>

          <small>
            DUBAI TRAVEL COLLECTION
          </small>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="about-final">

        <div className="final-decoration">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="container final-content">

          <Globe2
            size={29}
            strokeWidth={1.2}
          />

          <span className="final-kicker">
            MADE FOR CURIOUS TRAVELLERS
          </span>

          <h2>
            DUBAI,
            <br />
            <em>YOUR WAY.</em>
          </h2>

          <p>
            Tell us what you imagine.
            We'll take care of the rest.
          </p>

          <a
            href="/contact"
            className="final-button"
          >
            PLAN YOUR JOURNEY
            <ArrowUpRight size={18} />
          </a>

        </div>

      </section>

    </main>
  );
};

export default About;