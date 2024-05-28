import * as React from 'react';
import { useState, useEffect } from 'react';
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
import StepContent from '@mui/material/StepContent';



const steps = ['Welcome', 'Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'];

function ModalWindow() {

  //Работа с разными степперами для мобильных устройств и десктоп-версии
  const [isMobile, setIsMobile] = useState(window.innerWidth < 550);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 550);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  //Работа степпера
  const [activeStep, setActiveStep] = React.useState(0);

  const initialAnswers = ['welcome', '', '', '', '', ''];
  const [answers, setAnswers] = useState(initialAnswers);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [open, setOpen] = React.useState(true);
  const isNextDisabled = answers[activeStep] === '';

  //Рендеринг

  const handleChange = (event) => {
    const newAnswers = [...answers];
    newAnswers[activeStep] = event.target.value;
    setAnswers(newAnswers);
    console.log(newAnswers)
  };

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
              value={answers[activeStep]}
              onChange={handleChange}
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
              value={answers[activeStep]}
              onChange={handleChange}
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
              value={answers[activeStep]}
              onChange={handleChange}
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
              value={answers[activeStep]}
              onChange={handleChange}
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
              value={answers[activeStep]}
              onChange={handleChange}
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
    <Modal className='ModalView-section'
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal-view">

        {isMobile ? (
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>
                  {label}
                </StepLabel>
                <StepContent>
                  {activeStep === steps.length ? (
                    <React.Fragment>
                      <div className='stepper-content'>
                      <Typography sx={{ mt: 2, mb: 1 }}>
                        Thanks!
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleClose}>Close</Button>
                      </Box>
                      </div>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <div className='stepper-content'>
                      {renderStepContent(activeStep)}
                      </div>
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
                        {activeStep === steps.length - 1 ? (
                          <Button onClick={handleClose} disabled={isNextDisabled}>
                            Finish
                          </Button>
                        ) : (
                          <Button onClick={handleNext} disabled={isNextDisabled}>
                            Next
                          </Button>
                        )}

                      </Box>
                    </React.Fragment>
                  )}
                </StepContent>
              </Step>
            ))}
          </Stepper>
        ) : (
          <div>
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
              <div className='stepper-content'>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Thanks!
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleClose}>Close</Button>
              </Box>
              </div>
            </React.Fragment>
            ) : (
              <React.Fragment>
                <div className='stepper-content'>
                      {renderStepContent(activeStep)}
                </div>
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
                  <Button onClick={handleNext} disabled={isNextDisabled}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </div>
        )}
      </Box>
    </Modal>
  );
}

export default ModalWindow;
