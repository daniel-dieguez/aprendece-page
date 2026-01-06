import React, { Row, Col } from 'reactstrap'
import Formulario from './Form';
import List from './List';
import { ContentProvider } from './Context';

export default function Index() {
    return (
        <ContentProvider>
            <div className="page-content">
                <Row>
                    <Col lg="2" sm="2">
                    </Col>
                    <Col>
                        <div className="h1 font-weight-bolder text-uppercase text-center">
                        Dasboard
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-end" lg="2" sm="2">
                        <Formulario />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <List />
                    </Col>
                </Row>
            </div>
        </ContentProvider>

    )
}
