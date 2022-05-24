import React, { Component } from 'react'
import { connect } from 'react-redux';
import { GIAM_SO_LUONG, TANG_SO_LUONG, THAY_DOI_SO_LUONG } from './redux/constants/monAn';


class MenuBurger extends Component {

  renderMonAn = () => {

    return this.props.danhSachMonAn.map((item) => {


      return (
        <tr>
          <td>{item.tenSP}</td>
          <td>
            <button onClick={() => {
              this.props.handleThayDoiSoLuong(item.maSP, TANG_SO_LUONG);
            }} className='btn btn-success mx-2'>+</button>
            {item.soLuong}
            <button onClick={() => {
              this.props.handleThayDoiSoLuong(item.maSP, GIAM_SO_LUONG);
            }} className='btn btn-danger mx-2'>-</button>
          </td>
          <td>{item.giaBan * item.soLuong}</td>
        </tr>
      )
    })
  }




  getTongTien = () => {

    return this.props.danhSachMonAn.reduce((total, item) => {
      return total += item.soLuong * item.giaBan;
    }, 0)
  };


  renderTongTien = () => {
    return (
      <tr>
        <td></td>
        <td>Tổng tiền</td>
        <td>{this.getTongTien()}</td>
      </tr>
    )
  }


  render() {


    return (
      <div className='my-5'>
        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#exampleModal">
          Chọn Thức Ăn
        </button>
        <div className="modal fade mt-5" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div style={{ maxWidth: "60vw" }} className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Chọn thức ăn</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true"></span>
                </button>
              </div>
              <div className="modal-body">
                {/* render */}
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Thức Ăn</th>
                      <th>Số Lượng</th>
                      <th>Giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderMonAn()}
                    {this.renderTongTien()}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Thanh Toán</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



let mapStateToProps = (state) => {

  return {
    danhSachMonAn: state.monAn.dataMonAn,

  }
}

let mapDispatchToProps = (dispatch) => {

  return {
    handleThayDoiSoLuong: (idSP, value) => {
      dispatch({
        type: THAY_DOI_SO_LUONG,
        payload: idSP,
        value: value,
      })
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBurger);

