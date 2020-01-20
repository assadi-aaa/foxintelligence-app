import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, name, numberVisits, successNumber) {
    const errorNumber = numberVisits - successNumber;
    const rateError = ((errorNumber / numberVisits) * 100).toFixed(2);
    return {id: ++id, name, numberVisits, successNumber, errorNumber, rateError};
}


const createRows = (sections => {
    return sections.map((section, key) => {
        return createData(key, section.sectionName, section.occurrence, section.successNumber);
    })
});


const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Sections(props) {
    const {sections = []} = props;
    const rows = createRows(sections);
    return (
        <React.Fragment>
            <Title>Les sections les plus visités</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Classement</TableCell>
                        <TableCell>Nom de section</TableCell>
                        <TableCell>Nombre de visites</TableCell>
                        <TableCell>Nombre de succès</TableCell>
                        <TableCell>Nombre d'erreurs</TableCell>
                        <TableCell align="right">Taux d'erreur</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.numberVisits}</TableCell>
                            <TableCell>{row.successNumber}</TableCell>
                            <TableCell>{row.errorNumber}</TableCell>
                            <TableCell align="right">{row.rateError} %</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}
