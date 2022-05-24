import React, { Component } from 'react'
import MenuBurger from './MenuBurger';
import '../App.css';


export default class BaiTapBurger extends Component {
  

  render() {



    return (
      <div className='my-5'>
        <hr id='first-layer'/>
        <MenuBurger
          // handleThayDoiSoLuong={this.handleThayDoiSoLuong}
          // dataMonAn={this.state.dataMonAn}
        />
        <hr id='second-layer'/>
        <hr id='third-layer'/>
        <hr id='fourth-layer'/>
        <hr id='last-layer'/>
      </div>
    )
  }
}
