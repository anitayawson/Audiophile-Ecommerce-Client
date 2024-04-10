import "./InfoSection.scss";

export default function InfoSection() {
  return (
    <section className="info-section">
      <img
        className="info-section__img"
        src="https://res.cloudinary.com/duepohol4/image/upload/v1710783226/Audiophile/shared/tablet/image-best-gear_pwrjfq.jpg"
        srcSet="https://res.cloudinary.com/duepohol4/image/upload/v1710783241/Audiophile/shared/mobile/image-best-gear_kkac1u.jpg 654w, https://res.cloudinary.com/duepohol4/image/upload/v1710783226/Audiophile/shared/tablet/image-best-gear_pwrjfq.jpg 1378w"
        sizes="(max-width: 767px) 654px,
        1378px"
        alt="man wearing headphones"
      />
      <div className="info-section__body">
        <h4 className="info-section__title">
          Bringing you the <span>best</span> audio gear
        </h4>
        <p className="info-section__description">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}
