// React Stuff  
import React, { Component } from 'react';
import {Grid, Row, Thumbnail, Button, Col} from "react-bootstrap";

class Thumbnails extends Component{
  render(){
    return(
      <Grid>
        <Row>
        <Col xs={6} md={4}>
          <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        </Row>
      </Grid>
    )
  }
}
export default Thumbnails;