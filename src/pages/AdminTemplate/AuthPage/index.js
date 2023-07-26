import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { actAuth } from './duck/actions';

export default function AuthPage() {

  const [state, setState] = useState({
    taikhoan: "",
    matkhau: ""
  });

  const dispatch = useDispatch()

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch(actAuth(state))
  }


  return (
    <div className='container'>
      <div className="form-group">

        <h1>Login</h1>

        <form onSubmit={handleLogin}>

          <div className='form-group'>
            <label>Username:</label>
            <input type="text" name="taikhoan" className="form-control" onChange={handleOnChange} />

          </div>

          <div className='form-group'>

            <label>Username:</label>
            <input type="text" name="matkhau" className="form-control" onChange={handleOnChange} />
          </div>

          <div className='form-group'>

            <button type="submit" className="btn btn-primary">Submit</button>
          </div>

        </form>
      </div>

    </div >
  )
}