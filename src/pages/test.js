import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { questions } from '../__mocks__/questions';
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
    const [questionNum, setQuestionNum] = useState(0);
    const [answer, setAnswer] = useState([0]);
    const router = useRouter();

    function clickAnswer(answerIndex) {
        if(questionNum < 8) {
            setAnswer([...answer, answerIndex])
            setQuestionNum((prev) => prev + 1)
        } else {
            setAnswer([...answer, answerIndex])
            alert('Finish!' + answer)
            router.push('/result')
        }
        return true;
    }

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
                        <LinearProgressWithLabel value={questions[questionNum].id*10} sx={{height:15, borderRadius:5}}/>
                    </Box>
                    <Box sx={{ height: '7rem'}}>
                        <Typography
                            align="center"
                            color="textPrimary"
                            variant="h4"
                        >
                            Q{questions[questionNum].id}
                        </Typography>
                    </Box>
                    <Box sx={{ height: '7rem'}}>
                        <Typography
                            align="center"
                            color="textPrimary"
                            variant="h5"
                        >
                            {questions[questionNum].question}
                        </Typography>
                    </Box>
                    {questions[questionNum].answerList.map((answerCandidate, i) => (
                        <Button
                            key={i}
                            component="a"
                            sx={{ mt: 3, width:"20rem", fontSize:"1.1rem" }}
                            variant="contained"
                            size="large"
                            onClick={() => {
                                clickAnswer(i)
                            }}
                        >
                            {answerCandidate}
                        </Button>
                    ))}
                </Box>
            </Container>
        </Box>
    </>
    );
};

export default Page;
