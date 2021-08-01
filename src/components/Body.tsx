import React from "react";
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
  body: {
    paddingTop: 56
  }
})
const Body = () => {
  const styles = useStyles()
  return (
    <div className={styles.body}>
      Hello
    </div>
  );
};

export default Body;
