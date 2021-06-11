import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import SaveIcon from '@material-ui/icons/Save';

import {Paper, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup} from "@material-ui/core";
import {MuiPickersUtilsProvider, TimePicker} from "@material-ui/pickers";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    usersignUpRoot: {
        margin: "auto",
    },
    signUpPaper: {
        // width: "500px",
        padding: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    signUpRow: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        "&:last-child": {
            paddingBottom: theme.spacing(0),
        },
        "&:first-child": {
            paddingTop: theme.spacing(0),
        },
    },
    signUpButtons: {
        display: "flex",
        justifyContent: "flex-end",
    },
    signUpButton: {
        marginLeft: theme.spacing(1),
    },
}));

function WorkingHoursComponent(props) {


    const classes = useStyles();

    const [value, setValue] = React.useState('monday'); //state of radio
    // Switch's State
    //radio
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [checked, setChecked] = React.useState(false);

    const handleChangeCheckBox = (event) => {
        setChecked(event.target.checked);
    }

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className={classes.usersignUpRoot}>
            <Paper className={classes.signUpPaper} component="form">
                <div className={classes.signUpRow}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container id="WorkingHoursGrid">
                <Grid item xs={5} id="DaysOfWeek">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Days of the week</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={value}
                                    onChange={handleChange}>
                            <FormControlLabel value="monday" control={<Radio/>} label="Monday"/>
                            <FormControlLabel value="tuesday" control={<Radio/>} label="Tuesday"/>
                            <FormControlLabel value="wednesday" control={<Radio/>} label="Wednesday"/>
                            <FormControlLabel value="thursday" control={<Radio/>} label="Thursday"/>
                            <FormControlLabel value="friday" control={<Radio/>} label="Friday"/>
                            <FormControlLabel value="saturday" control={<Radio/>} label="Saturday"/>
                            <FormControlLabel value="sunday" control={<Radio/>} label="Sunday"/>

                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={7} id="ActiveTimeInterval">

                    <TimePicker
                        margin="normal"
                        id="time-from"
                        label="From:"

                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                    <TimePicker
                        margin="normal"
                        id="time-to"
                        label="To:"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />

                    <FormControlLabel
                        control={<Checkbox checked={checked} onChange={handleChangeCheckBox}
                                           name="checkedA"/>}
                        label="Non-operational day (Holiday)"
                    />

                </Grid>
            </Grid>


            <div
                className={classes.signUpRow + " " + classes.signUpButtons}
            >

                <Button
                    className={classes.signUpButton}
                    variant="contained"
                    color="primary"
                    // onClick={onRegister}
                    type="submit"
                    startIcon={<SaveIcon/>}
                >
                    Save
                </Button>
            </div>

        </MuiPickersUtilsProvider>
                </div></Paper></div>
    );
}


export default WorkingHoursComponent;