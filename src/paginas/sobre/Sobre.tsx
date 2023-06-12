import React, { useEffect } from 'react';
import './Sobre.css'
import { Grid, Box, Typography, Link } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Sobre() {
  useEffect(() => {
    document.title = 'PeriFeira - Sobre';
  }, []);
const desenvolvedores = [
{
nome: "Renato da Silva Nunes",
github: "https://github.com/renatonunes74",
linkedin: "https://www.linkedin.com/in/renato-nunes",
},
{
nome: "Jéssica Mendes",
github: "https://github.com/JesscMendesr",
linkedin: "https://www.linkedin.com/in/jessicamendesraulino",
},
{
nome: "Igor Menezes",
github: "https://github.com/IgorWz",
linkedin: "https://www.linkedin.com/in/igor-menezes-636b60239/",
},
{
nome: "Jonatas Nascimento",
github: "https://github.com/nascimentojon",
linkedin: "https://www.linkedin.com/in/jonatas-nascimento-3277a818a/",
},
{
nome: "Larissa Pimenta",
github: "https://github.com/LarissaMarquesPimenta",
linkedin: "https://www.linkedin.com/in/larissamarquespimenta/",
},
{
nome: "Graziella",
github: "https://github.com/HeiGrazi",
linkedin: "https://www.linkedin.com/in/graziella-santos-9b31aa199/",
},
]
	return (
			<>
			<Box className="secao1" paddingBottom="96px"/>
			<Grid container className="secao1" alignItems='center' justifyContent='center'>
			<Grid item xs={8} md={4}>
			<Typography className="titulo" variant="h4" textAlign="right">O que é a PeriFeira?</Typography>
			<Typography className="texto">PeriFeira é um projeto voltado a periferia, aonde adquirimos alimentos perfeitamente adequados para consumo, mas que são considerados "fora do padrão" e, por essa razão, muitas vezes não são aceitos pelas grandes redes de supermercados.</Typography>
			<Box paddingBottom="130px"/>
			<Typography className="titulo" variant="h4" textAlign="left">Você sabia?</Typography>
			<Typography className="texto">Segundo as nações unidas,</Typography> 
			<Typography className="dados" variant="h3">17%</Typography>
			<Typography className="texto">do que é produzido se perde entre a colheita e as prateleiras dos supermercados e armazéns.</Typography>
			</Grid>
			<Grid xs={8} md={4}>
			<img src="https://raw.githubusercontent.com/Projeto-PeriFeira/PeriFeira_React/main/src/assets/sobre/ilustracao-page-sobre.svg" alt="" />
			<Box paddingBottom="60px"/>
			<Typography className="dados" variant="h3">821 Milhões</Typography>
			<Typography className="texto">de pessoas no mundo estão em estado de insegurança alimentar, um terço de toda a produção alimentar do mundo é desperdiçada diariamente.</Typography> 
			</Grid>
			</Grid>
			<Box className="secao1" paddingBottom="98px"/>
			<Grid className="secao1" container alignItems='center' justifyContent='center'>
			<Grid item xs={8} md={4}>
			<Typography className="frase" variant="h4">"Consumidor da periferia reclama que empresas aprofundam segregação urbana"</Typography> 
			<Typography className="texto">- Folha de São Paulo, setembro, 2021.</Typography>
			<Box className="secao1" paddingBottom="67px"/>
			</Grid>
			</Grid>
			<Box paddingBottom="87px"/>
			<Grid container paddingBottom="160px" alignItems='center' justifyContent='center'>
			<Grid item xs={8} md={8}>
			<Typography className="titulo" variant="h4" textAlign="center">Nossa Equipe</Typography>
			</Grid>
			<Grid container alignItems='center' justifyContent='center'>
			<Grid item xs={8} md={6}>
			<Typography className="texto" marginBottom="42px" textAlign="center">Nossa equipe é composta por desenvolvedores engajados, comprometidos e recém-formados na Generation Brasil! Juntos, transformamos códigos em soluções extraordinárias</Typography>
			</Grid>
			<Grid container
			justifyContent="center"
			alignItems="center"
			textAlign="center"
			>
			{desenvolvedores.map(desenvolvedor => (
			<Grid item xs={8} md={4}>
			<img className="perfil" alt={desenvolvedor.nome} src={desenvolvedor.github + ".png"}/>
			<Typography className="texto">{desenvolvedor.nome}</Typography>
			<Typography className="desenvolvedores">
			<Link className="texto" href={desenvolvedor.github} target="_blank"><GitHubIcon/></Link>
			<Link className="texto" href={desenvolvedor.linkedin} target="_blank"><LinkedInIcon/></Link>
			</Typography>
			</Grid>
			))}
			</Grid>
			</Grid>
			</Grid>
			</>
			)
}

export default Sobre
