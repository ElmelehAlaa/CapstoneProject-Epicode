import { useSelector } from "react-redux";

import CustomCard from "./CustomCard";
import { Col, Container, Row } from "react-bootstrap";

const MyMembri = () => {
  const membersFetched = useSelector((state) => state.members.content);
  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          {membersFetched.length !== 0 ? (
            membersFetched.map((membroSingolo) => (
              <Col md={"3"} className="m-4">
                <CustomCard
                  title={membroSingolo.username}
                  backcolor="orange"
                  imageUrl={membroSingolo.urlAvatar}
                  description={membroSingolo.input}
                  key={membroSingolo.id}
                  imgMembro={membroSingolo.urlAvatar}
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
