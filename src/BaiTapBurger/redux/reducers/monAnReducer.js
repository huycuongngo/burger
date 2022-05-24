import { dataMonAn } from "../../dataMonAn";
import { THAY_DOI_SO_LUONG } from "../constants/monAn";




let burgerState = {
  dataMonAn: dataMonAn,

}

export const monAnReducer = (state = burgerState, { type, payload, value }) => {
  switch (type) {
    case THAY_DOI_SO_LUONG: {
      let index = state.dataMonAn.findIndex((item) => {
        return item.maSP === payload
      })

      if (index !== -1) {
        let cloneMonAn = [...state.dataMonAn];

        // console.log("soluong", cloneMonAn[index].soLuong);
        // console.log("type", type);
        // console.log("payload", payload);
        // console.log("value", value);
        

        cloneMonAn[index].soLuong += value;

        cloneMonAn[index].soLuong === 0 && cloneMonAn.splice(index, 1);


        state.dataMonAn = cloneMonAn;

        return { ...state };
      }
    }

    default: {
      return state;
    }
  }
};