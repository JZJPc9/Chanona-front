import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/allstyles.css"

function FooterBasic () {
    return(
        <footer className="text-center py-4" style={{background: "#d2c5b5"}}>
            <Container>
                <Row className="row-cols-1 row-cols-lg-3">
                    <Col>
                        <p className="text-muted my-2">SaulXavier Chanona Hernandes</p>
                    </Col>
                    
                    <Col>
                        <p className="text-muted my-2"></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterBasic;