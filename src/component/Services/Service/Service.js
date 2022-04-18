import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Swevice.css";
const Service = () => {
  return (
    <div className="container mt-5 cardgrid">
      <Card
        style={{ width: "18rem" }}
        className="shadow-sm p-3 mb-5 bg-body rounded"
      >
        <Card.Body>
          <Card.Title> Dr. Mahamud Riyad Foysal</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            MBBS, FCPS (Anesthesia)
          </Card.Subtitle>
          <p> Dhaka Medical College & Hospital</p>
          <Card.Text> Mobile : 01706555719</Card.Text>
          <Card.Text> Email : mahamud1@gmail.com</Card.Text>
          <Card.Link as={Link} to="/checkout" className="text-decoration-none">
            more service...
          </Card.Link>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "18rem" }}
        className="shadow-sm p-3 mb-5 bg-body rounded"
      >
        <Card.Body>
          <Card.Title> Dr. Mahamud Riyad Foysal</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            MBBS, FCPS (Anesthesia)
          </Card.Subtitle>
          <p> Square Hospital Ltd, Dhaka</p>
          <Card.Text> Mobile : 01706555719</Card.Text>
          <Card.Text> Email : mahamud2@gmail.com</Card.Text>
          <Card.Link as={Link} to="/checkout" className="text-decoration-none">
            more service...
          </Card.Link>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "18rem" }}
        className="shadow-sm p-3 mb-5 bg-body rounded"
      >
        <Card.Body>
          <Card.Title> Dr. Mahamud Riyad Foysal</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            MBBS, FCPS (Anesthesia)
          </Card.Subtitle>
          <p> Bangladesh Medical College & Hospital</p>
          <Card.Text> Mobile : 01706555719</Card.Text>
          <Card.Text> Email : mahamud3@gmail.com</Card.Text>
          <Card.Link as={Link} to="/checkout" className="text-decoration-none">
            more service...
          </Card.Link>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "18rem" }}
        className="    shadow-sm p-3 mb-5 bg-body rounded"
      >
        <Card.Body>
          <Card.Title> Dr. Mahamud Riyad Foysal</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            MBBS, FCPS (Anesthesia)
          </Card.Subtitle>
          <p> Mymenshing Medical College & Hospital</p>
          <Card.Text> Mobile : 01706555713</Card.Text>
          <Card.Text> Email : mahamud4@gmail.com</Card.Text>
          <Card.Link as={Link} to="/checkout" className="text-decoration-none">
            more service...
          </Card.Link>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "18rem" }}
        className="  shadow-sm p-3 mb-5 bg-body rounded"
      >
        <Card.Body>
          <Card.Title> Dr. Mahamud Riyad Foysal</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            MBBS, FCPS (Anesthesia)
          </Card.Subtitle>
          <p>Netrakona Medical College & Hospital</p>
          <Card.Text> Mobile : 01706555712</Card.Text>
          <Card.Text> Email : mahamud5@gmail.com</Card.Text>
          <Card.Link as={Link} to="/checkout" className="text-decoration-none">
            more service...
          </Card.Link>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "18rem" }}
        className="  shadow-sm p-3 mb-5 bg-body rounded"
      >
        <Card.Body>
          <Card.Title> Dr. Mahamud Riyad Foysal</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            MBBS, FCPS (Anesthesia)
          </Card.Subtitle>
          <p> Evercare Hospital, Dhaka</p>
          <Card.Text> Mobile : 01706555711</Card.Text>
          <Card.Text> Email : mahamud6@gmail.com</Card.Text>
          <Card.Link as={Link} to="/checkout" className="text-decoration-none">
            more service...
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
