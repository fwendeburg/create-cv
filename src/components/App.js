import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Main from './Main';
import PrintPage from './PrintPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'normal',
      printPage: <PrintPage info={{}}/>
    }

    this.handlePrintMode = this.handlePrintMode.bind(this);
  }

  handlePrintMode(infoObj) {
    this.setState({printPage: <PrintPage info={infoObj}/>, mode: 'print'});

    // Lets the information to print render first before opening printing dialog.
    setTimeout(function(){ window.print(); }, 200);
  }

  render() {
    return (
      <>
        <Navbar/>
        <Main enterPrintModeFn={this.handlePrintMode}/>
        <Footer/>
        {this.state.mode === 'print'? this.state.printPage : null}
      </>
    );
  }
}

export default App;
