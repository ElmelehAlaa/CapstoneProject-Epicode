import { useSelector } from "react-redux";

import CustomCard from "./CustomCard";
import { Col, Container, Row } from "react-bootstrap";

const MyMembri = () => {
  const membersFetched = useSelector((state) => state.members.content);
  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          <h3 className="text-center fs-1">I Nostri Talent</h3>
          {membersFetched.length !== 0 ? (
            membersFetched.map((membroSingolo) => (
              <Col md={"3"} key={membroSingolo.id} className="m-4">
                <CustomCard
                  title={membroSingolo.username}
                  backcolor="cornflowerblue"
                  imageUrl={membroSingolo.urlAvatar}
                  description={membroSingolo.input}
                  key={membroSingolo.id}
                  imgMembro={membroSingolo.urlAvatar}
                  height="400px"
                  width="260px"
                  widthImg="75%"
                  heightImg="350px"
                />
              </Col>
            ))
          ) : (
            <div> caricamento...</div>
          )}
        </Row>
      </Container>
    </>
  );
};
export default MyMembri;
