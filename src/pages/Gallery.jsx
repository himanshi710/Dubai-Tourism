import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Gallery.css";

const images = [
  {
    number: "01",
    title: "Dubai Skyline",
    category: "CITY",
    location: "DOWNTOWN DUBAI",
    description:
      "Where futuristic architecture meets an endless Arabian horizon.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "02",
    title: "Palm Jumeirah",
    category: "COAST",
    location: "PALM JUMEIRAH",
    description:
      "Luxury, blue waters and iconic coastal views come together.",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "03",
    title: "Arabian Desert",
    category: "DESERT",
    location: "DUBAI DESERT",
    description:
      "Golden dunes stretching endlessly beneath the Arabian sky.",
    image:
      "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "04",
    title: "Dubai Marina",
    category: "WATER",
    location: "DUBAI MARINA",
    description:
      "A glittering waterfront where yachts meet the modern skyline.",
    image:
      "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1800&q=90",
  },
 
];

const Gallery = () => {
  return (
    <main className="gallery-page">

      {/* =====================================
          HERO
      ====================================== */}

      <section className="gallery-hero">

        <div className="gallery-hero-bg"></div>
        <div className="gallery-overlay"></div>

        <div className="gallery-hero-grid"></div>

        <div className="container gallery-hero-content">

          <div className="gallery-hero-top">

            <span className="gallery-kicker">
              <Camera size={14} />
              VISUAL STORIES
            </span>

            <span className="gallery-hero-location">
              DUBAI · UAE
            </span>

          </div>

          <div className="gallery-hero-main">

            <span className="gallery-hero-number">
              01 / GALLERY
            </span>

            <h1>
              DUBAI,
              <br />
              <em>IN FRAME.</em>
            </h1>

            <div className="gallery-hero-bottom">

              <p>
                A visual collection of places, details and
                unforgettable moments from our favourite city
                in the world.
              </p>

              <a href="#gallery-collection">
                EXPLORE THE COLLECTION
                <ArrowRight size={16} />
              </a>

            </div>

          </div>

        </div>

        <div className="gallery-scroll">
          <span>SCROLL</span>
          <i></i>
        </div>

      </section>


      {/* =====================================
          INTRO
      ====================================== */}

      <section className="gallery-intro">

        <div className="container">

          <div className="gallery-intro-top">

            <span>
              02 / THE COLLECTION
            </span>

            <div>
              <Sparkles size={14} />
              CURATED VISUALS
            </div>

          </div>


          <div className="gallery-intro-grid">

            <div className="gallery-intro-title">

              <span className="gallery-outline-word">
                SEE
              </span>

              <h2>
                MOMENTS
                <br />
                WORTH
                <br />
                <em>REMEMBERING.</em>
              </h2>

            </div>


            <div className="gallery-intro-copy">

              <p className="gallery-large-copy">
                Some places are better felt than described.
              </p>

              <p>
                Dubai is a city of contrasts — futuristic
                skylines, endless desert, calm coastlines and
                centuries of heritage. This collection captures
                the details that make the city unforgettable.
              </p>

              <div className="gallery-mini-stats">

                <div>
                  <strong>08</strong>
                  <span>
                    VISUAL
                    <br />
                    STORIES
                  </span>
                </div>

                <div>
                  <strong>04</strong>
                  <span>
                    UNIQUE
                    <br />
                    MOODS
                  </span>
                </div>

                <div>
                  <strong>01</strong>
                  <span>
                    ICONIC
                    <br />
                    CITY
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          GALLERY COLLECTION
      ====================================== */}

      <section
        className="gallery-section"
        id="gallery-collection"
      >

        <div className="container">

          <div className="gallery-heading">

            <div>

              <span>
                03 / DUBAI THROUGH OUR LENS
              </span>

              <h2>
                THE CITY,
                <em>CAPTURED.</em>
              </h2>

            </div>

            <p>
              From sunrise over the desert to the lights of
              Downtown, discover the many faces of Dubai.
            </p>

          </div>


          <div className="gallery-grid">

            {images.map((item, index) => (

              <article
                className={`gallery-card gallery-card-${index + 1}`}
                key={`${item.number}-${item.title}`}
              >

                <div className="gallery-image-wrap">

                  <img
                    src={item.image}
                    alt={`${item.title} — ${item.location}`}
                    loading={index > 1 ? "lazy" : "eager"}
                  />

                  <div className="gallery-image-shade"></div>

                </div>


                <div className="gallery-card-number">
                  {item.number}
                </div>


                <div className="gallery-card-top">

                  <span>
                    {item.category}
                  </span>

                  <ArrowUpRight size={20} />

                </div>


                <div className="gallery-card-content">

                  <span className="gallery-card-location">
                    {item.location}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>


                <div className="gallery-card-line"></div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          EDITORIAL FEATURE
      ====================================== */}

      <section className="gallery-editorial">

        <div className="gallery-editorial-image"></div>
        <div className="gallery-editorial-overlay"></div>

        <div className="container gallery-editorial-container">

          <div className="gallery-editorial-content">

            <span>
              04 / A DIFFERENT PERSPECTIVE
            </span>

            <h2>
              BEYOND
              <br />
              THE
              <br />
              <em>POSTCARD.</em>
            </h2>

            <p>
              The real beauty of Dubai isn't always found
              in the obvious places. Sometimes it's a quiet
              desert evening, a hidden courtyard or the
              first light touching the skyline.
            </p>

            <Link
              to="/destinations"
              className="gallery-editorial-button"
            >
              DISCOVER DUBAI
              <ArrowUpRight size={17} />
            </Link>

          </div>


          <div className="gallery-editorial-side">

            <span>FRAME</span>

            <strong>04</strong>

            <div></div>

            <span>DUBAI</span>

          </div>

        </div>

      </section>


      {/* =====================================
          FINAL CTA
      ====================================== */}

      <section className="gallery-final">

        <div className="gallery-final-circle circle-one"></div>
        <div className="gallery-final-circle circle-two"></div>

        <div className="container gallery-final-content">

          <span>
            YOUR STORY COULD BE NEXT
          </span>

          <h2>
            COME
            <br />
            <em>SEE IT.</em>
          </h2>

          <p>
            Let us create a Dubai journey filled with
            moments worth remembering.
          </p>

          <Link
            to="/contact"
            className="gallery-final-button"
          >
            PLAN MY JOURNEY
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
};

export default Gallery;