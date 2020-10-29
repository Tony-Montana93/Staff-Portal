import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'name, bio'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Jumbotron>
      <form onSubmit={(data) => {
    console.log(data)
      }}>
        <label>
          Name:
          <input type="text" value={this.name} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Bio:
          <textarea className="form-control" value={this.state.bio} onChange={this.handleChange} />
        </label>
        <br/>
        <span>What do you do with us? </span>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
              <label className="form-check-label" for="defaultCheck1">
                Backend
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
              <label className="form-check-label" for="defaultCheck1">
                Frontend
              </label>
            </div>
        <br/>
        <button type="submit">Submit</button>
      </form>
      </Jumbotron>
    );
  }
}

// const Info = () => {
//     return (
//         <form>
//           <div className="form-group">
//             <label for="exampleFormControlInput1">Nickname</label>
//             <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nickname"></input>
//             </div>
//             <div className="form-group">
//               <div className="form-group-prepend">
//                 <span className="form-group-text">Short bio</span>
//               </div>
//               <textarea className="form-control" aria-label="With textarea"></textarea>
//             </div>
//             <span>Gender: </span>
//             <div className="btn-group btn-group-toggle" data-toggle="buttons">
//               <label className="btn btn-info">
//                 <input type="radio" name="gender" id="option1" autocomplete="off"/> Male
//               </label>
//               <label className="btn btn-info">
//                 <input type="radio" name="gender" id="option2" autocomplete="off"/> Female
//               </label>
//               <label className="btn btn-info">
//                 <input type="radio" name="gender" id="option3" autocomplete="off"/> LGBTQ
//               </label>
//             </div>
            
//             <span>What do you do with us? </span>
//             <div className="form-check">
//               <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
//               <label className="form-check-label" for="defaultCheck1">
//                 Default checkbox
//               </label>
//             </div>
//             <div className="form-check">
//               <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
//               <label className="form-check-label" for="defaultCheck1">
//                 Default checkbox
//               </label>
//             </div>
//                     </form>
//     )
// }

export default Info;
