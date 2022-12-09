import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import laptopWave from './img/laptopWave.png';
import styles from './modules.css/MyLife.module.css';

function MyLife() {
  return (
    <div className = {styles.fundo1}>
        
        <Row>
        <Col xs="6">
              <Box><img className={styles.image2} src={laptopWave} alt="laptopWave"></img></Box>
            </Col>
            <Col xs="6">
              <h1 className= {styles.titulo2}>Sobre mim</h1>
              <Box><p className= {styles.texto2}>Estudando sobre programação a mais de dois anos, comecei minha jornada no mundo da tecnologia através de um curso de Lógica e Programação e Algoritmos em linguagem Java
              no ano de 2020. De lá pra cá, adquiri experiência e conhecimento em Desenvolvimento Web, iniciei minha graduação de Sistemas
              de Informação e resolvi me especializar na linguagem Java.</p></Box>
            </Col>

          </Row>

     </div>
    
  );
}


const Box = props => <div className="box">{props.children} </div>;




        
    

export default MyLife;