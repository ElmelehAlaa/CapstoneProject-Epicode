import { Container } from "react-bootstrap";
import ListService from "./ListService";

const MyOrganizzazione = () => {
  return (
    <>
      <Container fluid>
        <h3 style={{ fontSize: "60px", color: "orange" }}>Servizi ai Player</h3>
        <ListService
          title="Gestione del Team"
          imageUrl="https://intraprendere.net/wp-content/uploads/2016/11/Controllo-di-gestione.jpg"
          description="Ci occupiamo di coordinare e organizzare le attività quotidiane della squadra, garantendo una comunicazione efficace tra i membri. Ciò include la programmazione di allenamenti, incontri e attività di team building. Un buon gestore del team lavora per creare un ambiente positivo, risolvere conflitti e promuovere la coesione all'interno del gruppo."
        />
        <ListService
          title="Consulenze"
          imageUrl="https://www.andrewsaxspa.com/wp-content/uploads/2018/12/andrewsax-consulenza-di-direzione-per-aziende.jpg"
          description="Le consulenze riguardano fornire consigli e orientamento su una varietà di questioni, come strategie di gioco, sviluppo personale e carriera, gestione finanziaria e altro. Gli esperti forniscono un supporto personalizzato ai giocatori e all'organizzazione per aiutarli a superare le sfide e a prendere decisioni informate."
        />
        <ListService
          title="Preparazione tornei"
          imageUrl="https://cdn.startupitalia.eu/wp-content/uploads/sites/18/2019/08/esports-coach.jpg"
          description="La preparazione per i tornei coinvolge una serie di attività mirate a massimizzare le probabilità di successo in una competizione. Ciò include l'analisi delle squadre avversarie, lo sviluppo di strategie specifiche per il torneo, la simulazione di scenari di gioco e la gestione logistica per garantire che la squadra sia pronta e ben preparata al momento del torneo."
          reverse
        />
        <ListService
          title="Supporto Psicologico"
          imageUrl="https://www.iknoform.it/wp-content/uploads/2022/09/lui-e-lei.jpg"
          description="Il supporto psicologico si concentra sulla salute mentale e sul benessere dei giocatori. Gli esperti in questo campo lavorano con i giocatori per affrontare lo stress, l'ansia e la pressione competitiva. Forniscono anche strumenti e tecniche per migliorare la resilienza mentale, la concentrazione e la gestione delle emozioni durante le competizioni."
        />
      </Container>
    </>
  );
};
export default MyOrganizzazione;
