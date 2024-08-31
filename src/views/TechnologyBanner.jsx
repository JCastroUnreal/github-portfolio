import "./TechnologyBanner.css";

function TechnologyBanner({ imageURL, top, left, right, animationDuration }) {
  return (
    <>
      <div
        className="image-banner"
        style={{ top, left, right, animationDuration }}
      >
        <img src={imageURL} alt="Imagen" height={100} />
      </div>
    </>
  );
}

export default TechnologyBanner;
