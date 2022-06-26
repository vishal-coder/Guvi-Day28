import React from "react";
import { Nav, Navbar, Container, NavDropdown, Dropdown } from "react-bootstrap";
import CartContext from "./CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";

function Header() {
  const { state, dispatch } = useContext(CartContext);
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="">Shoppers</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="">Home</Nav.Link>
          <Nav.Link href="">About</Nav.Link>
          <NavDropdown title="Shop" id="navbarScrollingDropdown">
            <NavDropdown.Item href="" disabled>
              All Products
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="" disabled>
              Popular Items
            </NavDropdown.Item>
            <NavDropdown.Item href="" disabled>
              New Arrivals
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Dropdown className="justify-content-end" align="end">
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
              <FaShoppingCart style={{ marginBottom: "5px" }} />
              &nbsp;
              <span
                className="cartCount"
                style={{ color: state.cart.length > 0 ? "green" : "red" }}
              >
                {state.cart.length}
              </span>{" "}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div className="Cart">
                {state.cart.length > 0 ? (
                  <>
                    {state.cart.map((prod) => (
                      <div className="cartItemDetails">
                        <div>{prod.title}</div>
                        <div>{prod.price}</div>
                        <AiFillDelete
                          className="deleteFromCart"
                          onClick={() => {
                            dispatch({
                              type: "remove_from_cart",
                              payload: prod,
                            });
                          }}
                        />
                      </div>
                    ))}
                  </>
                ) : (
                  <span>Cart is empty</span>
                )}
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
