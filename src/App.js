import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "semantic-ui-react";
import Form from "./components/Form";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
import About from "./components/pages/About";
import MyList from "./components/MyList";
import Detail from "./components/Detail";

export default class App extends Component {
  render() {
    return (
      <div>
        <Container text>
          <Header></Header>
          <ImageSlider slides={SliderData} />
          <Routes>
            <Route
              path="*"
              element={
                <React.Fragment>
                  <Form></Form>
                  <Footer></Footer>
                </React.Fragment>
              }
            ></Route>

            <Route
              path="/about"
              element={
                <React.Fragment>
                  <About></About>
                </React.Fragment>
              }
            ></Route>

            <Route
              path="/candidates/*"
              element={
                <React.Fragment>
                  <MyList></MyList>
                </React.Fragment>
              }
            ></Route>

            <Route
              path="detail/:id"
              element={
                <React.Fragment>
                  <Detail />
                  <Footer></Footer>
                </React.Fragment>
              }
            />
          </Routes>
        </Container>
      </div>
    );
  }
}
