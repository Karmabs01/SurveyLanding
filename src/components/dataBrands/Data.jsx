import { useState, useEffect } from "react";
import ModalWindow from "../ModalView"

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import man from "../../img/manBIG.png";

//Обычные белые иконки
// import icon1 from "../../img/star.png";
// import icon2 from "../../img/up.png";
// import icon3 from "../../img/money.png";

//Те же иконки, но цветные
import icon1 from "../../img/star-colored.png";
import icon2 from "../../img/up-colored.png";
import icon3 from "../../img/money-colored.png";



function ChildComponent() {

  // const [isAsked, setIsAsked] = useState(localStorage.getItem('cashRewardIsAsked'));
  const [isAsked, setIsAsked] = useState(false); //for testing

  return (
    <div>
      {!isAsked ? (
        <ModalWindow />
      ) : (
        <div></div>
      )
      }

      <div>
        <section id="home" className="hero-section go-zoom-1">
          <div className="container">
            <div className="top__color-overly-1 flaot-bob-y"></div>
            <div className="top__color-overly-2 flaot-bob-x"></div>
            <div className="top__color-overly-3 img-bounce"></div>
            <div className="bg-img"></div>
            <div className="row align-items-center">
              <div className="form-banner col-lg-6">
                <div className="hero-content top-greadient">
                  <h1 className="wow fadeInUp" data-wow-delay=".4s">
                    Make a Deposit and Boost Your Balance&nbsp;
                    <span className="common-gre-color">Instantly!</span>
                  </h1>

                  <p> Thank you for completing our survey. To show our appreciation,
                    we have an exciting offer just for you! Don't miss out on these amazing opportunities to double or even
                    triple your deposit! </p>
                  {/* <button
                  type="button"
                  className="main-btn btn-hover wow fadeInUp"
                  data-bs-toggle="modal"
                  data-bs-target="#contact-form"
                >
                  <i className="fal fa-plus"></i> Get reward!
                </button> */}

                </div>
              </div>
              <div className="col-lg-6">
                <Box component="form" className="form-section form" sx={{ mt: 3 }}>
                  <h5>
                    Enter your details below to start your journey to greater rewards!
                  </h5>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="country"
                        required
                        fullWidth
                        id="firstName"
                        label="Country"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="phone"
                        label="Telephone Number"
                        name="phone"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="code"
                        label="OTP Code"
                        name="code"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Get reward!
                  </Button>
                </Box>

              </div>
            </div>
          </div>
        </section>


        <section id="advantages" className="advantages-one advertizers">
          <div className="container">
            <div className="section-title text-center">
              <h3> Leave your contact information to receive:</h3>
            </div>
            <div className="row">
              <div className="item">
                <div className="advantages-one__single">
                  <div className="advantages-one__icon">
                    <img src={icon1} alt="" />
                  </div>
                  <h4 className="advantages-one__title">Exclusive Rewards Opportunities</h4>
                </div>
              </div>
              <div className="item">
                <div className="advantages-one__single">
                  <div className="advantages-one__icon">
                    <img src={icon2} alt="" />
                  </div>
                  <h4 className="advantages-one__title">Tips on Increasing Your Wealth</h4>
                </div>
              </div>
              <div className="item">
                <div className="advantages-one__single">
                  <div className="advantages-one__icon">
                    <img src={icon3} alt="" />
                  </div>
                  <h4 className="advantages-one__title">Updates on the Latest Games and Offers</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div >
  );
}

// return (
//   <div>
//     {!isAsked ? (
//         <ModalWindow />
//     ) : (
//       <div></div>
//     )
//     }

//     <div>
//       <section id="home" className="hero-section go-zoom-1">
//         <div className="container">
//           <div className="top__color-overly-1 flaot-bob-y"></div>
//           <div className="top__color-overly-2 flaot-bob-x"></div>
//           <div className="top__color-overly-3 img-bounce"></div>
//           <div className="bg-img"></div>
//           <div className="row align-items-center">
//             <div className="col-lg-6">
//               <div className="hero-content top-greadient">
//                 <h1 className="wow fadeInUp" data-wow-delay=".4s">
//                   Make a Deposit and Boost Your Balance&nbsp;
//                   <span className="common-gre-color">Instantly!</span>
//                 </h1>

//                 <p> Thank you for completing our survey. To show our appreciation,
//                   we have an exciting offer just for you!</p>
//                 {/* <button
//                 type="button"
//                 className="main-btn btn-hover wow fadeInUp"
//                 data-bs-toggle="modal"
//                 data-bs-target="#contact-form"
//               >
//                 <i className="fal fa-plus"></i> Get reward!
//               </button> */}
//               <Box component="form" className="form-section form" sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   name="country"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="Country"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="phone"
//                   label="Telephone Number"
//                   name="phone"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="code"
//                   label="OTP Code"
//                   name="code"
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="outlined"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Get reward!
//             </Button>
//           </Box>
//               </div>
//             </div>
//             <div className="col-lg-6 hero-image-col">
//               <div className="hero-img-container">
//                 <div className="hero-img wow fadeInRight" data-wow-delay=".5s">
//                   <img src={man} alt="" />
//                 </div>
//               </div>

//             </div>
//           </div>
//           <h3>
//             Don't miss out on these amazing opportunities to double or even
//             triple your deposit! Enter your details below to start your
//             journey to greater rewards.
//           </h3>
//         </div>
//       </section>


//       <section id="advantages" className="advantages-one advertizers">
//         <div className="container">
//           <div className="section-title text-center">
//             <h3> Leave your contact information to receive:</h3>
//           </div>
//           <div className="row">
//             <div className="item">
//               <div className="advantages-one__single">
//                 <div className="advantages-one__icon">
//                   <img src={icon1} alt="" />
//                 </div>
//                 <h4 className="advantages-one__title">Exclusive Rewards Opportunities</h4>
//               </div>
//             </div>
//             <div className="item">
//               <div className="advantages-one__single">
//                 <div className="advantages-one__icon">
//                   <img src={icon2} alt="" />
//                 </div>
//                 <h4 className="advantages-one__title">Tips on Increasing Your Wealth</h4>
//               </div>
//             </div>
//             <div className="item">
//               <div className="advantages-one__single">
//                 <div className="advantages-one__icon">
//                   <img src={icon3} alt="" />
//                 </div>
//                 <h4 className="advantages-one__title">Updates on the Latest Games and Offers</h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   </div >
// );
// }

export default ChildComponent;
