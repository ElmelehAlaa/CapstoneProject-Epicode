import { Link } from "react-router-dom";

const ServiceSlider = ({ data }) => {
  return (
    <>
      <div className="slider">
        <div className="slide-track">
          {data ? (
            data.map((item, index) => (
              <>
                <div key={index} className="slide">
                  <Link to={`/servizi/${item.id}`}>
                    <img className="img-slide" src={item.imgUrl} alt={`service-img-${index}`} />
                  </Link>
                </div>
              </>
            ))
          ) : (
            <div>caricamento</div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceSlider;
