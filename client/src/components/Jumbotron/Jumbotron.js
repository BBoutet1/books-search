import React from "react";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  jumbotron: {
    height: "fit-content",
    clear: "both", paddingTop: "20px",
    paddingBottom: "20px", textAlign: "center",
    marginTop: 15,
  },
  hOne: {},
  hTwo: {},
   '@media screen and (max-width: 765px)' :{
        hOne:{
          fontSize: "35px"
        },
  },
   '@media screen and (max-width: 465px)' :{
        hOne:{
          fontSize: "28px"
     },
      hTwo:{
          fontSize: "20px"
        },
  },
   '@media screen and (max-width: 385px)' :{
        hOne:{
          fontSize: "22px"
     },
      hTwo:{
          fontSize: "16px"
        },
  },
   
})


function Jumbotron() {

  const classes = useStyles()
  return (
    <div
      className ={classes.jumbotron + ' jumbotron'}
    >
      <h1 className={classes.hOne}>(React) Google Books Search</h1>
      <h4 className={classes.hTwo}>Search and Save Books of Interest</h4>
    </div>
  );
}

export default Jumbotron;
