import React from 'react'
import './Login.css'
import icon from './loginicon.svg'

export const Login = () => {
    return (
        <>
            <div className='login_main_div'>
                <div className='login_div'>
                    <div className='login_input'>
                        <h4>Sign In</h4>
                        <div className='user mt-3'>
                            <label>Username</label><br />
                            <input type="text"></input>
                        </div>
                        <div className='user my-2'>
                            <label>Password</label><br />
                            <input type="Password"></input>
                        </div>
                        

                        <button className='btn mt-4 btn-sm log_btn'>Login</button>

                        <div className='div_for_icon_sm'>
                            <h4>Everything you are.<br />In one simple link.</h4>
                            <img className='loginicon_sm' src={icon}></img>
                        </div>
                    </div>
                    <div className='login_img'>
                        <div className='div_for_icon'>
                            <h4>Everything you are.<br />In one simple link.</h4>
                            <img className='loginicon' src={icon}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
