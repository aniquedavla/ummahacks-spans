import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import Slider from "@material-ui/core/Slider";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
class Rate extends Component {
  render() {
    return (
      <div>
        <h1>San Jose State University</h1>
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
        </Form>
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
        <Form style={{ textAlign: "left", paddingLeft: "10px" }}>
          {["checkbox"].map((type) => (
            <div key={`Halal options?`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Wudu Area?`}
              />
            </div>
          ))}
        </Form>
        <div style={{ textAlign: "left" }}>
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
        </div>

        <Form style={{ textAlign: "left", paddingLeft: "10px" }}>
          {["checkbox"].map((type) => (
            <div key={`Muslim Leadership?`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Muslim Leadership?`}
              />
            </div>
          ))}
        </Form>
        <div style={{ textAlign: "left" }}>
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
        </div>

        <Form style={{ textAlign: "left", paddingLeft: "10px" }}>
          {["checkbox"].map((type) => (
            <div key={`Muslim Leadership?`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Clothing Flexibility?`}
              />
            </div>
          ))}
        </Form>
        <div style={{ textAlign: "left" }}>
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
        </div>

        <Form style={{ textAlign: "left", paddingLeft: "10px" }}>
          {["checkbox"].map((type) => (
            <div key={`Halal options?`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Halal Options?`}
              />
            </div>
          ))}
        </Form>
        <Form style={{ textAlign: "left", paddingLeft: "10px" }}>
          {["checkbox"].map((type) => (
            <div key={`Halal options?`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Hijab Friendly?`}
              />
            </div>
          ))}
        </Form>
        <Form style={{ textAlign: "left", paddingLeft: "10px" }}>
          {["checkbox"].map((type) => (
            <div key={`Beard options?`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Beard Friendly?`}
              />
            </div>
          ))}
        </Form>
        <Form style={{ textAlign: "left", paddingLeft: "10px" }}>
          {["checkbox"].map((type) => (
            <div key={`Beard options?`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Muslim Celebrations?`}
              />
            </div>
          ))}
        </Form>
        <Form style={{ textAlign: "left", paddingLeft: "10px" }}>
          {["checkbox"].map((type) => (
            <div key={`Beard options?`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`Muslim Woman Leadership?`}
              />
            </div>
          ))}
        </Form>

        <br />
        <Link to="/thanks">
          <Button> Submit</Button>
        </Link>

        <br />
        <br />
      </div>
    );
  }
}

export default Rate;
