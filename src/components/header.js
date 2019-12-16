import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from './scroller'
import Logo from './Logo.js'


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" expand="lg"
                collapseOnSelect={true}>
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top" onClick={Scroller.handleAnchorScroll}>
            <Logo width="40px" height="40px" /> RoddenDev
            </a>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy className="navbar-nav"
                           items={["why", "skills", "portfolio", "contact"]}
                           currentClassName="active" rootEl={"#mainNav"} offset={-75}>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#why" onClick={Scroller.handleAnchorScroll}>Start with Why</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#skills" onClick={Scroller.handleAnchorScroll}>Skills</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#portfolio" onClick={Scroller.handleAnchorScroll}>Portfolio</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#contact" onClick={Scroller.handleAnchorScroll}>Contact</Nav.Link>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <div style={{fill: "white", paddingTop: "10px", paddingBottom: "30px"}}>
                  <Logo width="200px" height="200px" />
                </div>  
                <h1 className="text-uppercase text-white font-weight-bold">Full Stack Web Developer</h1>
                <hr className="divider my-4"/>
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5">
                  <span role="img" aria-label="hand waving hello">👋</span> Hi there! I'm Jeremiah. <br/><br/> 
                  I'm a web developer with a passion for developing quality software that helps people, 
                  is beautiful, and is easy to use.  Keep scrolling or click on the button below to find out more!
                </p>
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#why" onClick={Scroller.handleAnchorScroll}>Find Out More</a>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
