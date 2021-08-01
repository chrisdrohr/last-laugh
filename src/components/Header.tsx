import React from 'react'
import {
  AppBar,
  // Avatar,
  Toolbar,
  makeStyles,
  createStyles
} from '@material-ui/core'
// import Logo from '../../logo.png';

type Props = {}
const useStyles = makeStyles(
  ({ palette, spacing, transitions: { create, duration, easing } }: any) =>
    createStyles({
      appBar: {
        backgroundColor: palette.common.white,
        height: 56,
        transition: create('transform', duration.enteringScreen, easing.easeIn)
      },
      logo: {
        backgroundColor: palette.common.white,
        height: 32,
        width: 32,
        marginRight: spacing(1)
      },
      title: {
        flexGrow: 1,
        fontSize: '1.5rem'
      },
      toolbar: {
        minHeight: 56,
        marginLeft: spacing(2),
        marginRight: spacing(2)
      }
    })
)
const Header = (props: Props) => {
  const styles = useStyles()
  const [mounted, setMounted] = React.useState(false)

  window.addEventListener('load', () => setMounted(true), { once: true })
  return (
    <>
      <AppBar
        className={styles.appBar}
        style={{
          transform: mounted ? 'translateY(0)' : 'translateY(-200px)'
        }}
      >
        <Toolbar disableGutters className={styles.toolbar}>
          {/*<Avatar className={styles.logo} src={Logo} />*/}
        </Toolbar>
      </AppBar>
    </>
  )
}
Header.defaultProps = {
  title: 'PEP'
}
export default Header
