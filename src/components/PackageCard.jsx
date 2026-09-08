import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const PackageCard = ({ packageData }) => {
  return (
    <article
      className={`package-card ${
        packageData.featured ? "featured-package" : ""
      }`}
    >

      {packageData.featured && (
        <span className="package-badge">
          MOST POPULAR
        </span>
      )}

      <div className="package-image">

        <img
          src={packageData.image}
          alt={packageData.title}
        />

      </div>

      <div className="package-content">

        <span className="package-duration">
          {packageData.duration}
        </span>

        <h3>{packageData.title}</h3>

        <p>{packageData.description}</p>

        <ul>
          {packageData.includes.map((item, index) => (
            <li key={index}>
              <Check size={14} />
              {item}
            </li>
          ))}
        </ul>

        <div className="package-bottom">

          <div>
            <small>FROM</small>
            <strong>{packageData.price}</strong>
          </div>

          <Link to="/contact">
            Explore
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>

    </article>
  );
};

export default PackageCard;