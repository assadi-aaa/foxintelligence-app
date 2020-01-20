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

export default function Visit(props) {
    const classes = useStyles();
    const {lastVisit = {}} = props;
    const {section, date, isSuccess = undefined} = lastVisit;
    return (
        <React.Fragment>
            <Title>la dernière visite</Title>
            <Typography component="p" variant="h5">
                <span>{section}</span>
            </Typography>
            <Typography color="textSecondary" className={classes.visitContext}>
                {formatDate(date)}
            </Typography>

            {
                isSuccess !== undefined &&
                < Typography component="p" color="textPrimary" className={classes.stateVisit}>
                    Status de requête : {
                    isSuccess ? <span>Succès<CheckIcon className={classes.successIcon}/></span> :
                        <span>Erreur<ErrorIcon className={classes.errorIcon}/></span>
                }
                </Typography>
            }
        </React.Fragment>
    );
}

const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString();
};
