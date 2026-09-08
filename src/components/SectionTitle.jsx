const SectionTitle = ({
  eyebrow,
  title,
  highlight,
  description,
}) => {
  return (
    <div className="section-title">

      <span className="section-title-eyebrow">
        {eyebrow}
      </span>

      <h2>
        {title}
        {highlight && (
          <>
            <br />
            <em>{highlight}</em>
          </>
        )}
      </h2>

      {description && <p>{description}</p>}

    </div>
  );
};

export default SectionTitle;