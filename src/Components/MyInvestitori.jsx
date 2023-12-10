import { Container } from "react-bootstrap";
import ListService from "./ListService";

const MyInvestitori = () => {
  return (
    <>
      <Container fluid>
        <h3 style={{ fontSize: "60px", color: "orange" }}>Servizi agli Investitori</h3>
        <ListService
          title="Sponsorizzazioni e Partnership"
          imageUrl="https://img.freepik.com/premium-vector/sponsor-gold-vector-emblem-sponsor-label-stamp_545399-2786.jpg"
          description="Identificare opportunità di sponsorizzazione o partnership tra investitori e squadre, organizzazioni o eventi esportivi, aiutando gli investitori a ottenere visibilità nel settore e a massimizzare il rendimento del loro investimento."
        />
        <ListService
          title="Valutazioni e Due Diligence"
          imageUrl="https://wevalue.ch/wp-content/uploads/2020/11/Due-Diligence.jpg"
          description="Effettuare valutazioni e analisi della due diligence su potenziali opportunità di investimento, fornendo informazioni chiave per valutare la solidità finanziaria, la gestione e il potenziale di crescita delle organizzazioni o aziende coinvolte negli esports."
        />
        <ListService
          title="Consulenza Strategica per Investimenti"
          imageUrl="https://usercontent.one/wp/www.thewhiteswan.eu/wp-content/uploads/2017/08/Supporto-al-business.jpg"
          description="Fornire consulenza strategica agli investitori sulla base delle dinamiche specifiche del settore degli esports, aiutandoli a prendere decisioni informate e a sviluppare strategie di investimento a lungo termine."
          reverse
        />
        <ListService
          title="Ricerca di Mercato e Trend Settoriale"
          imageUrl="https://www.showtechies.com/wp-content/uploads/2021/01/ShowTechies_2021_E-Sport_numeri_record_guadagni_NewZoo_stat.jpg"
          description="Condurre ricerche approfondite sui trend del settore, la demografia degli utenti, l'evoluzione della tecnologia e altre variabili chiave per fornire agli investitori una visione chiara del panorama degli esports."
        />
      </Container>
    </>
  );
};
export default MyInvestitori;
