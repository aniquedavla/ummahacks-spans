import React from 'react';
import {Grid, Button, Container} from "@material-ui/core";

export default function TwoColumnData(){
  const f
    return(
    <>
          <h3 style={{ paddingLeft: "30px" }}>Inclusive Amenities</h3>
          <Grid container>
            <Grid item>
              <img src={sajadah} style={{ height: "30px" }} />{" "}
              <h3> Prayer Space</h3>
              <br />
            </Grid>
            <Grid>
              <img src={wudu} style={{ height: "30px" }} /> <h3> Wudu Area</h3>
              <br />
            </Grid>
            <Row>
              <img src={halal} style={{ height: "30px" }} />{" "}
              <strike>
                <h3>Halal Options</h3>
              </strike>
              <br />
            </Row>
            <Row>
              <img src={hijab} style={{ height: "30px" }} />{" "}
              <h3>Hijab Friendly</h3>
              <br />
            </Row>
          </Col>
          <Col>
            <br />
            <br />
            <Row>
              <img src={beard} style={{ height: "30px" }} />
              {"  "}
              <h3>
                {" "}
                <span></span>Beard Friendly
              </h3>
              <br />
            </Row>
            <Row>
              <img src={cel} style={{ height: "30px" }} />{" "}
              <strike>
                <h3>Muslim Celebrations</h3>{" "}
              </strike>
              <br />
            </Row>
            <Row>
              <img src={lead} style={{ height: "30px" }} />{" "}
              <h3>Muslim Leadership</h3>
              <br />
            </Row>
            <Row>
              <img src={mlead} style={{ height: "30px" }} />{" "}
              <h3>Muslim Woman Leadership</h3>
              <br />
            </Row>
          </Grid>
    </>
    );
}