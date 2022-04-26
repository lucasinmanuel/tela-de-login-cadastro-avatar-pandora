import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ImgMainLogin from '../images/mainIMG-login.png'
import ImgGmailLogo from '../images/gmail_logo_32px.png'
import ImgFacebookLogo from '../images/facebook_logo_32px.png'

function Login(){

    useEffect(() => {

        const inputEmail = document.querySelector('input[name=email]')
        const inputSenha = document.querySelector('input[name=senha]')

        inputEmail.setAttribute('placeHolder','*E-mail')
        inputSenha.setAttribute('placeHolder','*Senha')

    }, [])

    const {register,handleSubmit} = useForm()

    const onSubmit = (data) => {

        var loginRealizado = false

        for(let i = 0;i < localStorage.length;i++){

            if(data.email === localStorage.getItem('email'+i) && data.senha === localStorage.getItem('senha'+i)){

                loginRealizado = true

            }

        }

        if(loginRealizado === false){

            const inputEmail = document.querySelector('input[name=email]')
            const inputSenha = document.querySelector('input[name=senha]')

            inputEmail.style.border = '2px solid red'
            inputSenha.style.border = '2px solid red'

            document.querySelector('.mensagemErro').innerHTML = '<p>Conta inexistente ou o E-mail e senha estão incorretos.</p>'

        }

    }

    return(
        <section className="login">

            <div className="container">

                <div className="mainImg-wrapper">
                    <img alt="dois Na'vis" src={ImgMainLogin} />
                </div>

                <div className="form-wrapper-login">
                    <h1>BEM-VINDO A PANDORA!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et turpis nec nisi vestibulum egestas ut sit amet lectus. Aliquam laoreet, massa ut consequat ultricies, dolor erat venenatis nisi, eget accumsan urna mi vitae nunc.</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mensagemErro"></div>
                        <input type="email" {...register("email")} />
                        <input type="password" {...register("senha")} />
                        <input type="submit" value="Entrar" />
                    </form>
                    <div className="redesSociais-login">
                        
                        <p>Faça login com:</p>
                    
                        <a href="https://gmail.com"><img alt="Gmail Logo" src={ImgGmailLogo} /></a>
                        <a href="https://facebook.com"><img alt="Facebook Logo" src={ImgFacebookLogo} /></a>
                        
                        <p>Não está registrado? <Link to="/sign-up">Clique aqui!</Link></p>
                        
                    </div>
                </div>

            </div> 

        </section>
    )

}

export default Login;