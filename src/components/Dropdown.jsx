import React from "react";
import { Col, Form, FormControl, InputGroup } from "react-bootstrap";

export default function Dropdown({ title, options, minmax }) {

  return (

    <Form.Row className="align-items-center">
      <Form.Label column sm={2}>{title}</Form.Label>
      <Col sm={3} className="my-1">
        <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
          {title}
        </Form.Label>
        <Form.Control
          as="select"
          className="mr-sm-2"
          id="inlineFormCustomSelect"
          custom
        >
          <option key={title} value="0">Choose...</option>
          {options}
        </Form.Control>
      </Col>

      {minmax &&
        <>
          <Col sm={2}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Min</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="number"
                min={0}
                aria-label="Min"
                // aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </Col>
          <Col sm={2}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Max</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="number"
                min={1}
                aria-label="Max"
                // aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </Col>
        </>
      }

     </Form.Row>
  )
}