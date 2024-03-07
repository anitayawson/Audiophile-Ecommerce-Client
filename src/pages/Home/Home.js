import "./Home.scss";
import NavBar from "../../components/NavBar/NavBar";

export default function Home() {
  return (
    <header className="header">
      <NavBar />
      <div className="header__body">
        <p className="header__overline">New Product</p>
        <h2 className="header__title">XX99 Mark II HeadphoneS</h2>
        <p className="header__description">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="header__btn">See Product</button>
      </div>
    </header>
  );
}
