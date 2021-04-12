import { makeStyles } from "@material-ui/styles";

const UseStyles = makeStyles({
    container: {

    },
    appBar: {
        background: 'primary',
        minHeight: "20px",
        marginBottom: "20px"
    },
    redBar:{
        background: "red",
        minHeight: "5px",
        marginBottom: "5px",
        marginTop: "5px",
        width: "50%",
        borderRadius: "50px",
    },
    yellowBar:{
      background: "yellow",
      minHeight: "5px",
      marginBottom: "5px",
      marginTop: "5px",
      width: "50%",
      borderRadius: "50px",
    },
    greenBar:{
      background: "lightgreen",
      minHeight: "5px",
      marginBottom: "5px",
      marginTop: "5px",
      width: "50%",
      borderRadius: "50px",
    },
    msgRed:{
      color: "red"
    },
    msgYellow:{
      color: "orange"
    },
    msgGreen:{
      color: "green"
    },
    card: {
        marginTop: "125px",
        marginBottom: "75px"
    },
    inputText: {
      width: "50%",
        '& label.Mui-focused': {
            color: 'grey',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'grey',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'lightgrey',
              borderRadius: "5px",
            },
            '&:hover fieldset': {
              borderColor: 'Primary',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'Primary',
            },
        }
}
});

export default UseStyles;