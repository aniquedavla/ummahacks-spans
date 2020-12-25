import React, { Component } from "react";

import {Form, FormGroup} from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Slider from "@material-ui/core/Slider";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


class Rate extends Component {
  constructor(props){
    super(props)
    this.state = ({
      "schoolName": "San Jose State Univerisity", //this.props.schoolName,
    });
  }
  render() {
    return (
      <div>
        <h1>Rate: {this.state.schoolName}</h1>
        <Form style={{ textAlign: "left", paddingLeft: "10px" }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              style={{ width: "400px" }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          {["checkbox"].map((type) => (
            <div key={`Halal options?`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Prayer Space options?`}
               />
            </div>
          ))}
        
        <div style={{ textAlign: "left" }}>
          <h3 style={{ textAlign: "left", paddingLeft: "20px" }}>
            Rate Prayer Space
          </h3>
          <Slider
            style={{ width: "600px", textAlign: "left", paddingLeft: "20px" }}
            defaultValue={3}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={0}
            max={5}
            valueLabelDisplay="auto"
          />
        </div>
        <FormGroup style={{ textAlign: "left", paddingLeft: "10px" }}>
          {["checkbox"].map((type) => (
            <div key={`Halal options?`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Wudu Area?`}
              />
            </div>
          ))}
        </FormGroup>
      
        <FormGroup style={{ textAlign: "left" }}>
          <h3 style={{ textAlign: "left", paddingLeft: "20px" }}>
            Rate Wudu Area
          </h3>
          <Slider
            style={{ width: "600px", textAlign: "left", paddingLeft: "20px" }}
            defaultValue={3}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={0}
            max={5}
            valueLabelDisplay="auto"
          />
        </FormGroup>

        <FormGroup style={{ textAlign: "left", paddingLeft: "10px" }}>
          {["checkbox"].map((type) => (
            <div key={`Muslim Leadership?`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Muslim Leadership?`}
              />
            </div>
          ))}
        </FormGroup>

        <FormGroup style={{ textAlign: "left" }}>
          <h3 style={{ textAlign: "left", paddingLeft: "20px" }}>
            Rate Muslim Leadership
          </h3>
          <Slider
            style={{ width: "600px", textAlign: "left", paddingLeft: "20px" }}
            defaultValue={3}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={0}
            max={5}
            valueLabelDisplay="auto"
          />
        </FormGroup>

        <FormGroup style={{ textAlign: "left", paddingLeft: "10px" }}>
          {["checkbox"].map((type) => (
            <div key={`Muslim Leadership?`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Clothing Flexibility?`}
              />
            </div>
          ))}
        </FormGroup>

        <FormGroup style={{ textAlign: "left" }}>
          <h3 style={{ textAlign: "left", paddingLeft: "20px" }}>
            Rate Clothing Flexibility
          </h3>
          <Slider
            style={{ width: "600px", textAlign: "left", paddingLeft: "20px" }}
            defaultValue={3}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={0}
            max={5}
            valueLabelDisplay="auto"
          />
        </FormGroup>

        <FormGroup style={{ textAlign: "left", paddingLeft: "10px" }}>
          {["checkbox"].map((type) => (
            <div key={`Halal options?`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Halal Options?`}
              />
            </div>
          ))}
        </FormGroup>

        <FormGroup style={{ textAlign: "left", paddingLeft: "10px" }}>
          {["checkbox"].map((type) => (
            <div key={`Halal options?`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Hijab Friendly?`}
              />
            </div>
          ))}
        </FormGroup>
        
        <FormGroup style={{ textAlign: "left", paddingLeft: "10px" }}>
          {["checkbox"].map((type) => (
            <div key={`Beard options?`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Beard Friendly?`}
              />
            </div>
          ))}
        </FormGroup>

        <FormGroup style={{ textAlign: "left", paddingLeft: "10px" }}>
          {["checkbox"].map((type) => (
            <div key={`Beard options?`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Muslim Celebrations?`}
              />
            </div>
          ))}
        </FormGroup>

        <FormGroup style={{ textAlign: "left", paddingLeft: "10px" }}>
          {["checkbox"].map((type) => (
            <div key={`Beard options?`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Muslim Woman Leadership?`}
              />
            </div>
          ))}
        </FormGroup>

        <br />
        <Link to="/thanks">
          <Button> Submit</Button>
        </Link>
      </Form>
        <br />
        <br />
      </div>
    );
  }
}

export default Rate;
