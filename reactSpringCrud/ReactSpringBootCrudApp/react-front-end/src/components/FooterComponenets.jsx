import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactstrap'

class FooterComponents extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
  render() {
    return (
      <div className='text-center'>
        <div className='footer bg-primary fixed-bottom'>
            <p>Employee App@2022 All right reserved </p>
        </div>
      </div>
    )
  }
}
export default FooterComponents