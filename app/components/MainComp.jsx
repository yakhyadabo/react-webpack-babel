import React, { PropTypes, Component} from 'react';
import ChildComp1 from './ChildComp1.jsx';
import ChildComp2 from './ChildComp2.jsx';

export default class MainComp extends Component {

  static propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
       firstname: 'Yakhya',
       lastname: 'Dabo', 

		 friends: [
		   'Jake Lingwall',
		   'Murphy Randall',
		   'Merrick Christensen'
       ],

    };
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleFirstnameChange(event) {
    this.setState({ firstname: event.target.value });
  }

  handleLastnameChange(event) {
    this.setState({ lastname: event.target.value });
  }

  handleClick(){
    this.state.friends.push(this.state.firstname + ' ' + this.state.lastname);
    this.setState({
	    friends: this.state.friends,
       firstname: '',
       lastname: ''
	 });

  }


  render(){
	 var listItems = this.state.friends.map(function(friend){
	     return <li> {friend} </li>;
    });
    return (
      <div>
        <ChildComp1 firstname={this.state.firstname} lastname={this.state.lastname} /> <br />
         Fistname: <input type="text" value={this.state.firstname} onChange={this.handleFirstnameChange} /> <br />
         Lastname: <input type="text" value={this.state.lastname} onChange={this.handleLastnameChange} /> <br />
         
			<button onClick={this.handleClick}>Send</button>

        <ChildComp2 friends={listItems} />
      </div>
    )
  }
}
