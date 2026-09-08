
import {
    ArrowRight,
    ArrowUpRight,
    Check,
    Clock3,
    Crown,
    MapPin,
    Sparkles,
    Star,
} from "lucide-react";

import { Link } from "react-router-dom";
import { packages } from "../data/packages";

import "./Packages.css";

const Packages = () => {
    return (
        <main className="packages-page">

            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="packages-hero">

                <div className="packages-hero-image"></div>
                <div className="packages-overlay"></div>

                <div className="packages-hero-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="container packages-hero-content">

                    <div className="packages-hero-top">

                        <span className="packages-kicker">
                            <i></i>
                            CURATED JOURNEYS
                        </span>

                        <span className="packages-location">
                            DUBAI · UAE
                        </span>

                    </div>

                    <div className="packages-hero-main">

                        <div className="packages-hero-number">
                            01 / PACKAGES
                        </div>

                        <h1>
                            FIND YOUR
                            <br />
                            <em>DUBAI.</em>
                        </h1>

                        <div className="packages-hero-bottom">

                            <p>
                                Thoughtfully designed journeys for travellers
                                who want to experience Dubai beyond the ordinary.
                            </p>

                            <a href="#package-collection">
                                EXPLORE PACKAGES
                                <ArrowRight size={16} />
                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          INTRO
      ===================================================== */}

            <section className="packages-intro">

                <div className="container">

                    <div className="packages-intro-top">

                        <div className="packages-section-label">
                            <span>02</span>
                            THE COLLECTION
                        </div>

                        <div className="packages-intro-note">
                            <Sparkles size={14} />
                            DESIGNED FOR YOUR WAY OF TRAVEL
                        </div>

                    </div>


                    <div className="packages-intro-grid">

                        <div className="packages-intro-title">

                            <span className="packages-outline">
                                JOURNEYS
                            </span>

                            <h2>
                                YOUR TIME.
                                <br />
                                <em>YOUR DUBAI.</em>
                            </h2>

                        </div>


                        <div className="packages-intro-copy">

                            <p className="packages-large-copy">
                                Whether you're here for a romantic escape,
                                a family adventure or a taste of luxury,
                                there is a Dubai waiting for you.
                            </p>

                            <p>
                                Our curated packages bring together the city's
                                most remarkable experiences, carefully selected
                                stays and seamless travel arrangements.
                            </p>


                            <div className="packages-mini-stats">

                                <div>
                                    <strong>06</strong>
                                    <span>
                                        SIGNATURE
                                        <br />
                                        JOURNEYS
                                    </span>
                                </div>

                                <div>
                                    <strong>24/7</strong>
                                    <span>
                                        TRAVEL
                                        <br />
                                        SUPPORT
                                    </span>
                                </div>

                                <div>
                                    <strong>100%</strong>
                                    <span>
                                        CURATED
                                        <br />
                                        EXPERIENCE
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          PACKAGE COLLECTION
      ===================================================== */}

            <section
                className="packages-section"
                id="package-collection"
            >

                <div className="container">

                    <div className="packages-heading">

                        <div>

                            <span className="packages-heading-label">
                                03 / SIGNATURE COLLECTION
                            </span>

                            <h2>
                                CHOOSE YOUR
                                <em>ESCAPE.</em>
                            </h2>

                        </div>

                        <p>
                            From first-time Dubai travellers to luxury seekers,
                            every itinerary is created to make your time in
                            the city effortless and unforgettable.
                        </p>

                    </div>


                    <div className="packages-grid">

                        {packages.map((item, index) => (

                            <article
                                className={`package-card ${item.featured ? "featured-package" : ""
                                    }`}
                                key={item.title || index}
                            >

                                {/* NUMBER */}

                                <div className="package-number">
                                    {item.number || `0${index + 1}`}
                                </div>


                                {/* FEATURED BADGE */}

                                {item.featured && (

                                    <div className="package-badge">

                                        <Crown size={12} />

                                        MOST POPULAR

                                    </div>

                                )}


                                {/* IMAGE */}

                                <div className="package-image">

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading={index > 1 ? "lazy" : "eager"}
                                    />

                                    <div className="package-image-overlay"></div>


                                    <div className="package-image-top">

                                        <span>
                                            <MapPin size={12} />
                                            DUBAI · UAE
                                        </span>

                                        <span className="package-image-index">
                                            0{index + 1}
                                        </span>

                                    </div>


                                    <div className="package-image-bottom">

                                        <span>
                                            <Clock3 size={13} />
                                            {item.duration}
                                        </span>

                                    </div>


                                    <div className="package-image-action">
                                        <ArrowUpRight size={19} />
                                    </div>

                                </div>


                                {/* BODY */}

                                <div className="package-body">

                                    <div className="package-category">
                                        SIGNATURE JOURNEY
                                    </div>


                                    <div className="package-title-row">

                                        <h3>{item.title}</h3>

                                        <Star
                                            size={17}
                                            strokeWidth={1.2}
                                        />

                                    </div>


                                    <p className="package-description">
                                        {item.description}
                                    </p>


                                    {/* INCLUDED */}

                                    <div className="package-included">

                                        <div className="included-heading">
                                            <span>YOUR JOURNEY INCLUDES</span>
                                            <i></i>
                                        </div>


                                        <ul>

                                            {(item.includes || []).map(
                                                (include, includeIndex) => (

                                                    <li
                                                        key={`${include}-${includeIndex}`}
                                                    >

                                                        <span className="include-icon">
                                                            <Check size={12} />
                                                        </span>

                                                        <span>{include}</span>

                                                    </li>

                                                )
                                            )}

                                        </ul>

                                    </div>


                                    {/* FOOTER */}

                                    <div className="package-footer">

                                        <div className="package-price">

                                            <span>STARTING FROM</span>

                                            <strong>{item.price}</strong>

                                            <small>PER PERSON</small>

                                        </div>


                                        <Link
                                            to="/contact"
                                            className="package-explore"
                                        >

                                            EXPLORE

                                            <ArrowUpRight size={16} />

                                        </Link>

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
          WHY BOOK WITH US
      ===================================================== */}

            <section className="package-benefits">

                <div className="container">

                    <div className="package-benefits-header">

                        <span>04 / THE DIFFERENCE</span>

                        <h2>
                            MORE THAN A
                            <em>PACKAGE.</em>
                        </h2>

                    </div>


                    <div className="package-benefits-grid">

                        <div className="package-benefit">

                            <div className="benefit-number">
                                01
                            </div>

                            <div className="benefit-icon">
                                <Crown size={21} />
                            </div>

                            <h3>Curated Luxury</h3>

                            <p>
                                Handpicked hotels, experiences and services
                                selected for quality, comfort and character.
                            </p>

                        </div>


                        <div className="package-benefit">

                            <div className="benefit-number">
                                02
                            </div>

                            <div className="benefit-icon">
                                <Sparkles size={21} />
                            </div>

                            <h3>Thoughtful Details</h3>

                            <p>
                                Every itinerary is designed around the small
                                details that make a journey feel effortless.
                            </p>

                        </div>


                        <div className="package-benefit">

                            <div className="benefit-number">
                                03
                            </div>

                            <div className="benefit-icon">
                                <MapPin size={21} />
                            </div>

                            <h3>Local Experiences</h3>

                            <p>
                                Discover iconic Dubai and hidden moments
                                through experiences that feel genuinely local.
                            </p>

                        </div>


                        <div className="package-benefit">

                            <div className="benefit-number">
                                04
                            </div>

                            <div className="benefit-icon">
                                <Clock3 size={21} />
                            </div>

                            <h3>Seamless Support</h3>

                            <p>
                                From arrival to departure, our team is here
                                to make your Dubai journey simple and smooth.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          CUSTOM JOURNEY
      ===================================================== */}

            <section className="package-custom">

                <div className="package-custom-image"></div>
                <div className="package-custom-overlay"></div>

                <div className="package-custom-decoration">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>


                <div className="container package-custom-content">

                    <div className="package-custom-number">
                        05
                    </div>

                    <span className="package-custom-kicker">
                        CANNOT FIND EXACTLY WHAT YOU WANT?
                    </span>

                    <h2>
                        LET'S CREATE
                        <br />
                        <em>YOUR JOURNEY.</em>
                    </h2>

                    <p>
                        Tell us how you want to experience Dubai.
                        We'll build a private itinerary around your
                        interests, pace and style of travel.
                    </p>

                    <Link
                        to="/contact"
                        className="package-custom-button"
                    >
                        BUILD MY TRIP
                        <ArrowUpRight size={18} />
                    </Link>

                </div>

            </section>


            {/* =====================================================
          FINAL CTA
      ===================================================== */}

            <section className="packages-final">

                <div className="container">

                    <span>
                        YOUR DUBAI AWAITS
                    </span>

                    <h2>
                        READY TO
                        <em>ESCAPE?</em>
                    </h2>

                    <Link to="/contact">

                        PLAN YOUR JOURNEY

                        <ArrowRight size={17} />

                    </Link>

                </div>

            </section>

        </main>
    );
};

export default Packages;

