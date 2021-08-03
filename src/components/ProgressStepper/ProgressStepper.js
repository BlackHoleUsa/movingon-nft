import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const useStyles = makeStyles({
    root: {
        minWidth: '100%',
        background: 'transparent',
        justifyContent: 'flex-start'
    },
    btnWidth: {
        margin: 0,
        padding: 0,
        minWidth: '20px'
    }
});

const ProgressStepper = (props) => {
    
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(1);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (

        <MobileStepper
            variant="progress"
            steps={3}
            position="static"
            activeStep={activeStep}
            className={`m-0 w-100 ${classes.root}`}
            nextButton={
                <>
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0} className={classes.btnWidth}>
                        {theme.direction === 'rtl' ? 
                            <RiArrowRightSLine className="font-25px" /> : <RiArrowLeftSLine className="font-25px" />}
                    </Button>
                    <Button size="small" onClick={handleNext} disabled={activeStep === 5} className={classes.btnWidth}>
                        {theme.direction === 'rtl' ? 
                            <RiArrowLeftSLine className="font-25px" /> : <RiArrowRightSLine  className="font-25px" />}
                    </Button>
                </>
            }
        />

    );

}
 
export default ProgressStepper;