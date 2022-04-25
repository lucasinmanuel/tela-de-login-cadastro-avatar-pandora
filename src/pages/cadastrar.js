import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';

function Cadastrar(){

    useEffect(() => {

        //Adcionando placeHolder em input dinamicamente
        const inputName = document.querySelector('input[name=nome]')
        inputName.setAttribute('placeHolder','*Nome Completo')

        const inputEmail = document.querySelector('input[name=email]')
        inputEmail.setAttribute('placeHolder','*E-mail')

        const inputSenha = document.querySelector('input[name=senha]')
        inputSenha.setAttribute('placeHolder','*Senha')

        const inputRepitaSenha = document.querySelector('input[name=senharepita]')
        inputRepitaSenha.setAttribute('placeHolder','*Repita a senha')

        //Criando bullets
        var qtdCuriosidadesSingle = document.querySelectorAll('.curiosidades-single')
        const spanBulletsWrapper = document.querySelector('.spanBullets-wrapper')

        spanBulletsWrapper.innerHTML = ''
        for(let i = 0;i < qtdCuriosidadesSingle.length;i++){
            
            spanBulletsWrapper.innerHTML += `
            
                <span></span>

            `

        }

        //Click nos bullets
        var qtdbulletIndex = document.querySelectorAll('.spanBullets-wrapper span')
        qtdbulletIndex.forEach((value,index)=>{

            if(index === 0){
                qtdbulletIndex[index].style.backgroundColor = 'rgb(62, 58, 158)'
            }

            qtdbulletIndex[index].addEventListener('click',()=>{

                for(let i = 0;i < qtdCuriosidadesSingle.length;i++){

                    qtdCuriosidadesSingle[i].style.display = 'none'
                    qtdbulletIndex[i].style.backgroundColor = '#7365be'

                }

                qtdCuriosidadesSingle[index].style.display = 'block'
                qtdbulletIndex[index].style.backgroundColor = 'rgb(62, 58, 158)'

            })

        })

    })//UseEffect()

    const {register,handleSubmit} = useForm()
    var keyGenerate = 0
    
    const onSubmit = (data) => {

        const inputNome = document.querySelector('input[name=nome]')
        const inputEmail = document.querySelector('input[name=email]')
        const inputSenha = document.querySelector('input[name=senha]')
        const inputRepitaSenha = document.querySelector('input[name=senharepita]')

        //RESET DE BORDA DE ERRO NOS INPUTS
        inputNome.style.border = '2px solid #CFBDF8'
        inputEmail.style.border = '2px solid #CFBDF8'
        inputSenha.style.border = '2px solid #CFBDF8'
        inputRepitaSenha.style.border = '2px solid #CFBDF8'

        //VALIDAÇÃO DE NOME COMPLETO
        if(data.nome.match(/^[A-Za-z]{2,}\s[A-Za-z]{2,}/)){
            
            //ENVIAR NOME COMPLETO PARA localStorage
            localStorage.setItem('nomeCompleto'+keyGenerate,data.nome)


        }else{
            inputNome.style.border = '2px solid red'
        }

        //VALIDAÇÃO DE EMAIL
        if(data.email.match(/^\w+@[a-z]+.[a-z]{3}$/)){
            
            //ENVIAR EMAIL PARA localStorage
            localStorage.setItem('email'+keyGenerate,data.email)

        }else{
            inputEmail.style.border = '2px solid red'
        }

        //VALIDAÇÃO DE SENHA
        if(data.senha.match(/[a-z]{1,}/) && 
        data.senha.match(/[A-Z]{1,}/) && 
        data.senha.match(/[0-9]{1,}/) && 
        data.senha.match(/[!"#$%&'()*+,-./:;<=>?@^_`{|}~]{1,}/) &&
        data.senha.length >= 6){

            //ENVIAR SENHA PARA localStorage
            localStorage.setItem('senha'+keyGenerate,data.senha)

        }else{
            inputSenha.style.border = '2px solid red'
        }

        //VALIDAÇÃO DE REPITA A SENHA
        if(data.senharepita === data.senha && data.senharepita !== ''){

            //A REPITA SENHA ESTÁ CORRETA!

        }else{
            inputRepitaSenha.style.border = '2px solid red'
        }

        keyGenerate++

    }

    return(
        <section className="cadastrar">

            <div className="container">

                <div className="form-wrapper-cadastrar">
                    <h1>SE REGISTRE PARA ACESSAR PANDORA!</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input type="text" {...register("nome")} />
                        <input type="email" {...register("email")} />

                        <input type="password" {...register("senha")} /> 
                        <p>crie uma senha forte com letras(maiúsculas e minúsculas),números e caracteres especiais. É preciso ter mínimo 6 caracteres.</p>
                      
                        <input type="password" {...register("senharepita")} />
                        <input type="submit" value="Cadastrar-se" />

                    </form>
                </div>

                <div className="apresentacao-wrapper-cadastrar">

                    <h1>Saiba sobre as curiosidades deste mundo!</h1>

                    <div className="curiosidades-wrapper">

                        <div className="curiosidades-single" style={{display:'block'}}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ante purus, posuere vitae efficitur at, faucibus ac neque. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin id magna euismod, auctor ipsum ac, hendrerit velit. Sed mollis metus ac leo congue molestie. Duis blandit felis mauris, in varius nibh condimentum ac. Quisque id nisi nec orci pulvinar vestibulum.</p>
                        </div>

                        <div className="curiosidades-single" style={{display: 'none'}}>
                            <p>Cras in erat vehicula, euismod est eget, imperdiet justo. Quisque ac tempus lacus. In lectus nisl, tristique id nunc at, rhoncus tristique sem. Sed id diam et quam feugiat tincidunt. Praesent feugiat turpis in metus varius auctor. Integer ornare et augue consequat semper. Vivamus commodo elementum sollicitudin. Curabitur convallis augue volutpat, elementum lacus eu, sodales nunc. Curabitur malesuada mi eget nisl tincidunt, ac tempus nisi sagittis.</p>
                        </div>

                        <div className="curiosidades-single" style={{display: 'none'}}>
                            <p>Pellentesque gravida sagittis ultricies. Aenean non pellentesque ligula, at facilisis leo. Sed in tellus mollis, luctus eros sit amet, varius magna. Cras porta ante sit amet justo sagittis, quis sagittis diam gravida. Mauris et consectetur arcu. Nunc velit mauris, pulvinar sed libero euismod, aliquet pulvinar risus. Fusce tempor velit at tellus porttitor, quis vulputate nisi blandit. Maecenas fringilla mi non diam fringilla malesuada. Cras vitae dui sed augue scelerisque luctus. Donec vitae porttitor velit.</p>
                        </div>

                        <div className="curiosidades-single" style={{display: 'none'}}>
                            <p>Vestibulum aliquet libero vitae nunc aliquet, vel tincidunt ligula dictum. Ut malesuada, metus nec mattis placerat, nisi ex viverra nunc, ac ultricies lectus ex sed arcu. Proin quam justo, eleifend porttitor pulvinar vitae, dictum vel ligula. Suspendisse potenti. Cras id faucibus nunc. Mauris auctor at turpis sit amet dapibus. Quisque vitae elementum mi.</p>
                        </div>

                    </div>

                    <div className="spanBullets-wrapper">
                        
                    </div>

                </div>

            </div>

        </section>
    )

}

export default Cadastrar;