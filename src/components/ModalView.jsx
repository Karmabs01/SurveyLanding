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

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import StarBorder from '@mui/icons-material/StarBorder';
import SportsEsports from '@mui/icons-material/SportsEsports';
import Paid from '@mui/icons-material/Paid';
import SwitchAccessShortcutIcon from '@mui/icons-material/SwitchAccessShortcut';
import Celebration from '@mui/icons-material/Celebration';
import Diamond from '@mui/icons-material/Diamond';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';


const steps = ['Welcome', 'Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'];

function ModalWindow() {
  // Start stepper UI settings

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
      1: <StarBorder />,
      2: <SportsEsports />,
      3: <Paid />,
      4: <SwitchAccessShortcutIcon />,
      5: <Celebration />,
      6: <Diamond />,
    };

    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient(140deg, rgba(11,153,180,1) 6%, rgba(98,54,209,0.7063200280112045) 79%)',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient(140deg, rgba(11,153,180,1) 6%, rgba(98,54,209,0.7063200280112045) 79%)',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundImage:
        'linear-gradient(140deg, rgba(11,153,180,1) 6%, rgba(98,54,209,0.7063200280112045) 79%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
      backgroundImage:
        'linear-gradient(140deg, rgba(11,153,180,1) 6%, rgba(98,54,209,0.7063200280112045) 79%)',
    }),
  }));


  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };

  // End stepper UI settings

  // Start modalView UI settings
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    p: 4,
    backgroundColor: 'rgba(230,250,250,0.65)',

  };

  const bgstyle = {
    backdropFilter: "blur(5px)",
    backgroundColor: 'rgba(0,0,30,0.4)',
  }

  // End modalView UI settings

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };


  const [open, setOpen] = React.useState(true);


  //questions
  const [first, setFirst] = React.useState('yes');
  const [second, setSecond] = React.useState('yes');
  const [third, setThird] = React.useState('yes');
  const [forth, setForth] = React.useState('yes');
  const [fifth, setFifth] = React.useState('yes');

  const changeFirstValue = (event) => { setFirst(event.target.value) }
  const changeSecondValue = (event) => { setSecond(event.target.value) }
  const changeThirdValue = (event) => { setThird(event.target.value) }
  const changeForthValue = (event) => { setForth(event.target.value) }
  const changeFifthValue = (event) => { setFifth(event.target.value) }

  const handleClose = () => {
    localStorage.setItem('cashRewardIsAsked', true);
    setOpen(false);
  }

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Typography> Welcome! We're excited to get to know you better. Please take a moment to answer these quick questions. </Typography>
        );
      case 1:
        return (
          <FormControl>
            <FormLabel id="first">Do you enjoy playing games online for fun and entertainment?</FormLabel>
            <RadioGroup
              row
              aria-labelledby="first"
              name="first"
              value={first}
              onChange={changeFirstValue}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" labelPlacement="top" />
              <FormControlLabel value="no" control={<Radio />} label="No" labelPlacement="top" />
            </RadioGroup>
          </FormControl>
        );
      case 2:
        return (
          <FormControl>
            <FormLabel id="second">Have you ever tried any games that offer rewards or bonuses?</FormLabel>
            <RadioGroup
              row
              aria-labelledby="second"
              name="second"
              value={second}
              onChange={changeSecondValue}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" labelPlacement="top" />
              <FormControlLabel value="no" control={<Radio />} label="No" labelPlacement="top" />
            </RadioGroup>
          </FormControl>
        );
      case 3:
        return (
          <FormControl>
            <FormLabel id="third">Would you be interested in finding ways to earn more than you do now?</FormLabel>
            <RadioGroup
              row
              aria-labelledby="third"
              name="third"
              value={third}
              onChange={changeThirdValue}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" labelPlacement="top" />
              <FormControlLabel value="no" control={<Radio />} label="No" labelPlacement="top" />
            </RadioGroup>
          </FormControl>
        );
      case 4:
        return (
          <FormControl>
            <FormLabel id="forth">Have you ever thought about ways to increase your wealth through fun and engaging activities?</FormLabel>
            <RadioGroup
              row
              aria-labelledby="forth"
              name="forth"
              value={forth}
              onChange={changeForthValue}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" labelPlacement="top" />
              <FormControlLabel value="no" control={<Radio />} label="No" labelPlacement="top" />
            </RadioGroup>
          </FormControl>
        );
      case 5:
        return (
          <FormControl>
            <FormLabel id="fifth">Would you be interested in receiving exclusive bonuses and promotions that could enhance your gaming experience and potentially boost your wealth?</FormLabel>
            <RadioGroup
              row
              aria-labelledby="fifth"
              name="fifth"
              value={fifth}
              onChange={changeFifthValue}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" labelPlacement="top" />
              <FormControlLabel value="no" control={<Radio />} label="No" labelPlacement="top" />
            </RadioGroup>
          </FormControl>
        );
      default:
        return (
          <Typography> Error! Please, try again! </Typography>
        );
    }
  };

  return (
    <Modal className='ModalView' sx={bgstyle}
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Thanks!
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleClose}>Close</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {renderStepContent(activeStep)}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Modal>
  );
}

export default ModalWindow;
