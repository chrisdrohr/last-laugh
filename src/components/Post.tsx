import React, { useEffect, useRef, useState } from 'react'
import {
  Card,
  CardActions,
  CardHeader,
  createStyles,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import { CommentOutlined, ThumbUpOutlined } from '@material-ui/icons'
import { IRedditPost } from 'constants/types'

type Props = IRedditPost

const useStyles = makeStyles(
  ({ palette, spacing, transitions: { create, duration, easing } }: any) =>
    createStyles({
      avatar: {
        overflow: 'visible',
        backgroundColor: blue[500]
      },
      card: {
        gridColumn: 1,
        backgroundColor: (props: Props) => props.backgroundColor
      },
      cardSubheader: {
        color: palette.text.secondary
      },
      icon: {
        color: palette.common.white,
        height: 18,
        width: 18,
        position: 'relative',
        marginLeft: 4
      },
      iconInfo: {
        color: palette.common.white,
        display: 'flex',
        alignItems: 'center'
      },
      img: {
        maxWidth: '100%'
      },
      titleLink: {
        color: palette.common.white
      }
    })
)

const Post = (props: Props) => {
  const styles = useStyles(props)

  return (
    <Card className={styles.card}>
      <CardHeader
        title={
          <Link
            className={styles.titleLink}
            href={props.permalink}
            target={'_blank'}
            title={'View post on reddit.com'}
          >
            {props.title}
          </Link>
        }
        subheader={props.author}
        className={styles.cardSubheader}
        classes={{
          subheader: styles.cardSubheader
        }}
      />
      {props.imageURL && (
        <img className={styles.img} src={props.imageURL} alt={props.title} />
      )}

      {/*{props.videoURL && (*/}
      {/*  <video className={styles.img} src={props.imageURL}/>*/}
      {/*)}*/}

      <CardActions style={{ justifyContent: 'flex-end' }}>
        <Typography variant={'caption'} className={styles.iconInfo} title={'Comments'}>
          {props.commentsCount}
          <CommentOutlined className={styles.icon} />
        </Typography>
        <Typography variant={'caption'} className={styles.iconInfo} title={'Upvotes'}>
          {props.upVotes}
          <ThumbUpOutlined style={{ top: -4 }} className={styles.icon} />
        </Typography>
      </CardActions>
    </Card>
  )
}

export default Post
