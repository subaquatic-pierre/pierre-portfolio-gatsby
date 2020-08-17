import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, Typography, Fade, Card } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { fadeEffect } from '../../pages/about'
import PropTypes from 'prop-types';

import Divider from '../Divider'

const useStyles = makeStyles(theme => ({
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
        minWidth: '100%'
    },
    textCard: {
        width: '100%',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        '& p': {
            marginBottom: '1rem'
        },
    },
    quoteContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        padding: '1.5rem',
        position: 'relative',
        '& > div': {
            display: 'flex',
        },
        '& svg': {
            color: theme.palette.grey.A700,
            opacity: '0.2',
            fontSize: '6rem',
            position: 'absolute',
            zIndex: '0',
            top: '10px',
            left: '0'
        },
        '& h6': {
            paddingTop: '1.5rem',
            lineHeight: '1.2',
            zIndex: '1',
            marginBottom: '0',
            paddingBottom: '0'
        },
        '& span': {
            marginTop: '10px',
            alignSelf: 'center'
        },
    },
    title: {
        fontSize: 14,
        marginBottom: '0!important'
    }
}))

const Technologies = (props) => {
    const { show } = props

    const classes = useStyles()
    return (
        <Fade timeout={fadeEffect} in={show}>
            <Grid data-test='component-Technologies-container' container justify='center' className={classes.content}>
                <Grid justify='center' container item xs={12} sm={8}>
                    <Typography variant='h4'>
                        Technologies
                    </Typography>
                </Grid>
                <Divider width={20} color='secondary' space={1} />
                <Grid container item xs={12} sm={6}>
                    <Card className={classes.textCard}>
                        <Typography>
                            The internet is the future and its technologies are an enticing feature of the development of civilization. I am intrigued by the ever changing landscape of internet technologies, below are some of my current favorites.
                        </Typography>
                        <Typography>
                            <b>React</b> - Although it may seem like overkill for small static webpages, React provides a powerful programing paradigm with the use of markdown and styling all within a single module. <a href='https://testing-library.com/docs/dom-testing-library/intro'>React Testing Library</a> promotes excellent testing techniques with emphasis on avoiding implementation details when writing unit and integration tests. <a href='https://www.apollographql.com/docs/react/'>Apollo Client</a> provides an easy API for connecting to a GraphQL backend, the use of Apollo Server within a Node JS environment allows for seamless front-end to back-end integration.
                        </Typography>
                        <Typography>
                            <b>Django</b> - The all-in-one, "kitchen sink", of web development frameworks. Django is great for user management out of the box. With a few package installations such as <a href='https://django-allauth.readthedocs.io/en/latest/installation.html'>Django-all-auth</a> it can be setup with O-Auth which further extends user management with 3rd party authentication providers. There are many other well supported packages which easily allow for the extension of Django capabilities. It supports the use of GraphQL with <a href='https://docs.graphene-python.org/projects/django/en/latest/'>Graphene</a> which is able to extend the SQL schema into a GraphQL schema which can be made available through an API.
                        </Typography>
                        <Typography>
                            <b>Mongo DB</b> - This data storage solution lends itself well to horizontal scalling. This makes it a great solution for the current climate of micro-services
                        </Typography>
                        <Typography>
                            <b>AWS</b> - Although AWS is not considered a technology in itself, I thought it would be interesting to mention a few of the benefits of using some of the technologies offered by AWS. EC2 computing instances provide excellent configuration options when hosting websites. AWS CloudFront and S3 combination allows for the easy hosting of static websites which lend itself well to serverless computing with the use of AWS Lambda
                        </Typography>
                        <Typography>
                            <b>Linux</b> - The Linux terminal is a power-tool for programmers, allowing quick access to services. SSH provides quick remote access to external machines. Ubuntu is supported with many official repositories for most programming tools. Linux makes it easy to run database daemons for SQL and Non-SQL databases locally during development.
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Fade >

    )
}

Technologies.propTypes = {
    show: PropTypes.bool.isRequired
}

export default Technologies