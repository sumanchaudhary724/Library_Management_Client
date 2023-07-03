import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { CustomCarousel } from "../../components/carousel/CustomCarousel";
import { useSelector } from "react-redux";
import { CustomCard } from "../../components/custom-card/CustomCard";
import { Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
const Home = () => {
  const { books } = useSelector((state) => state.bookInfo);

  console.log(books);
  return (
    <div>
      <Header />
      <section className="main">
        <CustomCarousel />

        <Container className="mt-5">
          <Row>
            <Col>
              <div className="d-flex justify-content-between">
                <div className="left">{books.length} books found</div>
                <div className="right">
                  <Form.Control placeholder="serach book by name" />
                </div>
              </div>
              <hr />
              <div className="book-list d-flex justify-content-between flex-wrap gap-3 mt-5">
                {books?.map((item) => (
                  <CustomCard key={item._id} {...item} />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
