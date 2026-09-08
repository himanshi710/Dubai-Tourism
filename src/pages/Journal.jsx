import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Compass,
  Sparkles,
  Sun,
  Utensils,
  Building2,
} from "lucide-react";

import { Link } from "react-router-dom";

import { journal } from "../data/journal";

import "./Journal.css";

const Journal = () => {
  return (
    <main className="journal-page">

      {/* =========================================
          01 — HERO
      ========================================= */}

      <section className="journal-hero">

        <div className="journal-overlay"></div>

        <div className="journal-hero-content container">

         <div className="jour-pd">
             <div className="journal-hero-label">
            <span></span>
            THE DUBAI JOURNAL
          </div>

          <h1>
            STORIES FROM
            <br />
            <em>THE CITY.</em>
          </h1>

          <p>
            Travel stories, local discoveries and carefully curated
            inspiration for seeing Dubai beyond the ordinary.
          </p>

          <div className="journal-hero-bottom">

            <div className="journal-scroll">
              <span>SCROLL TO EXPLORE</span>
              <i></i>
            </div>

           

          </div>

         </div>
        </div>

      </section>


      {/* =========================================
          02 — JOURNAL STORIES
      ========================================= */}

      <section className="journal-section">

        <div className="container">

          <div className="journal-heading">

            <div className="journal-heading-top">
              <span></span>
              FROM OUR JOURNAL
            </div>

            <div className="journal-heading-row">

              <h2>
                KNOW DUBAI
                <br />
                <em>BETTER.</em>
              </h2>

              <p>
                Stories, guides and local perspectives designed to
                help you experience Dubai through a more personal lens.
              </p>

            </div>

          </div>


          <div className="journal-grid">

            {journal.map((item) => (

              <article
                className="journal-card"
                key={item.id}
              >

                <div className="journal-image">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <div className="journal-number">
                    {String(item.id).padStart(2, "0")}
                  </div>

                  <div className="journal-image-category">
                    {item.category}
                  </div>

                </div>


                <div className="journal-content">

                  <div className="journal-meta">

                    <span>
                      <CalendarDays size={12} />
                      {item.date}
                    </span>

                    <span>
                      <Clock3 size={12} />
                      {item.readTime || "5 MIN READ"}
                    </span>

                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.excerpt}</p>

                  <Link
                    to="/contact"
                    className="journal-link"
                  >
                    READ STORY
                    <ArrowUpRight size={16} />
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          03 — FEATURED STORY
      ========================================= */}

      <section className="journal-featured-section">

        <div className="container">

          <div className="featured-story">

            <div className="featured-story-image">

              <img
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1800&q=90"
                alt="Dubai skyline"
              />

            </div>


            <div className="featured-story-content">

              <span className="featured-label">
                EDITOR'S FEATURE
              </span>

              <h2>
                DUBAI,
                <br />
                <em>AFTER SUNSET.</em>
              </h2>

              <p>
                When the sun disappears behind the skyline, another
                side of Dubai comes alive. Rooftop views, illuminated
                landmarks, late-night dining and unforgettable city
                moments create a completely different experience.
              </p>

              <div className="featured-meta">

                <span>
                  <MapPin size={13} />
                  DOWNTOWN DUBAI
                </span>

                <span>
                  <Clock3 size={13} />
                  8 MIN READ
                </span>

              </div>

              <Link
                to="/contact"
                className="featured-button"
              >
                EXPLORE STORY
                <ArrowUpRight size={17} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          04 — DUBAI BY MOOD
      ========================================= */}

      <section className="journal-mood-section">

        <div className="container">

          <div className="mood-heading">

            <span>FIND YOUR DUBAI</span>

            <h2>
              TRAVEL BY
              <em> MOOD.</em>
            </h2>

            <p>
              Every traveller experiences Dubai differently.
              Choose the side of the city that speaks to you.
            </p>

          </div>


          <div className="mood-grid">

            <Link to="/packages" className="mood-card">

              <div className="mood-icon">
                <Sparkles size={22} />
              </div>

              <div className="mood-number">
                01
              </div>

              <h3>LUXURY</h3>

              <p>
                Private escapes, iconic hotels and extraordinary
                experiences.
              </p>

              <ArrowUpRight size={18} />

            </Link>


            <Link to="/packages" className="mood-card">

              <div className="mood-icon">
                <Compass size={22} />
              </div>

              <div className="mood-number">
                02
              </div>

              <h3>ADVENTURE</h3>

              <p>
                Desert drives, sky-high experiences and unforgettable
                adventures.
              </p>

              <ArrowUpRight size={18} />

            </Link>


            <Link to="/packages" className="mood-card">

              <div className="mood-icon">
                <Building2 size={22} />
              </div>

              <div className="mood-number">
                03
              </div>

              <h3>CULTURE</h3>

              <p>
                Discover old Dubai, traditional souks and local stories.
              </p>

              <ArrowUpRight size={18} />

            </Link>


            <Link to="/packages" className="mood-card">

              <div className="mood-icon">
                <Utensils size={22} />
              </div>

              <div className="mood-number">
                04
              </div>

              <h3>FOOD</h3>

              <p>
                From local flavours to destination dining across Dubai.
              </p>

              <ArrowUpRight size={18} />

            </Link>

          </div>

        </div>

      </section>


      {/* =========================================
          05 — TRAVEL NOTES
      ========================================= */}

      <section className="travel-notes-section">

        <div className="container">

          <div className="travel-notes">

            <div className="travel-notes-heading">

              <span>QUICK NOTES</span>

              <h2>
                BEFORE YOU
                <br />
                <em>GO.</em>
              </h2>

            </div>


            <div className="travel-notes-list">

              <div className="travel-note">

                <div className="note-icon">
                  <Sun size={18} />
                </div>

                <div>
                  <span>01 / WEATHER</span>
                  <h3>Plan around the season</h3>
                  <p>
                    Choose your activities and timings according to
                    Dubai's seasonal weather.
                  </p>
                </div>

              </div>


              <div className="travel-note">

                <div className="note-icon">
                  <MapPin size={18} />
                </div>

                <div>
                  <span>02 / LOCATION</span>
                  <h3>Explore beyond Downtown</h3>
                  <p>
                    Give yourself time to discover Old Dubai, the
                    desert and Dubai Marina.
                  </p>
                </div>

              </div>


              <div className="travel-note">

                <div className="note-icon">
                  <Compass size={18} />
                </div>

                <div>
                  <span>03 / EXPERIENCE</span>
                  <h3>Leave room for discovery</h3>
                  <p>
                    Some of Dubai's best moments are the ones you
                    don't plan in advance.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          06 — FINAL CTA
      ========================================= */}

      <section className="journal-cta">

        <div className="journal-cta-overlay"></div>

        <div className="container journal-cta-content">

          <span>YOUR NEXT STORY STARTS HERE</span>

          <h2>
            READY TO
            <br />
            <em>DISCOVER DUBAI?</em>
          </h2>

          <p>
            Let us create a Dubai journey shaped around the way
            you want to experience the city.
          </p>

          <Link
            to="/contact"
            className="journal-cta-button"
          >
            PLAN MY JOURNEY
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
};

export default Journal;