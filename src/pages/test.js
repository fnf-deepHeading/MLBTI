import { useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { Box, Button, Container, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

export const Page = () => {
    const [progress, setProgress] = useState(10);
    return (
    <>
        <Head>
        <title>
            TEST
        </title>
        </Head>
        <Box
        component="main"
        sx={{
            alignItems: 'center',
            display: 'flex',
            flexGrow: 1,
            minHeight: '100%'
        }}
        >
        <Container maxWidth="md">
            <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
            }}
            >
                <Box sx={{ width: '30%', height: '5rem', alignItems: 'center' }}>
                    <LinearProgressWithLabel value={progress} sx={{height:15, borderRadius:5}}/>
                </Box>
                <Box sx={{ height: '7rem'}}>
            <Typography
                align="center"
                color="textPrimary"
                variant="h4"
            >
                Q1.
            </Typography>
            </Box>
            <Box sx={{ height: '7rem'}}>
            <Typography
                align="center"
                color="textPrimary"
                variant="h5"
            >
                첫번째 질문
            </Typography>
            </Box>
            <Button
                component="a"
                sx={{ mt: 3, width:"20rem", fontSize:"1.1rem" }}
                variant="contained"
                size="large"
                onClick={() => {
                    alert('clicked');
                }}
            >
                매우 그런 편이다
            </Button>
            </Box>
        </Container>
        </Box>
    </>
    );
};

export default Page;
