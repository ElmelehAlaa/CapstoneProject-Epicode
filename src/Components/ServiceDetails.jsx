import { Button, Container } from "react-bootstrap";
import ListService from "./ListService";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const [serviceDetails, setServiceDetails] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const handlePrenotaClick = () => {
    navigate("/prenotazione-servizio", { state: params.id });
  };

  useEffect(() => {
    console.log(params.id);
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/servizi/${params.id}/list-services`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const result = await response.json();
        setServiceDetails(result);
      } catch (error) {
        console.error("Error fetching service details:", error);

        navigate("/pagina-di-errore");
      }
    };

    fetchServiceDetails();
  }, [params, navigate]);

  return (
    <Container fluid>
      {serviceDetails !== null ? (
        <>
          {serviceDetails.map((service, index) => (
            <div key={index}>
              <h3 className="hServiceDetails">{service.title}</h3>
              <ListService imageUrl={service.imageUrl} description={service.description} reverse={index % 2 === 1} />
            </div>
          ))}
          <Button className="buttonPrenota" onClick={handlePrenotaClick}>
            Prenota Ora il tuo servizio!
          </Button>
        </>
      ) : (
        <div>Caricamento...</div>
      )}
    </Container>
  );
};

export default ServiceDetails;
