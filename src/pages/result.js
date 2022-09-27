import Head from 'next/head';
import NextLink from 'next/link';
import { Box, Button, Container, Typography } from '@mui/material';
import Refresh from '@mui/icons-material/Refresh';

const Page = () => (
  <>
    <Head>
      <title>
        HOMEPAGE
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
          <Typography
            align="center"
            color="textPrimary"
            variant="h5"
          >
            당신의 MLBTI는...
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="h2"
          >
            꺄륵
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <img
              alt="Under development"
              src="/static/images/MLBTI_LOGO.png"
              style={{
                marginTop: 50,
                display: 'inline-block',
                maxWidth: '100%',
                width: 560
              }}
            />
          </Box>
          <NextLink
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={(<Refresh fontSize="small" />)}
              sx={{ mt: 3 }}
              variant="contained"
            >
              테스트 다시하기
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Box>
  </>
);

export default Page;
