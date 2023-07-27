import React, { useState } from 'react'
import { actAddUser } from './duck/actions'
import { useDispatch } from 'react-redux'

export default function AddUser() {

  const dispatch = useDispatch()


  const [state, setState] = useState ({
    taikhoan: "",
    matkhau: "",
    hoten: "",
    email: "",
    maNhom: "",
    maLoaiNguoiDung: "",
  })

  const handleOnChange = (e) => {
    const {name , value} = e.target
    setState({
      ...state,
      [name]: value,
    })
  }

  const handleAddUser = (e) => {
    e.preventDefault()
    dispatch(actAddUser(state))
  }

  return (
    <div className='container'>
      <div className='form-group w-25 m-auto'>
        <h1>AddUser</h1>

        <form onSubmit={handleAddUser}>
          <div className='form-group'>
            <label>Name:</label>
            <input type="text" name="hoTen" className="form-control" onChange={handleOnChange} />
          </div>

          <div className='form-group'>
            <label>Username:</label>
            <input type="text" name="taikhoan" className="form-control" onChange={handleOnChange} />
          </div>

          <div className='form-group'>
            <label>Password:</label>
            <input type="text" name="matkhau" className="form-control" onChange={handleOnChange} />
          </div>


          <div className='form-group'>
            <label>Email:</label>
            <input type="text" name="email" className="form-control" onChange={handleOnChange} />
          </div>


          <div className='form-group'>
            <label>Phone:</label>
            <input type="text" name="soDt" className="form-control" onChange={handleOnChange} />
          </div>


          <div className='form-group'>
            <label>Group:</label>
            <input type="text" name="maNhom" className="form-control" onChange={handleOnChange} />
          </div>


          <div className='form-group'>
            <label>Type:</label>
        <select className='form-control' name='maLoaiNguoiDung' onChange={handleOnChange}>
          <option value="QuanTri">Quản Trị</option>
          <option value="KhachHang">Khách Hàng</option>
        </select>

            </div>

          <div className='form-group'>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>

        </form>
      </div>
    </div>
  )
}
