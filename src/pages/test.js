import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { questions } from '../__mocks__/questions';
import { Box, Button, Container, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios';

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
    const [progress, setProgress] = useState(100/4);
    const [questionNum, setQuestionNum] = useState(0);
    const [answer, setAnswer] = useState([]);
    const router = useRouter();

    function clickAnswer(answerIndex) {
        if(questionNum < 3) {
            setAnswer([...answer, answerIndex])
            setQuestionNum((prev) => prev + 1)
            setProgress((100/4)*(questionNum+2))
        } else {
            // setAnswer([...answer, answerIndex])
            answer.push(answerIndex);
            router.push({
                pathname: '/result', 
                query: {answer: answer}})
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
                        <LinearProgressWithLabel value={progress} sx={{height:15, borderRadius:5}}/>
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
