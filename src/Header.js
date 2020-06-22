class Header extends React.Component {
  state = {
    showNav: false
  }

  componentDidUpdate() {
    this.state.showNav ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"
    this.state.showNav ? document.body.style.height = "100vh" : document.body.style.height = "auto"
  }

  handleNavBtn = () => {
    this.setState({
      showNav: !this.state.showNav
    })
  }

  render() {
    return (
      <>
        <div className={`headerWrapper ${this.state.showNav ? 'shadowWrapper' : null}`} >
          <img src="./images/logo.svg" className="header__logo" />
          <img src={`${this.state.showNav ? "../images/icon-close.svg" : "../images/icon-hamburger.svg"}`}
            className="header__navBtn"
            onClick={this.handleNavBtn} />
          <Nav showNav={this.state.showNav} />
          <button className="button invisible">Get Started</button>
        </div>
      </>
    )
  }
}

const Nav = props => {
  return (
    <div className={`header__nav ${props.showNav ? null : 'invisible'}`}>
      <ul className="header__navItems">
        <li className="header__navItem">Pricing</li>
        <li className="header__navItem">Product</li>
        <li className="header__navItem">About Us</li>
        <li className="header__navItem">Careers</li>
        <li className="header__navItem">Community</li>
      </ul>
    </div>)
}

ReactDOM.render(<Header />, document.getElementById('header'))