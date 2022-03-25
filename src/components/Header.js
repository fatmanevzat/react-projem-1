import React, { Component } from "react";
import { Container, Menu, Image, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { fixedMenuStyle, menuStyle } from "../helpers/styleHelpers";

export default class Header extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  };
  render() {
    const { menuFixed } = this.state;
    return (
      <div>
        <Menu
          borderless
          fixed={menuFixed ? "top" : undefined}
          style={menuFixed ? fixedMenuStyle : menuStyle}
        >
          <Container text>
            <Menu.Item>
              <Link to="*">
                <Image
                  size="mini"
                  src="https://img1.pngindir.com/20180325/ewq/kisspng-human-resources-businessperson-outsourcing-business-5ab81877700616.1026641215220143274589.jpg"
                  className="applogo"
                />
              </Link>
            </Menu.Item>
            <Link to="*">
              <Menu.Item header>Home</Menu.Item>
            </Link>

            <Menu.Item>
              <Dropdown text="Candidates" pointing className="link item">
                <Dropdown.Menu>
                  <Link to="/candidates">
                    <Dropdown.Item>MyList</Dropdown.Item>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Menu.Item>
              <Dropdown text="About" pointing className="link item">
                <Dropdown.Menu>
                  <Link to="/About">
                    <Dropdown.Item>Tarihçe</Dropdown.Item>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }
}
