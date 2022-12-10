import React, { Component } from 'react'

class HeaderComponents extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
  render() {
    return (
      <div>
        <header className='navbar navbar-expand-md navbar-dark bg-primary'>
            <div><a href='http://employeeservice.com' className='navbar-brand'>Employee Managment App</a></div>
        </header>
      </div>
    )
  }
}
export default HeaderComponents