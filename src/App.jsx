import React from "react";
import { Typography , CssBaseline , AppBar, Toolbar , Container, Card, CardContent, TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import UseStyles from "./Style";

function getlength(number) {
    return number.toString().length;
}



const App = () => {
    const classes = UseStyles();
    let [showPIN, setVisibility] = React.useState(false);
    let [msg, setMsg] = React.useState("");
    let [PIN, setPIN] = React.useState("");
    let [red, setRed] = React.useState(false);
    let [yellow, setYellow] = React.useState(false);
    let [green, setGreen] = React.useState(false);
    let [tip, setTip] = React.useState("");

    function PINauth(number){
        if(getlength(+number) < 4)
        {
            setRed(true);
            setYellow(false);
            setGreen(false);
            setMsg("Weak");
            setTip("Tip: PIN length should be 4-digits");
            return;
        }
        if(1949 < +number && +number < 2020)
        {
            setRed(true);
            setYellow(false);
            setGreen(false);
            setMsg("Weak");
            setTip("Tip: PIN shouldn't be a common year");
            return;
        }
        let common = [1234,1111,0,1212,7777,1004,2000,4444,2222,6969,9999,3333,5555,6666,1122,1313,8888,4321,2001,1010];
        for(let i=0 ; i<common.length ; i++)
        {
            if(+number===common[i])
            {
                setRed(true);
                setYellow(false);
                setGreen(false);
                setMsg("Weak");
                setTip("Tip: PIN shouldn't be a common pattern");
                return;
            }
        }
        PINauthSecond(+number);
    }

    function PINauthSecond(n2){
        let arr = n2.toString().split('');
        for (let i = 0; i < arr.length; i++) arr[i] = +arr[i] | 0;
        console.log(arr);
        if((+arr[0]===(+arr[1]+1) && (+arr[1]===(+arr[2]+1)) && +arr[2]===(+arr[3]+1)) ||
        (+arr[1]===(+arr[0]+1) && (+arr[2]===(+arr[1]+1)) && +arr[3]===(+arr[2]+1)))
        {
            setRed(false);
            setYellow(true);
            setGreen(false);
            setMsg("Moderate");
            setTip("Tip: PIN shouldn't be an increasing or decreasing pattern");
            return;
        }
        let max=0;
        for(let i=0 ; i<4 ; i++)
        {
            let recent=0;
            for(let j=i+1 ; j<4 ; j++)
            {
                if(i!==j)
                {
                    if(arr[i]===arr[j])
                    {
                        recent++;
                    }
                }
            }
            max+=recent;
        }
        console.log(max);
        if(max >=2)
        {
            setRed(true);
            setYellow(false);
            setGreen(false);
            setMsg("Weak");
            setTip("Tip: PIN should not contain repeating digits");
            return;
        }
        else if(max>=1)
        {
            setRed(false);
            setYellow(true);
            setGreen(false);
            setMsg("Moderate");
            setTip("Tip: PIN should not contain repeating digits");
            return;
        }
        else
        {
            setRed(false);
            setYellow(false);
            setGreen(true);
            setMsg("Strong");
            setTip("");
            return;
        }
    }

    return( 
    <>
        <CssBaseline/>
        <AppBar className={classes.appBar} position="relative">
            <Toolbar>
                <Typography variant="h6">PIN Strength Meter</Typography>
            </Toolbar>
        </AppBar>
        <Container className={classes.card} maxWidth="sm">
            <Card>
                <AppBar className={classes.appBar} position="relative">
                </AppBar>
                <CardContent align="center">
                    <form noValidate autoComplete="off">
                        <TextField className={classes.inputText}  id="pin" label="Enter PIN" value={PIN} variant="outlined" 
                        onKeyDown={
                            (e) =>
                            {
                                if(e.key === "Backspace")
                                {
                                    setPIN(PIN.slice(0,PIN.length-1));
                                    e.preventDefault();
                                }
                                else if(e.key === "Enter")
                                {
                                    PINauth(+PIN);
                                }
                                if(e.key === "0" || e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" ||
                                 e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9")
                                {
                                    
                                }
                                else
                                {
                                    e.preventDefault();
                                }
                                
                            }} 
                        onChange={
                            ((e)=>
                            {
                                if(getlength(PIN) < 4)
                                {
                                    setPIN(e.target.value);
                                }
                            })
                            }
                        type={
                            showPIN? "text":"password"
                            } 
                        InputProps={
                            { 
                                endAdornment: (
                                <InputAdornment position="end">
                                <IconButton onClick={
                                    () => {
                                        setVisibility(!showPIN);
                                        console.log(showPIN);
                                    }
                                    } >
                                    {
                                        showPIN? <Visibility/> :<VisibilityOff/>
                                    }
                                </IconButton>
                                </InputAdornment>) }}  />
                        <AppBar className={
                            (
                                ()=>
                                {
                                    if(red)
                                    {
                                        return(classes.redBar);
                                    }
                                    else if(yellow)
                                    {
                                        return(classes.yellowBar);
                                    }
                                    else if(green)
                                    {
                                        return(classes.greenBar);
                                    }
                                }
                            )()
                            } position="relative"></AppBar>


                        {
                        (
                            ()=>
                            {
                                return( <Typography className={
                                    (()=> {
                                        if(msg==="Weak")
                                        {
                                            return (classes.msgRed);
                                        }
                                        else if(msg==="Moderate")
                                        {
                                            return (classes.msgYellow);
                                        }
                                        else
                                        {
                                            return (classes.msgGreen);
                                        }
                                    })()
                                } variant="h5">
                                    {
                                        (() => {
                                            return (msg);
                                        })()
                                    }
                                    </Typography> )
                            }
                        )()
                        }
                    </form>
                </CardContent>
                <CardContent>
                    <Typography variant="h6" align="center">{tip}</Typography>
                </CardContent>
            </Card>
        </Container>
    </>
    );
}

export default App;


