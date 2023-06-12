import React, { useEffect } from 'react'
import { Grid, Box, Typography, Button } from '@material-ui/core';
import './Home.css'
import { Stack } from '@mui/material';
import Sobre from '../sobre/Sobre';

function Home() {
  useEffect(() => {
    document.title = 'PeriFeira - Início';
  }, []);

	return (
			<>
			<Grid container className='caixa' alignItems='center' justifyContent='center'>
				<Grid item xs={4}>
					<Stack flexDirection='column' gap={2}>
						<Box>
						<Typography className='texto1' variant='h2'>Alimentos saudáveis, sustentáveis e acessíveis.</Typography>
						</Box>
						<Box>
						<Button className='botao' variant="contained">Começar</Button>
						</Box>
					</Stack>
				</Grid>
			<Grid item justifyContent='center' xs={4}>
						<img className='image-home' src="https://media.discordapp.net/attachments/1094735432178221206/1113893229704781904/Camada_5.png?width=780&height=676" alt="" />
			</Grid>
			</Grid>
			<Sobre/>	
	</>
		);
};
export default Home;
