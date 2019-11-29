import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import avatar from "../images/avatar.jpg"
import jsLogo from "../images/jsLogo.svg"
import rubyLogo from "../images/ruby.svg"
import reactLogo from "../images/react.svg"
import reduxLogo from "../images/redux.svg"
import railsLogo from "../images/rails-no-words.svg"
import appleLogo from "../images/apple.svg"
import cssLogo from "../images/css3.svg"
import htmlLogo from "../images/html5.svg"
import sfLogo from "../images/salesforce.svg"
import sqlLogo from "../images/database.svg"
import shipdLogo from "../images/shipd.svg"
import amLogo from "../images/amLogo.svg"
import inventoriedLogo from "../images/inventoried.svg"
import githubLogo from "../images/github.svg"
import linkedInLogo from "../images/linkedInLogo.svg"

// import createAndFix from "../images/create-and-fix.svg"
// import growthMindset from "../images/growth-mindset.svg"
// import onTarget from "../images/on-target.svg"
// import teach from "../images/teach.svg"
// import workingWithPeople from "../images/working-with-people.svg"
import CreatorAndFixer from "../components/svg/CreatorAndFixer"
import GrowthMindset from "../components/svg/GrowthMindset"
import WorkWithPeople from "../components/svg/WorkWithPeople"
import ReactBootstrap from "../components/svg/ReactBootstrap"
import Teach from "../components/svg/Teach"


export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="RoddenDev"/>
        <section className="page-section bg-primary" id="why">
          <div className="container">
            <h2 className="text-center text-white">Let's start with Why</h2><br/>
            <hr className="divider light my-4"/>
            <h3 style={{paddingTop: "25px"}} className="text-center text-white-75">Why work with me?</h3><br/>
            <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                  <WorkWithPeople />
                  <h3 style={{paddingTop: "10px"}} className="h4 mb-2 text-white">People Knowledge</h3>
                  <p className="text-white-75 mb-0">Not only am I technically proficient, but I'm emotionally intelligent too</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <CreatorAndFixer />
                  <h3 className="h4 text-white mb-2">Creator & Fixer</h3>
                  <p className="text-white-75 mb-0">I <em>love</em> creating new apps and features <strong><em>and</em></strong> squashing bugs</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <GrowthMindset />
                  <h3 style={{paddingTop: "10px"}} className="h4 text-white mb-2">Growth Mindset</h3>
                  <p className="text-white-75 mb-0">I embrace a <a style={{textDecoration: "underline"}} className="text-white-75" href="https://youtu.be/M1CHPnZfFmU">growth mindset</a> and <em>love</em> learning.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <Teach />
                  <h3 className="h4 mb-2 text-white">Good Teacher</h3>
                  <p className="text-white-75 mb-0">I enjoy teaching others and translating tech-speak into laymen's terms</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="skills">
          <div className="container">
            <h2 style={{paddingBottom: "25px"}} className="text-center mt-0">Knowledgeable</h2>
            <hr className="divider my-4"/>
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <img 
                    src={rubyLogo}
                    style={{paddingBottom: "20px"}}
                    alt="ruby logo"
                  />
                  <h3 className="h4 mb-2">Ruby</h3>
                  <p className="text-muted mb-0">Ruby is a <em>gem</em> of a language </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <img 
                    src={railsLogo}
                    style={{paddingBottom: "20px"}}
                    alt="rails logo"
                  />
                  <h3 className="h4 mb-2">Rails</h3>
                  <p className="text-muted mb-0">Worked with Rails 4 and 5</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <img 
                    src={jsLogo}
                    style={{paddingBottom: "20px"}}
                    alt="js logo"
                  />
                  <h3 className="h4 mb-2">JavaScript</h3>
                  <p className="text-muted mb-0">JS makes things so wonderfully interactive</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <img 
                    src={reactLogo}
                    style={{paddingBottom: "10px"}}
                    alt="react logo"
                  />
                  <h3 className="h4 mb-2">React</h3>
                  <p className="text-muted mb-0">Components are wonderfully modular things</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <img 
                    src={reduxLogo}
                    style={{paddingBottom: "10px"}}
                    alt="redux logo"
                  />
                  <h3 className="h4 mb-2">Redux</h3>
                  <p className="text-muted mb-0">Helps my React Components share with one another</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <img 
                    src={sqlLogo}
                    style={{paddingBottom: "10px"}}
                    alt="SQL logo"
                  />
                  <h3 className="h4 mb-2">SQL</h3>
                  <p className="text-muted mb-0">Specifically used PostgreSQL AND SQLite Databases</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <img 
                    src={htmlLogo}
                    style={{paddingBottom: "10px"}}
                    alt="HTML5 logo"
                  />
                  <h3 className="h4 mb-2">HTML5</h3>
                  <p className="text-muted mb-0">Good ol' HTML</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <img 
                    src={cssLogo}
                    style={{paddingBottom: "10px"}}
                    alt="CSS3 logo"
                  />
                  <h3 className="h4 mb-2">CSS3</h3>
                  <p className="text-muted mb-0">CSS makes things look good</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-dark" id="portfolio">
          <div className="container-fluid" style={{paddingRight: "2rem", paddingLeft: "2rem"}}>
            <h2 className="text-center text-white">Examples of My Work</h2><br/>
            <hr className="divider light my-4"/>        
            <div className="card-deck">
              <div className="card" style={{border: "10px solid grey", minWidth: "3in", margin: "20px"}}>
                <div className="header text-center">
                  <img height="92px" className="card-img-top" src={shipdLogo} alt="Shipd Logo" style={{paddingTop: "30px"}} />
                </div>
                <div className="card-body">
                  <p className="card-text">Shipd was built with a Print and Ship retail store or a small ebay business in mind.<br /><br />
                  With Shipd, you can keep track of the packages processed and get reports on them.<br /><br />  
                  <small>This is a demo site so feel free to create some packages and run some reports!</small></p>
                </div>
                <div className="card-footer bg-transparent">  
                  <a className="btn btn-dark btn-lg" target="_blank" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} href="http://www.shipdsoft.net">Try It Out! </a>
                </div>
              </div>
              <div className="card" style={{border: "10px solid grey", minWidth: "3in", margin: "20px"}}>
                <div className="header text-center">
                  <img height="100px" className="card-img-top" src={amLogo} alt="AutoMaintainer Logo" style={{paddingTop: "30px", paddingRight: "25px", paddingLeft: "25px"}} />
                </div>
                <div className="card-body">
                  <p className="card-text">AutoMaintainer was created to help people keep track of maintenance done on vehicles in a quick simple way.<br /><br />

                  With AutoMaintainer, you can create up vehicles and then associate maintenance events to them<br /><br />
                  
                  <small>This is a demo site so feel free to create some vehicles and some maintenance items!</small></p>
                </div>
                <div className="card-footer bg-transparent">
                  <a className="btn btn-dark btn-lg" target="_blank" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} href="http://www.automaintainer.net">Try It Out! </a>
                </div>
              </div>
              <div className="card" style={{border: "10px solid grey", minWidth: "3in", margin: "20px"}}>
                <div className="header text-center">
                  <img height="95px" className="card-img-top" src={inventoriedLogo} alt="Inventoried Logo" style={{paddingTop: "30px", paddingRight: "20px", paddingLeft: "20px"}} />
                </div>
                <div className="card-body">
                  <p className="card-text">Inventoried was designed to keep track of locations, items, and what all locations an item is stocked.<br /><br />

                    With Inventoried, you can create up locations and add items to them.  You can also see the total number of an item across all your locations.<br /><br />
                    
                    <small>This is a demo site so feel free to create some locations and items!</small></p>            
                </div>
                <div className="card-footer bg-transparent">
                  <a className="btn btn-dark btn-lg" target="_blank" style={{display: "block", marginLeft: "auto", marginRight: "auto"}} href="http://www.inventoried.net">Try It Out!</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <img 
                  src={avatar} 
                  alt="of Jeremiah" 
                  style={{ borderRadius: "50%", height: "15rem", width: "15rem", margin: "20px" }}
                />
                
                <p className="text-muted mb-5">Ready to start your next project with me? <br /><br /> Give me a call or send me an
                  email <br /> and I'll get back to you as soon as possible!</p>
              </div>
            </div>
            
            
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                  <div>+1 ‪(970) 833-1201‬</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <img 
                    src={linkedInLogo}
                    alt="LinkedIn logo"
                    style={{marginBottom: "16px"}}
                  />
                  <a className="d-block" href="https://www.linkedin.com/in/jrodden1">linkedin.com/in/jrodden1</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                  <a className="d-block" href="mailto:jrodden1.github@gmail.com">jrodden1.github@gmail.com</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <img 
                    className="text-muted"
                    src={githubLogo}
                    alt="github logo"
                    style={{marginBottom: "16px"}}
                  />
                  <a className="d-block" href="https://github.com/jrodden1">github.com/jrodden1</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
