import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TitlePage from './titlePage';
import Map from './map';
import Connections from './connections';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square" 
      onClick={()=> this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
		};
	}

  renderSquare(i) {
    return (<Square value={this.state.squares[i]} 
    	onClick={()=>{ this.handleClick(i)}} />
    	);
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
        </div>
      </div>
    );
  }
}

class FullPage extends React.Component {
  render(){
    return (
    <div>
      <TitlePage />
      <Map />
      <Connections />
      <div style={{height: '75vh', color: '#666666', backgroundColor: '#ffffff'}}></div>
      
      <Footer />
    </div>

    );
  }
}

// ========================================

ReactDOM.render(
  <FullPage />,
  document.getElementById('root')
);
