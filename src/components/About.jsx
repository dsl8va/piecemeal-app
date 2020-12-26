import React from 'react';
import { Container, CardDeck } from 'react-bootstrap';
import CardTemplate from './Card';
import Jumbo from './Jumbo';
import CollapseDetail from './CollapseDetail';

const Details = require('../components/AboutDetails')

export default function Home({title1, ready1, diet1, image1, title2, ready2, diet2, image2, title3, ready3, diet3, image3}) {
  return (
    <Container>

      <Jumbo title={"About"} text={"Our mission is simple - we make cooking easy and we made piecemeal with every cook in mind. Below you will find the ways in which you can find the exact recipes you're looking for."}/>

      <h3>Featured recipes:</h3>

      <div><CollapseDetail title={'Cuisines'} description={Details.Cuisines}/> </div>
      <div>  <CollapseDetail title={'Diets'} description={Details.Diets}/></div>
      <div><CollapseDetail title={'Intolerances'} description={Details.Intolerances}/> </div>
      <div> <CollapseDetail title={'Custom Search'} description={Details.CustomSearch}/></div>


    </Container>
  )
}