import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: theme.spacing(2),
    },
  }
})

export default function PageContainer({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

PageContainer.propTypes = {
  children: PropTypes.any,
}
