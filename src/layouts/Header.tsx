import Social from "../components/Social";

const Header = () => {
  return (
    <header id="main-header">
      <div className="container d-flex justify-content-between">
        <p>
          Projet réalisé par Xuan-Tam H. <strong>(React + TypeScript)</strong>
        </p>
        <Social />
      </div>
    </header>
  );
};

export default Header;
