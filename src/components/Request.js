import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles({
    visitContext: {
        marginBottom: "10px",
    },
    successIcon: {
        color: "green",
        paddingLeft: "5px"
    },
    errorIcon: {
        color: "red",
        paddingLeft: "5px"
    }
});

export default function Request(props) {
    const classes = useStyles();
    const {numberRequests, numberValidRequests, numberUsers} = props.requests;
    return (
        <React.Fragment>
            <Title>Aperçu</Title>
            <Typography component="p" variant="h5">
                <span>{numberRequests}</span>
            </Typography>

            {
                numberValidRequests !== undefined &&
                <React.Fragment>
                    <Typography component="p" color="textPrimary" className={classes.stateVisit}>
                        Nombre de requetés reussi : {numberValidRequests} <CheckIcon className={classes.successIcon}/>
                    </Typography>

                    <Typography component="p" color="textPrimary" className={classes.stateVisit}>
                        Nombre de requetés échouees : {numberRequests - numberValidRequests} <ErrorIcon
                        className={classes.errorIcon}/>
                    </Typography>
                </React.Fragment>
            }


            <Typography component="p" color="textPrimary" className={classes.stateVisit}>
                Nombre visiteurs uniques : {numberUsers}
            </Typography>
        </React.Fragment>
    );
}
