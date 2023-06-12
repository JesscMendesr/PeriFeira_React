import React, { ChangeEvent, useEffect, useState } from 'react';
import './Login.css';
import { Grid, Box, Typography, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { UsuarioLogin } from '../../model/UsuarioLogin';
import { login } from '../../services/Service';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/tokens/actions';

  import 'react-toastify/dist/ReactToastify.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function Login() {
  useEffect(() => {
    document.title = 'PeriFeira - Login';
  }, []);

	// cria a variavel para navegação interna pela rota
	const navigate = useNavigate();
	const dispatch = useDispatch()

		// cria um estado para armazenamento no localStorage do navegador
		const [token, setToken] = useState('');
	const [carregando, setCarregando] = useState(false)
const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword(!showPassword);

		// cria um estado de controle para o usuário preencher os dados de login
		const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
id: 0,
nome: '',
usuario: '',
senha: '',
foto: '',
token: '',
});

const [respUsuarioLogin, setRespUsuarioLogin] = useState<UsuarioLogin>({
id: 0,
nome: '',
usuario: '',
senha: '',
foto: '',
token: '',
});

// atualiza os dados do estado acima, e ajuda a formar o JSON para a requisição
function updateModel(event: ChangeEvent<HTMLInputElement>) {
	setUsuarioLogin({
			...usuarioLogin,
			[event.target.name]: event.target.value,
			});
}

// função que envia o formulário para o backend
async function enviar(event: ChangeEvent<HTMLFormElement>) {
	event.preventDefault();
	setCarregando(true)
	const toastId = toast.loading('Verificando os dados...')
		try {
			await login('/usuarios/logar', usuarioLogin, setRespUsuarioLogin);
			toast.dismiss(toastId)
			toast.success("Bem vinde!");
setCarregando(false)
		} catch (error) {
			toast.dismiss(toastId)
			toast.error("Dados incorretos");
setCarregando(false)
	}
}

useEffect(() => {
		if(respUsuarioLogin.token !== ''){
		dispatch(addToken(respUsuarioLogin.token))
		dispatch(addId(respUsuarioLogin.id.toString()))
		navigate('/home');
		}
		}, [respUsuarioLogin.token])

return (
	<Grid className="background"  container direction='row' justifyContent="center" alignItems="center">
            <Grid xs={6} >
                    <Box className="imagem"></Box>
                </Grid>
            <Grid alignItems="center" xs={4} >
                <Box paddingX={6}>
                    <Typography className='text' variant="h4" gutterBottom color="textPrimary" component='h4' align="center">Entrar</Typography>
                    <Box paddingX={7} paddingY={6} className="form">
                        <form onSubmit={enviar}>
                            <TextField id='usuario' label='E-mail' variant="outlined" name="usuario" margin="normal" fullWidth value ={usuarioLogin.usuario} onChange={(event:ChangeEvent<HTMLInputElement>) => updateModel(event)} />
                            <TextField 
														type={showPassword ? "text" : "password"}
														id='senha' label='Senha' variant="outlined" name="senha" margin="normal" fullWidth value={usuarioLogin.senha} onChange={(event:ChangeEvent<HTMLInputElement>) => updateModel(event)}
														sx={{
          input: {
            color: "var(--laranja)",
          }
        }}
InputProps={{
endAdornment: (
							 <InputAdornment position="end">
							 <IconButton
							 aria-label="toggle password visibility"
							 onClick={handleClickShowPassword}
							 >
							 {showPassword ? <VisibilityIcon className="visibilidadeSenha"/> : <VisibilityOff className="visibilidadeSenha"/>}
							 </IconButton>
							 </InputAdornment>
							)
}}
														/>
                            <Box display="flex" justifyContent="center" marginTop={2}>
                                <Box marginRight={1}>
                                    <Typography className='text'variant="subtitle1" gutterBottom align="center">Não tem uma conta ?</Typography>
                                </Box>
                                <Link className="reset-link" to = '/cadastro' >
                                    <Typography className='text bold' variant="subtitle1" gutterBottom align="center" >Cadastre-se</Typography>
                                </Link>
                            </Box>
                            <Box marginTop={2} textAlign="center">
                                    <Button className='btn' type='submit' variant='contained' color='primary' disabled={carregando}>
                                    Logar
                                    </Button>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Grid>
        </Grid>
		)
}

export default Login;
