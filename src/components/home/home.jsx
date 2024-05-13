import { Link } from "react-router-dom";
import photo from "../../assets/ejmpei.jpeg";
import freestylePic from "../../assets/freestylePictures/t48.jpg";
import InfantPic from "../../assets/IntantilPictures/infantilPort.jpeg";
import "./home.scss";

const Home = () => {
  const categoriesData = [
    {
      name: "EVENTOS",
      photo: photo,
      description: "Bodas,graduación,cóctel,étc.",
    },
    {
      name: "PEINADOS INFANTILES",
      photo: InfantPic,
    },
  ];
  return (
    <section className="home-principal-container">
      {categoriesData.map((category) => (
        <Link to={`/${category.name}`} className="category-container">
          <div className="velo"></div>
          <img className="pick-image" src={category.photo} alt="description" />
          <div className="name-category-container">
            <p className="name">{category.name}</p>
          </div>
          {category.description && (
            <p className="description">{category.description}</p>
          )}
        </Link>
      ))}
      <Link to={"/TENDENCIAS"} className="category-container-freestyle">
        <div className="velo"></div>
        <img className="pick-image" src={freestylePic} alt="description" />
        <div className="name-category-container">
          <p className="name">TENDENCIAS</p>
        </div>
        <p className="description">
          Festival,glitter, festival,fiestas,eventos,étc.
        </p>
      </Link>
    </section>
  );
};
export default Home;
