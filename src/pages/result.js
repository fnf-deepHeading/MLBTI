import { useEffect, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import Link from 'next/link';
import { Box, Button, Container, Typography } from '@mui/material';
import Refresh from '@mui/icons-material/Refresh';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useRouter } from 'next/router';
import { typeAlphabets } from '../__mocks__/typeAlphabets';
import { types } from '../__mocks__/types';


export const Page = () => {
  const router = useRouter();
  const answer = router.query.answer;
  const [resultTypes, setResultTypes] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [mallUrl, setMallUrl] = useState('');

  useEffect(() => {
    // console.log('컴포넌트가 화면에 나타남');]
    _getMBTI(answer);
    return () => {
      // console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);

  function _getMBTI(answer){
    console.log(answer);
    const types = [];
    if(answer[0] >= 2){
      types.push(typeAlphabets.Interest.high);
    }else {
      types.push(typeAlphabets.Interest.low);
    };

    if(answer[1] >= 2){
      types.push(typeAlphabets.Freak.high);
    }else {
      types.push(typeAlphabets.Freak.low);
    };

    if(answer[2] >= 2){
      types.push(typeAlphabets.Formality.high);
    }else {
      types.push(typeAlphabets.Formality.low);
    };

    if(answer[3] >= 2){
      types.push(typeAlphabets.Fancy.high);
    }else {
      types.push(typeAlphabets.Fancy.low);
    }
    setResultTypes(types.join(''));
    _getProduct(types.join(''));
  }
  
  function _getProduct(result){
    console.log(types[`${result}`])
    setImgUrl(types[`${result}`].img_url);
    setMallUrl(types[`${result}`].mall_url);
    // console.log(types)
    console.log(imgUrl)
    console.log(mallUrl)
  }

  return (
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
              {resultTypes} !!
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <img
                alt="Under development"
                src={imgUrl}
                style={{
                  marginTop: 50,
                  display: 'inline-block',
                  maxWidth: '100%',
                  width: 400
                }}
              />
            </Box>
            <Link
              href={mallUrl}
              passHref
            >
              <Button
                component="a"
                startIcon={(<AddShoppingCartIcon fontSize="small" />)}
                sx={{ mt: 3, width: "10rem" }}
                variant="contained"
              >
                사러 가기
              </Button>
            </Link>
            <NextLink
              href="/"
              passHref
            >
              <Button
                component="a"
                startIcon={(<Refresh fontSize="small" />)}
                sx={{ mt: 3, width: "10rem" }}
                variant="contained"
              >
                테스트 다시하기
              </Button>
            </NextLink>
          </Box>
        </Container>
      </Box>
    </>
  )
}


export default Page;
