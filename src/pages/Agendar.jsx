import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import Formato from '../components/agendar/Formato';



export default function Agendar() {
    return (
        <div >

            <h2>
                Agenda tu cita
            </h2>
            <hr></hr>
            <Formato></Formato>
        </div>
    )
}
