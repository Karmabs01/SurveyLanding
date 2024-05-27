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

function ModalWindow() {

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

  const [open, setOpen] = React.useState(true);


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
    localStorage.setItem('cashRewardIsAsked', true);
    setOpen(false);
  }

  return (
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
  );
}

export default ModalWindow;
