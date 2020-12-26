import React from 'react';
import { Container, CardDeck } from 'react-bootstrap';
import CardTemplate from './Card';
import Jumbo from './Jumbo';


export default function Home({title1, ready1, diet1, image1, title2, ready2, diet2, image2, title3, ready3, diet3, image3}) {
  return (
    <Container>

      <Jumbo title={"Welcome!"} text={"Our mission is to empower you to create delicious meals according to your tastes, diets, or even your food intolerances. Take a look at what we can offer you!"}/>

      <h3>Featured recipes:</h3>
      <CardDeck>
        <CardTemplate title={title1} ready={ready1} diet={diet1} image={image1}/>
        <CardTemplate title={title2} ready={ready2} diet={diet2} image={image2}/>
        <CardTemplate title={title3} ready={ready3} diet={diet3} image={image3}/>
      </CardDeck>

    </Container>
  )
}
