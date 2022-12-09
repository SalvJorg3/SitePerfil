

import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import studying from './img/studying.png';
import styles from './modules.css/AboutMe.module.css';

function AboutMe() {
  return (
    <div className = {styles.fundo1}>
        
        <Row>
            <Col className= {styles.titulo} xs="6">
              <Box>Olá, meu nome é Jorge Fernando: estudo e trabalho com desenvolvimento de software!</Box>
            </Col>

            <Col xs="6">
              <Box><img className={styles.image1} src={studying} alt="stydying"></img></Box>
            </Col>
          </Row>

     </div>
    
  );
}

export default AboutMe;

const Box = props => <div className="box">{props.children} </div>;