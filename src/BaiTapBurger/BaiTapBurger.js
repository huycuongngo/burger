import React, { Component } from 'react'
import MenuBurger from './MenuBurger';

var dataMonAn = [
  {
    "maSP": 1,
    "tenSP": "salad",
    "giaBan": 10,
    "soLuong": 1
  },
  {
    "maSP": 2,
    "tenSP": "cheese",
    "giaBan": 10,
    "soLuong": 1
  },
  {
    "maSP": 3,
    "tenSP": "beef",
    "giaBan": 10,
    "soLuong": 1,
  },
]

export default class BaiTapBurger extends Component {
  state = {
    dataMonAn: dataMonAn,

  };


  handleThayDoiSoLuong = (idSP, value) => {
    let index = this.state.dataMonAn.findIndex((item) => {
      return item.maSP === idSP;
    })

    if (index !== -1) {
      let cloneMonAn = [...this.state.dataMonAn];

      cloneMonAn[index].soLuong += value;

      cloneMonAn[index].soLuong === 0 && cloneMonAn.splice(index, 1);

      this.setState({
        dataMonAn: cloneMonAn,
      })
    }
  }

  render() {



    return (
      <div>

        <MenuBurger
          handleThayDoiSoLuong={this.handleThayDoiSoLuong}
          dataMonAn={this.state.dataMonAn}
        />

      </div>
    )
  }
}
