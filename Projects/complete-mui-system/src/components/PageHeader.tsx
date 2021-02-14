import { Card, Divider, makeStyles, Paper, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'


const styles = makeStyles(theme => ({
  root: {
  },
  pageHeader: {
    padding: theme.spacing(4),
    display: 'flex',
    marginBottom: theme.spacing(2),
    justifyContent: 'center',
  },
  pageIcon: {
    display: 'inline-block',
    padding: theme.spacing(1),
  },
  pageTitle: {
    textAlign: 'center',
  }
}))

interface Props {
  icon?: ReactElement,
  title: string,
  subtitle: string,
}

export default function PageHeader({icon, title, subtitle}: Props): ReactElement {
  
  const cs = styles()
  
  return (
    <div className={cs.pageHeader}>
      {/*
      <Paper className={cs.pageIcon}>
        {icon}
      </Paper>
      */}
      <div className={cs.pageTitle}>
        <Typography variant="h2" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle2" component="div">
          {subtitle}
        </Typography>
      </div>
      <Divider />
    </div>
  )
}
