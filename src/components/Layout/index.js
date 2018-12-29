import React, { Component } from "react";
import Header from "../Header";
import Overlay from "../Overlay";
import SideMenu from "../SideMenu";
import Main from "../Main";


class Layout extends Component {
  state = {
    showSideMenu: false
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log(
    //   "componentDiSdUpdate",
    //   prevProps.location.pathname,
    //   this.props.location.pathname
    // );

    const { showSideMenu } = this.state;
    if (prevState.showSideMenu !== showSideMenu) {
      document.body.className = showSideMenu ? "open" : "closed";
    }

    const { pathname: prevPathname } = prevProps.location;
    const { pathname: newPathname } = this.props.location;
    if (prevPathname !== newPathname) {
      this.setState({ showSideMenu: false });
    }
  }

  showMenu = () => {
    this.setState({ showSideMenu: !this.state.showSideMenu });
  };

  render() {
    const status = this.state.showSideMenu ? "open" : "closed";
    const { children } = this.props;

    return (
      <React.Fragment>
        <Header status={status} onClick={this.showMenu} />
        <Overlay status={status} onClick={this.showMenu} />
        <SideMenu status={status} />
        <Main>{children}</Main>
      </React.Fragment>
    );
  }
}

export default Layout;
