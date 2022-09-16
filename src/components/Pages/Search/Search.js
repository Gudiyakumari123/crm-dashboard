import React, { Fragment, useEffect, Component } from "react";
import Header from "../../../shared/Header/Header";
import SubHeader from "../../../shared/SubHeader/SubHeader";
import Footer from "../../../shared/Footer/Footer";

import "./Search.scss";

import { Form, Button, Row, Col, Container } from "react-bootstrap";
import Loading from "../../../shared/Loading/Loading";

class Search extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      items: [],
      loading: false,
      query: "",
    };
  }
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          loading: true,
        });
      });
  }

  render() {
    const { loading, items, query } = this.state;
    if (!loading)
      return (
        <div>
          <Loading />
        </div>
      );

    console.log(
      "Data::",
      items.filter((index) => index.name.includes(query))
    );

    return (
      <Fragment>
        <Header />
        <SubHeader />
        <div className="form-container">
          <div className="form-content">
            <Container>
              <div className="head"> Search Details </div>
              <div className="search-content">
                <i className="bx bx-search-alt-2"></i>
                <input
                  type="text"
                  placeholder="Search Here..."
                  className="form-control search-box "
                  onChange={(e) => this.setState({ query: e.target.value })}
                />
              </div>

              <div className="search-list-container">
                <div className="sl__content">
                  <table>
                    <thead>
                      <tr>
                        <th> ID </th>
                        <th>Customer Name </th>
                        <th>Software Details </th>
                        <th>BalAmt </th>
                        <th>Start Date </th>
                        <th>Due Date </th>
                        <th> Actions </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr>
                        <td> 1 </td>
                        <td> XXXX </td>
                        <td> CRM </td>
                        <td> 20000 </td>
                        <td> 10/05/2022 </td>
                        <td> 10/08/2022 </td>
                        <td>
                          <Button> Pay Now </Button>
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> XXXX </td>
                        <td> CRM </td>
                        <td> 20000 </td>
                        <td> 10/05/2022 </td>
                        <td> 10/08/2022 </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> XXXX </td>
                        <td> CRM </td>
                        <td> 20000 </td>
                        <td> 10/05/2022 </td>
                        <td> 10/08/2022 </td>
                      </tr> */}
                      {items
                        .filter((index) =>
                          index.name.toLowerCase().includes(query)
                        )
                        .map((index) => (
                          <tr>
                            <td> {index.id} </td>
                            <td> {index.name} </td>
                            <td> {index.username} </td>
                            <td> {index.email} </td>
                            <td> {index.address.city} </td>
                            <td> {index.website} </td>
                            <td>
                              <Button className="btn-pay"> Pay Now </Button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Search;
