import React, {  useContext } from 'react'
import  { Row, Col } from 'reactstrap'
// import DatePicker from "react-datepicker"
import { ContentContext } from '../Dashboard/Context'

export default function List() {

    const { totalPacientes } = useContext(ContentContext)


    return (
        <div>
            <Row className="mb-4">
                <Col>
                    <div className='card p-4 py-6'>
                        <h1>Total Pacientes</h1>
                        <h4>{totalPacientes}</h4>
                    </div>
                </Col>
                <Col>
                    <div className='card p-4 py-6'>
                        <h1>Citas hoy</h1>
                    </div>
                </Col>
                <Col>
                    <div className='card p-4 py-6'>
                        <h1>Citas completas</h1>
                    </div>
                </Col>
                <Col>
                    <div className='card p-4 py-6'>
                        <h1>Generado</h1>
                    </div>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <div className='card p-4 py-6'>
                        <h1>Proximas Citas</h1>
                    </div>
                </Col>
                <Col>
                    <div className='card p-4 py-6'>
                        <h1>Pacientes Recientes</h1>
                    </div>
                </Col>
            </Row>


        </div>

    )
}
