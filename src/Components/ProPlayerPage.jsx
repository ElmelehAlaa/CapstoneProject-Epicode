import { Container } from "react-bootstrap";
import ListService from "./ListService";

const ProPlayerPage = () => {
  return (
    <>
      <Container fluid>
        <ListService
          title="AIM"
          imageUrl="https://as2.ftcdn.net/v2/jpg/01/32/26/17/1000_F_132261788_rrzWocZOIkJvUlovEF28oABVsLkngGAO.jpg"
          description="Impara ad essere più costante con le tue abilità meccaniche"
        />
        <ListService
          title="Training Fisico"
          imageUrl="https://media.gqitalia.it/photos/62419f481340d665166aaf29/16:9/w_2560%2Cc_limit/GettyImages-546127037.jpg"
          description="È fondamentale allenare il fisico oltre alla mente per poter affrontare le partite più stressanti"
          reverse
        />
        <ListService
          title="Training Mentale"
          imageUrl="https://www.olympos.it/images/mental-training.jpg"
          description="Lo studio del gioco è essenziale per poter essere il miglior player al mondo"
        />
        <ListService
          title="Visual Training"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8F7Rsk7Imc5GOtz0Kr5ruxTei6hbHafMVA&usqp=CAU"
          description="Migliora i tuoi riflessi e il saper prendere informazioni in pochi millisecondi"
          reverse
        />
        <ListService
          title="Studio del titolo"
          imageUrl="https://thumbs.dreamstime.com/b/gioco-di-scacchi-un-uomo-d-affari-con-fiducia-nelle-mani-gioca-e-guida-del-piano-analisi-dello-sviluppo-fiducioso-che-fino-al-249132971.jpg"
          description="Lo studio del gioco è essenziale per poter essere il miglior player al mondo"
        />
        <ListService
          title="Alimentazione"
          imageUrl="https://cdn.gvmnet.it/admingvm/media/immagininews/misc/VAL-sport-e-alimentazione.jpeg"
          description="Migliora i tuoi riflessi e il saper prendere informazioni in pochi millisecondi"
          reverse
        />
      </Container>
    </>
  );
};

export default ProPlayerPage;
