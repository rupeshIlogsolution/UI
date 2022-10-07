import React, { useState } from 'react'
import './StepReg.css'
import { CgOrganisation } from 'react-icons/cg';
import { BsPersonCircle } from 'react-icons/bs';



export default function StepReg() {
  const [currentStep, setStep] = useState(1);
  // =============================================== STEP 1 =======================================================
  const Step1 = () => {
    return (
      <>
        <div className="container">

          <div className='reg_main_div justify-content-center'>
            <div className="for_reg">
              <header className="card-header" >
                <div style={{display:"flex"}}>
                <h5 className='mb-4'>Set up your Organiztaion Profile</h5><CgOrganisation id='icon_for_sm'/>
                </div>
              </header>
              <article className="card-body">
                <form>
                  <div class="row mt-2">
                    <div class="form-group">
                      <label>Organiztaion Name</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>

                  <div class="row mt-3">
                    <div class="form-group col">
                      <label>Location</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>

                  <div class="row mt-3">
                    <div class="form-group col">
                      <label for="inputState">Currency</label>
                      <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                  </div>

                  <div class="row mt-3">
                    <div class="form-group col">
                      <label for="inputState">Language</label>
                      <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <p className="col-md-11">Is this Business registered for GST</p>
                    <input style={{ width: "14px" }} className="col-md-1" type="checkbox"></input>
                  </div>

                  <button type="submit" onClick={() => setStep(2)} class="btn btn-primary ">Next</button>
                </form>
              </article>

            </div>
            <div className='for_icon'>
              <CgOrganisation id="organisation" /><br />
              <h5 style={{textAlign:"center",fontSize:"25px"}}>Organiztaion Profile</h5>
              <p className='mx-3 my-5 text-center'>Fill out the form here for your complete details about organisation. You can always edit these details</p>
              <h6 className='pagechange'>1</h6>
            </div>
          </div>
        </div>
      </>
    )
  }
  //  ============================================ STEP 2 ========================================================
  const Step2 = () => {
    return (
      <>
        <div className="container">
          <div className='reg_main_div justify-content-center'>
            <div className="for_reg">
              <header className="card-header" >
                <div style={{display:"flex"}}>
                <h5 className='mb-4'>Set up your Personal Profile</h5><BsPersonCircle id='icon_for_sm'/>
                </div>
              </header>
              <article className="card-body">
                <form>
                  <div class="row">
                    <div class="form-group">
                      <label>Person Name</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>

                  <div class="row mt-1">
                    <div class="form-group col-md-6">
                      <label>Mobile</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputState">Email</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>

                  <div class="row mt-1">
                    <div class="form-group col">
                      <label for="inputState">Address</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>

                  <div class="row mt-1">
                    <div class="form-group col">
                      <label for="inputState">User Id</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>

                  <div class="row mt-1">
                    <div class="form-group col-md-6">
                      <label for="inputState">Password</label>
                      <input type="password" class="form-control" />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputState">Confirm Password</label>
                      <input type="password" class="form-control" />
                    </div>
                  </div>

                  <button type="submit" onClick={() => setStep(1)} class="btn btn-secondary my-3">Back</button>
                  <button type="submit" class="btn btn-primary mx-2">Submit</button>
                </form>
              </article>
            </div>
            <div className='for_icon'>
              <BsPersonCircle id="organisation" /><br />
              <h5 style={{textAlign:"center",fontSize:"25px"}}>Personal Profile</h5>
              <p className='mx-3 my-5 text-center'>Fill out the form here for your complete details about personal. You can always edit these details</p>
              <h6 className='pagechange'>2</h6>
            </div>
          </div>
        </div>
      </>
    )
  }
  // ===================================================================================================================
  const showStep = (step) => {
    switch (step) {
      case 1:
        return <Step1 />
      case 2:
        return <Step2 />
    }
  }
  return (
    <>
      <div className='comp_reg_div'>
        <h4>Register Your Account </h4>
        <div style={{ margin: "5vh 0"}}>
          {showStep(currentStep)}
        </div>
      </div>
    </>
  )
}
