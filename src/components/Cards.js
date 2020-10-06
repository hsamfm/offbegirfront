import React from "react";
import {Card, Button} from "react-bootstrap";
import rice from "../images/rice.jpg"

export default () => (
  <Card style={{width: '18rem'}}>
    <Card.Img variant="top" src={rice}/>
    <Card.Body dir="rtl">
      <Card.Title>برنج فروش ویژه</Card.Title>
      <Card.Text>
        <p style={{color:'red'}}> تخفیف ۰ درصد</p>
        <p className="time_item">زمان نا محدود</p>
      </Card.Text>
      <Button variant="warning">خرید</Button>
    </Card.Body>
  </Card>
)
