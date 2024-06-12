import React from 'react';
import './MainInfo.scss';
import { Grid, Typography } from '@mui/material';

const MainInfo = () => {
  return (
    <Grid
      container
      //   justify='space-between'
      display='flex'
      justifyContent='center'
      className='container'
      //   style={{ backgroundColor: 'blue', width: '80%' }}
    >
      <Typography variant='h4' className='title'>
        새소식
      </Typography>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Grid item className='box' flex={2} style={{ backgroundColor: 'pink' }}>
          <div className='ntitle'>제목테스트1</div>
          <div className='ncontent'>내용테스트1</div>
        </Grid>
        <Grid item className='box' flex={2} style={{ backgroundColor: 'pink' }}>
          <div className='ntitle'>제목테스트1</div>
          <div className='ncontent'>내용테스트1</div>
        </Grid>
        <Grid item className='box' flex={2} style={{ backgroundColor: 'pink' }}>
          <div className='ntitle'>제목테스트1</div>
          <div className='ncontent'>내용테스트1</div>
        </Grid>
        <Grid item className='box' flex={2} style={{ backgroundColor: 'pink' }}>
          <div className='ntitle'>제목테스트1</div>
          <div className='ncontent'>내용테스트1</div>
        </Grid>
      </div>
    </Grid>
  );
};

export default MainInfo;
