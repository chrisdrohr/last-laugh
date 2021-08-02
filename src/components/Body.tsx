import React from "react";
import {makeStyles} from '@material-ui/core'
import Posts from './Posts'

const useStyles = makeStyles({
  body: {
    padding: '56px 16px 16px 16px'
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
