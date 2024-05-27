import { useState, useEffect } from "react";

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

// import {man} from "../../../src/img/man.png";

//Обычные белые иконки
// import icon1 from "../../img/star.png";
// import icon2 from "../../img/up.png";
// import icon3 from "../../img/money.png";

//Те же иконки, но цветные
import icon1 from "../../img/star-colored.png";
import icon2 from "../../img/up-colored.png";
import icon3 from "../../img/money-colored.png";

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  p: 4,
  backgroundColor: 'rgba(250,250,230,0.7)',

};

const bgstyle = {
  backdropFilter: "blur(5px)",
  backgroundColor: 'rgba(0,0,30,0.4)',
}

function ChildComponent() {
  const [isAsked, setIsAsked] = useState(localStorage.getItem('cashRewardIsAsked'));
  const [open, setOpen] = React.useState(true);
  
  useEffect(() => {
    localStorage.setItem('cashRewardIsAsked', isAsked);
  }, [isAsked]);

  //questions
  const [first, setFirst] = React.useState('yes');
  const [second, setSecond] = React.useState('yes');
  const [third, setThird] = React.useState('yes');
  const [forth, setForth] = React.useState('yes');
  const [fifth, setFifth] = React.useState('yes');

  const changeFirstValue = (event) => {setFirst(event.target.value)}
  const changeSecondValue = (event) => {setSecond(event.target.value)}
  const changeThirdValue = (event) => {setThird(event.target.value)}
  const changeForthValue = (event) => {setForth(event.target.value)}
  const changeFifthValue = (event) => {setFifth(event.target.value)}


  const handleClose = () => {
    setIsAsked(true);
    setOpen(false);
  }

  return (
    <div>
      {!isAsked ? (
        <Modal sx={bgstyle}
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
          <FormControl>
              <FormLabel id="first">Do you enjoy playing games online for fun and entertainment?</FormLabel>
              <RadioGroup
              row
                aria-labelledby="first"
                name="first"
                value={first}
                onChange={changeFirstValue}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" labelPlacement="top"/>
                <FormControlLabel value="no" control={<Radio />} label="No" labelPlacement="top"/>
              </RadioGroup>
              <FormLabel id="second">Have you ever tried any games that offer rewards or bonuses?</FormLabel>
              <RadioGroup
              row
                aria-labelledby="second"
                name="second"
                value={second}
                onChange={changeSecondValue}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" labelPlacement="top"/>
                <FormControlLabel value="no" control={<Radio />} label="No" labelPlacement="top"/>
              </RadioGroup>
              <FormLabel id="third">Would you be interested in finding ways to earn more than you do now?</FormLabel>
              <RadioGroup
              row
                aria-labelledby="third"
                name="third"
                value={third}
                onChange={changeThirdValue}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" labelPlacement="top"/>
                <FormControlLabel value="no" control={<Radio />} label="No" labelPlacement="top"/>
              </RadioGroup>
              <FormLabel id="forth">Have you ever thought about ways to increase your wealth through fun and engaging activities?</FormLabel>
              <RadioGroup
              row
                aria-labelledby="forth"
                name="forth"
                value={forth}
                onChange={changeForthValue}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" labelPlacement="top"/>
                <FormControlLabel value="no" control={<Radio />} label="No" labelPlacement="top"/>
              </RadioGroup>
              <FormLabel id="fifth">Would you be interested in receiving exclusive bonuses and promotions that could enhance your gaming experience and potentially boost your wealth?</FormLabel>
              <RadioGroup
              row
                aria-labelledby="fifth"
                name="fifth"
                value={fifth}
                onChange={changeFifthValue}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" labelPlacement="top"/>
                <FormControlLabel value="no" control={<Radio />} label="No" labelPlacement="top"/>
              </RadioGroup>
              
            </FormControl>
            <Button
              type="submit"
              fullWidth
              onClick={handleClose}
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              Finish!
            </Button>
          </Box>
        </Modal>
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
              <div className="col-lg-6">
                <div className="hero-content top-greadient">
                  <h1 className="wow fadeInUp" data-wow-delay=".4s">
                    Make a Deposit and Boost Your Balance&nbsp;
                    <span className="common-gre-color">Instantly!</span>
                  </h1>

                  <p> Thank you for completing our survey. To show our appreciation,
                    we have an exciting offer just for you!</p>
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
              <div className="col-lg-6 hero-image-col">
                <div className="hero-img-container">
                  <div className="hero-img wow fadeInRight" data-wow-delay=".5s">
                    <img src={"../../../src/img/man.png"} alt="" />
                  </div>
                </div>

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

        <section className="form mt-20">
          <div className='container'>
            <h4 className="wow fadeInUp" data-wow-delay=".6s">
              Don't miss out on these amazing opportunities to double or even
              triple your deposit! Enter your details below to start your
              journey to greater rewards.
            </h4>
            <Box component="form" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="country"
                    required
                    fullWidth
                    id="firstName"
                    label="Country"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    label="Telephone Number"
                    name="phone"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
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
        </section>
      </div>
    </div >
  );
}

export default ChildComponent;
