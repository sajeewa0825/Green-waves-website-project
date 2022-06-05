import React from "react";
import Card from 'react-bootstrap/Card'
import'./contact.css'

const ContactUs=()=>{
    return(
        <div>
            <>
  {[
    
    'Secondary',
  ].map((variant) => (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '500px',height:'300px' }}
      className="mb-2"
    >
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title> Card Title </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  ))}
</>
        </div>
    )
}
export default ContactUs