import {Component} from "react"
import axios from "axios"

export default class App extends Component{
  constructor (){
    super();
    this.state = {
      data:{}
    }
  }

  save = (event) => {
    var btnSave = event.target;
    console.log(btnSave);
    var data2 = {FirstName : this.fristName.value,
                 LastName : this.LastName.value,
                 USerName: this.UserName.value,
                 email: this.emailbox.value,
                 password: this.passbox.value,
                 conPass : this.conPassbox.value,
                 mobile:this.phonebox.value,
                 zip:this.zipbox.value
     }

     this.setState({data : data2})
  }

 componentDidMount(){
  axios.get("http://134.209.229.112:8080").then((res) => {
    let data1 = res.data
    this.setState({data1})
    console.log(data1)
  })
 }

  render() {
    return <>
    <h1>Registration</h1>
     <div className="container">
      <div className="row">
        <div className="col-md-3">
          <input placeholder="Frist name" ref={ob => this.fristName = ob}/>
        </div>
        <div className="col-md-3">
          <input placeholder="last name" ref={ob => this.lastName = ob} />
        </div>
        <div className="col-md-3">
          <input placeholder="username" ref={ob => this.UserName = ob} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-3">
          <input placeholder="enter email" ref={ob => this.emailbox = ob} />
        </div>
        <div className="col-md-3">
          <input placeholder="enater pasword" ref={ob => this.passbox = ob}/>
        </div>
        <div className="col-md-3">
          <input placeholder="confirm password" ref={ob => this.conpasbox = ob} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-3">
          <input placeholder="Phone number" ref={ob => this.phonebox = ob} />
        </div>
        <div className="col-md-3">
          <input placeholder="ZIP Code" ref={ob => this.zipbox = ob}/>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" onClick={this.save} data-login>SUBMIT</button>
        </div>
      
      </div>
      </div>    
      <hr/>
      <div className="container mt-6">
        <h1 className="dispaly3">LOGIN</h1>
        <div className="row mt-6" >
        <div className="col-md-4">
          <input placeholder="enter email" ref={ob => this.emailbox = ob} />
        </div>
        <div className="col-md-4">
          <input placeholder="enater pasword" ref={ob => this.passbox = ob}/>
        </div>
        <div className="col-md-4">
         <button className="btn btn-success">LOGIN</button>
        </div>


        </div>
      </div>
    </>
  }
}