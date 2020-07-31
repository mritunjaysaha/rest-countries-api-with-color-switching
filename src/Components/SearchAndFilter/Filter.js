import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function Filter(props) {
    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));
    const classes = useStyles();
    return (
        <div className={`${classes.formControl} searchandfilter filter`}>
            <FormControl className="select">
                <InputLabel id="demo-simple-select-helper-label">
                    <p className="filter-label">Filter by Region</p>
                </InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={props.region}
                    onChange={(e) => {
                        props.filter(e);
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="africa">Africa</MenuItem>
                    <MenuItem value="americas">America</MenuItem>
                    <MenuItem value="asia">Asia</MenuItem>
                    <MenuItem value="europe">Europe</MenuItem>
                    <MenuItem value="oceania">Oceania</MenuItem>
                </Select>
            </FormControl>
        </div>
        // <div className="searchandfilter filter">
        //     <FormControl className={classes.formControl}>
        //         <InputLabel
        //             id="demo-simple-select-helper-label"
        //             className="filter-label"
        //         >
        //             <p>Filter by Region</p>
        //         </InputLabel>
        //         <Select
        //             value={props.region}
        //             onChange={(e) => {
        //                 props.filter(e);
        //             }}
        //             displayEmpty
        //             className={classes.selectEmpty}
        //             inputProps={{ "aria-label": "Without label" }}
        //         >
        //             <MenuItem value="" disabled>
        //                 Placeholder
        //             </MenuItem>
        //             <MenuItem value="africa">Africa</MenuItem>
        //             <MenuItem value="americas">America</MenuItem>
        //             <MenuItem value="asia">Asia</MenuItem>
        //             <MenuItem value="europe">Europe</MenuItem>
        //             <MenuItem value="oceania">Oceania</MenuItem>
        //         </Select>
        //     </FormControl>
        // </div>
    );
}
