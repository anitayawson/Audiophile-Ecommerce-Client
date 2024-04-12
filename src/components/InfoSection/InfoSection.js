import "./InfoSection.scss";

export default function InfoSection() {
  return (
    <section className="info-section">
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet="https://res.cloudinary.com/duepohol4/image/upload/v1710783241/Audiophile/shared/mobile/image-best-gear_kkac1u.jpg"
        />
        <source
          media="(max-width: 1279px)"
          srcSet="https://res.cloudinary.com/duepohol4/image/upload/v1710783226/Audiophile/shared/tablet/image-best-gear_pwrjfq.jpg"
        />

        <img
          className="info-section__img"
          alt="man wearing headphones"
          src="https://res.cloudinary.com/duepohol4/image/upload/v1710783232/Audiophile/shared/desktop/image-best-gear_gfhbr6.jpg"
        />
      </picture>
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
