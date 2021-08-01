import React from "react";
import {makeStyles} from '@material-ui/core'
import Posts from './Posts'

const useStyles = makeStyles({
  body: {
    paddingTop: 56
  }
})
const Body = () => {
  const styles = useStyles()
  return (
    <div className={styles.body}>
      <Posts/>
    </div>
  );
};

export default Body;
