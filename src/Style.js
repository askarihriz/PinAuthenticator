import { makeStyles } from "@material-ui/styles";

const UseStyles = makeStyles({
    container: {

    },
    appBar: {
        background: 'linear-gradient(45deg, #FF5F6D 30%, #FFC371 90%)',
        minHeight: "20px",
        marginBottom: "20px"
    },
    menuCalculator: {
        marginRight: "10px"
    },
    card: {
        marginTop: "75px",
        marginBottom: "75px"
    },
    buttonAdjust: {
        width: "100%",
        borderRadius: "50px",
        background: 'linear-gradient(45deg, #FF5F6D 30%, #FFC371 100%)',
    },
    divideSign: {
        marginRight: "-5px"
    },
    gridAdjust: {
    }
    ,
    inputText: {
        width: "90%",
        '& label.Mui-focused': {
            color: 'grey',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'yellow',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'lightgrey',
              borderRadius: "50px",
            },
            '&:hover fieldset': {
              borderColor: '#FFC371',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FF5F6D',
            },
        }
}
});

export default UseStyles;