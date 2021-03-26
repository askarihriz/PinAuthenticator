import React from "react";
import { Typography , CssBaseline , AppBar, Toolbar , Container, Card, CardContent, TextField, Grid, Button } from "@material-ui/core";
import UseStyles from "./Style";
import { Add, Remove, Clear } from "@material-ui/icons";
import { Calculator, Slash } from 'react-bootstrap-icons';


const App = () => {
    const classes = UseStyles();
    let [n1,setN1] = React.useState(0);
    let [n2,setN2] = React.useState(0);
    let [ans,setAns] = React.useState("");

    const changeMe1 = (event) => {
        setN1(n1=event.target.value);
        setAns(ans="");
    }

    const changeMe2 = (event) => {
        setN2(n2=event.target.value);
        setAns(ans="");
    }

    const AddNumbers = () => {
        setAns(ans = +n1 + +n2);
    }

    const SubNumbers = () => {
        setAns(ans = +n1 - +n2);
    }

    const MulNumbers = () => {
        setAns(ans = +n1 * +n2);
    }

    const DivNumbers = () => {
        if(+n2 === 0)
        {
            setAns(ans="Infinity");
        }
        else{
            setAns(ans = +n1 / +n2);
        }
    }


    return( 
    <>
        <CssBaseline/>
        <AppBar className={classes.appBar} position="relative">
            <Toolbar>
                <Typography className={classes.menuCalculator}><Calculator size="30px"/></Typography>
                <Typography variant="h5">Calculator</Typography>
            </Toolbar>
        </AppBar>
        <Container className={classes.card} maxWidth="sm">
            <Card>
                <AppBar className={classes.appBar} position="relative">
                </AppBar>
                <CardContent align="center">
                    <form noValidate autoComplete="off">
                        <TextField className={classes.inputText} onChange={changeMe1} id="num1" label="First Number" variant="outlined" type="number"/>
                    </form>
                </CardContent>
                <CardContent align="center">
                    <form noValidate autoComplete="off">
                        <TextField className={classes.inputText} onChange={changeMe2} id="num2" label="Second Number" variant="outlined" type="number"/>
                    </form>
                </CardContent>
                <CardContent>
                    <Grid className={classes.gridAdjust} container justify="center" alignItems="center" spacing={3}>
                        <Grid item xs={5} sm={5} align="center">
                            <Button className={classes.buttonAdjust} onClick={AddNumbers} variant="contained" color="primary" size="large" startIcon={<Add/>}>Add</Button>
                        </Grid>
                        <Grid item xs={5} sm={5} align="center">
                            <Button className={classes.buttonAdjust} onClick={SubNumbers} variant="contained" color="primary" size="large" startIcon={<Remove/>}>Sub</Button>
                        </Grid>
                        <Grid item xs={5} sm={5} align="center">
                            <Button className={classes.buttonAdjust} onClick={MulNumbers} variant="contained" color="primary" size="large" startIcon={<Clear/>}>Mul</Button>
                        </Grid>
                        <Grid item xs={5} sm={5} align="center">
                            <Button className={classes.buttonAdjust} onClick={DivNumbers} variant="contained" color="primary" size="large" startIcon={<Slash className={classes.divideSign} size="30px"/>}>Div</Button>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardContent align="center">
                    <form noValidate autoComplete="off">
                        <TextField className={classes.inputText} value={ans}  id="ans" placeholder="Answer" variant="outlined" type="text" InputProps={{readOnly: true}}/>
                    </form>
                </CardContent>
            </Card>
        </Container>
    </>
    );
}

export default App;