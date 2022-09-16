import React from "react";
import {
  Container,
  NavItem,
  Navbar,
  NavbarBrand,
  Nav,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
function UserList() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <Navbar color="dark" dark>
        <Container>
          <NavbarBrand> My Team </NavbarBrand>
          <Nav>
            <NavItem>
              <Link to="/voucher-entry-create" className="btn btn-primary ">
                Add User
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
      <ListGroup className="mt-4">
        <ListGroupItem>
          <strong> User One </strong>
          <div className="ml-auto">
            <Link to="/voucher-entry-edit/1" className="btn btn-warning mr-1">
              Edit
            </Link>
            <Button color="danger"> Delete </Button>
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default UserList;
