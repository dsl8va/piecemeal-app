import React from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap';
import { Cuisines, Diets, Intolerances, Nutrients, Vitamins } from '../utils/SearchParams';
import Dropdown from './Dropdown';
import Jumbo from './Jumbo';

const cuisine = Cuisines.map(c => <option key={c} value={c}>{c}</option>)
const diet = Diets.map(d => <option key={d} value={d}>{d}</option>)
const intolerance = Intolerances.map(i => <option key={i} value={i}>{i}</option>)
const nutrient = Nutrients.map(n => <option key={n} value={n}>{n}</option>)
const vitamin = Vitamins.map(v => <option key={v} value={v}>{v}</option>)


const handleSubmit = (e) => {
  e.preventDefault()

  // const inputs = document.getElementById("custom").elements;
  // const keyword = inputs[0].value
  // const cuisine = inputs[1].value
  // const diet = inputs[2].value
  // const intolerance = inputs[3].value
  // const nutrient = inputs[4].value
  // const nutMin = inputs[5].value
  // const nutMax = inputs[6].value
  // const vitamin = inputs[7].value
  // const vitMin = inputs[8].value
  // const vitMax = inputs[9].value

}

export default function About() {

  const searchRecipe = e => {
    e.preventDefault();

  }


  return (
    <Container>

      <Jumbo title={"Custom Search"} text={"Create your own custom search with as little or as many parameters as you want! We have recipes for every cook."}/>

      <Form id="custom" className="mt-3 mb-3" onSubmit={searchRecipe}>

         <Form.Row>
          <Form.Label column sm={2}>
            Keywords
          </Form.Label>
          <Col sm={3}>
            <Form.Control type="text" placeholder="Search keywords here..." />
          </Col>
        </Form.Row>

        <Dropdown title={"Cuisines"} options={cuisine} minmax={false}/>
        <Dropdown title={"Diets"} options={diet} minmax={false}/>
        <Dropdown title={"Intolerances"} options={intolerance} minmax={false}/>
        <Dropdown title={"Nutrients"} options={nutrient} minmax={true}/>
        <Dropdown title={"Vitamins"} options={vitamin} minmax={true}/>
        <Button className="mb-3" variant="primary" type="submit">
          Search
        </Button>
      </Form>

    </Container>
  )
}