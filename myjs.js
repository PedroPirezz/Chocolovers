


//DECLARANDO MEU BANCO DE DADOS
let bancoDeDados = [
    {
        user: "Pedro",
        pass: "Senhap",
        imagem: `<img src="./Pedro.png" alt="" class="ftperf">`
    },
    {
        user: "Lucas",
        pass: "Senhal",
        imagem: `<img src="./Padrão.jpg" alt="" class="ftperf">`
    },
    {
        user: "Lorena",
        pass: "Senhal",
        imagem: `<img src="./Lorena.png" alt="" class="ftperf">`
    },
    {
        user: "Fernando",
        pass: "Senhaf",
        imagem: `<img src="./Fernando.png" alt="" class="ftperf">`
    },
    {
        user: "Cerol",
        pass: "Senhac",
        imagem: `<img src="./Thiago.png" alt="" class="ftperf">`
    },
    {
        user: "Maiza",
        pass: "Senham",
        imagem: `<img src="./Maiza.png" alt="" class="ftperf">`
    },
    {
        user: "Sthefany",
        pass: "Senhas",
        imagem: `<img src="./Sthefany.png" alt="" class="ftperf">`
    },
    {
        user: "Saymon",
        pass: "Senhas",
        imagem: `<img src="./Saymon.jpg" alt="" class="ftperf">`
    },
    {
        user: "Welyda",
        pass: "Senhaw",
        imagem: `<img src="./Welyda.png" alt="" class="ftperf">`
    },
    {
        user: "Augusto",
        pass: "Senhaa",
        imagem: `<img src="./Padrão.jpg" alt="" class="ftperf">`
    },
    {
        user: "Karla",
        pass: "Senhak",
        imagem: `<img src="./Padrão.jpg" alt="" class="ftperf">`
    },
    {
        user: "Albert",
        pass: "Senhaa",
        imagem: `<img src="./Padrão.jpg" alt="" class="ftperf">`
    },
    {
        user: "Luiza",
        pass: "Senhal",
        imagem: `<img src="./Padrão.jpg" alt="" class="ftperf">`
    },
    {
        user: "Matheus",
        pass: "Senham",
        imagem: `<img src="./Mathias.png" alt="" class="ftperf">`
    },
    {
        user: "Maria",
        pass: "Senham",
        imagem: `<img src="./Maria.png" alt="" class="ftperf">`
    },
    {
        user: "Paulo",
        pass: "Senhap",
        imagem: `<img src="./Padrão.jpg" alt="" class="ftperf">`

    },
    {
        user: "Larissa",
        pass: "Senhal",
        imagem: `<img src="./Larissa.png" alt="" class="ftperf">`
    },
    {
        user: "Hugo",
        pass: "Senhah",
        imagem: `<img src="./Padrão.jpg" alt="" class="ftperf">`
    },
    {
        user: "iury",
        pass: "Senhai",
        imagem: `<img src="./Padrão.jpg" alt="" class="ftperf">`
    },
    {
        user: "Gabriel",
        pass: "Senhag",
        imagem: `<img src="./Gabriel.png" alt="" class="ftperf">`
    },
    {
        user: "Gabriela",
        pass: "Senhag",
        imagem: `<img src="./Padrão.jpg" alt="" class="ftperf">`
    },
    {
        user: "Beatriz",
        pass: "Senhab",
        imagem: `<img src="./Bia.png" alt="" class="ftperf">`
    },
    {
        user: "Italo",
        pass: "Senhai",
        imagem: `<img src="./Padrão.jpg" alt="" class="ftperf">`
    },
    {
        user: "Bernado",
        pass: "Senhab",
        imagem: `<img src="./Bernado.jpg" alt="" class="ftperf">`
    },
    {
        user: "Panda",
        pass: "Senhap",
        imagem: `<img src="./Padrão.jpg" alt="" class="ftperf">`
    },
    {
        user: "Isabela",
        pass: "Senhai",
        imagem: `<img src="./Padrão.jpg" alt="" class="ftperf">`
    }
]




localStorage.getItem("Quemlogou")//Criando a variavel do navegador para indentificar qual pagina estou
let variavelnavegador = localStorage.getItem("variavelnavegador")

if (variavelnavegador == null)//se for nulo tem que entrar na página de login
{

    localStorage.setItem("contador", 1)

    function atualizarPagina() {
        location.reload();
    }
    //DECLARANDO OS BOTÔES 
    let div = document.querySelector('#resp')
    let botlogin = document.querySelector('#send')
    botlogin.addEventListener("click", login)

    function login() {
        let inputuser = document.querySelector('#user').value//input que vai capturar email digitado
        let inputpass = document.querySelector('#pass').value//input que vai capturar senha digitado

       if((inputuser.length==0) || (inputpass.length==0))
       {
        div.innerHTML = "Preencha os campos"
       }
       else{
        for (let index = 0; index < bancoDeDados.length; index++) {//laço de repoetição para testar email e senha
            if (inputuser == bancoDeDados[index].user) {//testando se o email está correto
                if (inputpass == bancoDeDados[index].pass) {//testando se a senha está correta

                    localStorage.setItem("nomelogado", bancoDeDados[index].user)
                    localStorage.setItem("variavelnavegador", "OpaLogado")
                    index = bancoDeDados.length + 100
                    window.location.href = `listagem.html`

                }
                else //se a senha estiver errada
                {
                    div.innerHTML = "A senha está errada "
                    index = bancoDeDados.length + 100
                }


            }
            else if (index == bancoDeDados.length - 1)//se o email errado
            {
                div.innerHTML = "O Usuario está errado"
            }

        }
    }
}
}
else {
    //DECLARANDO BOTOES DA PÁGINA DA LISTAGEM
    let contador = localStorage.getItem("contador")
    if (contador == 1) {
        localStorage.setItem("contador", 2)

    }
    else {
        window.location = `index.html`
        localStorage.removeItem("variavelnavegador")
        localStorage.removeItem("nomelogado")
        window.addEventListener("beforeunload", limparnav)

        function limparnav() {

            localStorage.removeItem("variavelnavegador")
            localStorage.removeItem("nomelogado")


        }
    }


    let nomeperf = document.querySelector('#nomelogado')
    let nav = localStorage.getItem("nomelogado")
    let testenome = bancoDeDados.findIndex(bancoDeDados => bancoDeDados.user === nav)
    let res1 = document.querySelector('#res1')
    let res2 = document.querySelector('#res2')
    let suprema = document.querySelector('#suprema')

    suprema.innerHTML = `<br><h1>Seja bem-vindo(a) ${nav} </h1><br>${bancoDeDados[testenome].imagem}`
    nomeperf.innerHTML = `${nav}`



    let botverificar = document.querySelector('#validar')
    botverificar.addEventListener("click", montarvalidar)

    let botloggoff = document.querySelector('#botlogoff')//capturando o butao de logoff
    botloggoff.addEventListener("click", logoff)//adicionando evento logoff

    let botlistar = document.querySelector('#botlist')//capurando o butao de listar
    botlistar.addEventListener("click", listar)//adicionando evento logoff

    let botlimpar = document.querySelector('#botlimpar')//capturando o butao limpar
    botlimpar.addEventListener("click", limpar)

    let botdeletar = document.querySelector('#botdeletar')//capturando o butao de deletar
    botdeletar.addEventListener("click", montarteladelete)

    let botcriarusuario = document.querySelector('#criarusuario')
    botcriarusuario.addEventListener("click", criaruser1)

    let bottrocardados = document.querySelector('#bottroca')
    bottrocardados.addEventListener("click", montaralterar)









    function logoff() {
        localStorage.removeItem("variavelnavegador")
        window.location.href = `index.html`
    }

    function listar() {
        let divlist1 = document.querySelector('#res1')
        let divlist2 = document.querySelector('#res2')
        let divsuprema = document.querySelector('#suprema')

        limpar()
        divsuprema.innerHTML = `<h1>Usuarios cadastrados</h1>`
        divlist1.innerHTML = `<br>`
        divlist2.innerHTML = `<br>`





        for (let index = 0; index < bancoDeDados.length; index++) {
            if (index <= bancoDeDados.length / 3) {
                divlist1.innerHTML += `<br><label class="textolista">Nº-${index}___${bancoDeDados[index].user}</label>`
            }
            else if ((index > bancoDeDados.length / 3) && (index <= (bancoDeDados.length / 3) + (bancoDeDados.length / 3))) {
                divsuprema.innerHTML += `<br><label class="textolista">Nº-${index}___${bancoDeDados[index].user}</label>`
            }
            else if (index > (bancoDeDados.length / 3) + (bancoDeDados.length / 3)) {
                divlist2.innerHTML += `<br><label class="textolista">Nº-${index}___${bancoDeDados[index].user}</label>`
            }

        }





    }


    //FUNÇÃO DE LIMPAR A TELA
    function limpar() {
        let divrespag2 = document.querySelector('#respag2')
        let divsuprema = document.querySelector('#suprema')
        let divres = document.querySelector('#res')
        let divpag2 = document.querySelector('#res2')//variavel onde fica guardada a div principal
        let divpag1 = document.querySelector('#res1')//variavel onde fica guardada a div principal
        divpag2.innerHTML = ""
        divpag1.innerHTML = ""
        divsuprema.innerHTML = ""
        divrespag2.innerHTML = ""
        divres.innerHTML = ""
    }

    function montarteladelete() {
        limpar()
        let divpag1 = document.querySelector('#res1')//variavel onde fica guardada a div principal
        let divpag2 = document.querySelector('#res2')//variavel onde fica guardada a div principal
        let divsuprema = document.querySelector('#suprema')
        let respag2 = document.querySelector('#respag2')
        divsuprema.innerHTML = `<h1>Deletar Usuario</h1>`

        divpag1.innerHTML = `<br>`
        divpag2.innerHTML = `<br>`


        for (let index = 0; index < bancoDeDados.length; index++) {


            if (index < bancoDeDados.length / 3) {
                divpag1.innerHTML += `<br><input class="textolista" type="checkbox" id='${index}'>Nº${index}--${bancoDeDados[index].user}`
            }
            else if ((index > bancoDeDados.length / 3) && (index <= (bancoDeDados.length / 3) + (bancoDeDados.length / 3))) {
                divsuprema.innerHTML += `<br><input class="textolista" type="checkbox" id='${index}'>Nº${index}--${bancoDeDados[index].user}`
            }
            else {
                divpag2.innerHTML += `<br><input class="textolista" type="checkbox" id='${index}'>Nº${index}--${bancoDeDados[index].user}`
            }
        }




        respag2.innerHTML += `<br><br><input type="button" id="butdelete1" value="DELETAR"">`
        let fazer = document.querySelector('#butdelete1')
        fazer.addEventListener("click", deletar)
    }




    function deletar() {

        let div = document.querySelector('#respag2')
        let quemvouapagar = [""]
        let quantos = 0
        let quemvouapagarnome = []

        for (let index = 0; index < bancoDeDados.length; index++) {

            let checkbox = document.getElementById(`${index}`).checked

            if (checkbox == true) {
                quemvouapagar[index] = "1"
                quemvouapagarnome.push(` ${bancoDeDados[index].user}`)
                quantos = quantos + 1



            }
            else {

                quemvouapagar[index] = "0"
            }
        }
        if (quantos > 0) {
            div.innerHTML = ""
            if (confirm(`Você deseja apagar ${quantos} usuario(s) (${quemvouapagarnome} )`) == true) {

                for (let index = quemvouapagar.length; index >= 0; index--) {
                    if (quemvouapagar[index] == 1) {
                        bancoDeDados.splice(index, 1)


                    }
                }
                montarteladelete()
            }else{
                respag2.innerHTML += `<br><br><input type="button" id="butdelete1" value="DELETAR"">`
                let fazer = document.querySelector('#butdelete1')
                fazer.addEventListener("click", deletar)
            }
        }
        else {
            div.innerHTML = ``
            div.innerHTML += `<br><br><input type="button" id="butdelete1" value="DELETAR"">`

            div.innerHTML += ("<br>Nenhum usuario selecionado")
            let fazer = document.querySelector('#butdelete1')
            fazer.addEventListener("click", deletar)
        }




    }

    function criaruser1() {
        limpar()
        let divdiv = document.querySelector('#bodylista')
        let divpag2 = document.querySelector('#suprema')//variavel onde fica guardada a div principal
        divpag2.innerHTML = `<br><h1>Cadastro de usuario</h1><br><br>`
        divpag2.innerHTML += `<input type="text" class="cria" id="newuser" placeholder="Usuario"><br><br>
    <input type="password" id="newpass" class="cria" placeholder="Senha"><br>
    <input type="password" id="confirmnewpass" class="cria" placeholder="Confirme senha"><br><br>
    <input type="button" id="butnewuser" class="botcria" value="Criar">`
        let butcriaruser = document.querySelector('#butnewuser')
        butcriaruser.addEventListener("click", criaruser2)


    }
    function criaruser2() {
        let butcriaruser = document.querySelector('#butnewuser')
        butcriaruser.addEventListener("click", criaruser2)

        let inputnewuser = document.querySelector('#newuser').value
        let inputnewpass = document.querySelector('#newpass').value
        let comfirmnewpass = document.querySelector('#confirmnewpass').value
        let divpag2 = document.querySelector('#suprema')//variavel onde fica guardada a div principal
        let div1 = document.querySelector('#res')



        let verificar = bancoDeDados.find(bancoDeDados => bancoDeDados.user === inputnewuser)


        if ((inputnewpass.length == 0) || (comfirmnewpass.length == 0) || (inputnewuser.length == 0)) {
            div1.innerHTML = ("Preencha os campos")
        }
        else if (verificar) {
            div1.innerHTML = `Nome de usuario já em uso`
            let butcriaruser = document.querySelector('#butnewuser')
            butcriaruser.addEventListener("click", criaruser2)
        }
        else if (inputnewpass == comfirmnewpass) {
            bancoDeDados.push({ user: inputnewuser, pass: inputnewpass, imagem: `<img src="./Padrão.jpg" alt="">` },)
            listar()
        }
        else {

            div1.innerHTML = `<br>As senhas digitadas devem ser iguais`
        }
    }


    function montaralterar() {
        limpar()
        let divpag2 = document.querySelector('#suprema')//variavel onde fica guardada a div principal
        divpag2.innerHTML = `<h1>Alterar Dados</h1><br><br><input type="text" placeholder="Usuario Atual" id="usercadastrado"><br><br>
    <input type="password" placeholder="senha Atual" id="passcadastrado"><br><br>
    <input type="text" placeholder="Novo usuario" id="newuser"><br><br>
    <input type="password" placeholder="Nova senha" id="newpass"><br>
    <input type="password" placeholder="Confirme senha" id="confnewpass"><br><br>
    <input type="button" value="Alterar" id="buttrocar"><br>`

        let bottroca1 = document.querySelector('#buttrocar')
        bottroca1.addEventListener("click", alterar)




    }
    function alterar() {
        let confirmnewpass = document.querySelector('#confnewpass').value
        let useratual = document.querySelector('#usercadastrado').value
        let passcadastrado = document.querySelector('#passcadastrado').value
        let newuser = document.querySelector('#newuser').value
        let newpass = document.querySelector('#newpass').value
        let divresposta = document.querySelector('#res')

        let testeemail = bancoDeDados.find(bancoDeDados => bancoDeDados.user === useratual)
        let indice = bancoDeDados.findIndex(bancoDeDados => bancoDeDados.user === useratual)
       
        let testenovousuari = bancoDeDados.find(bancoDeDados => bancoDeDados.user === newuser)

        if ((useratual.length == 0) || (passcadastrado.length == 0) || (newpass.length == 0) || (newuser.length == 0)) {
            divresposta.innerHTML = ("Preencha os campos ")
        }
        else {

            if (testeemail) {
                if (passcadastrado==bancoDeDados[indice].pass) {
                    if (newpass == confirmnewpass) {
                        if (testenovousuari) {
                            divresposta.innerHTML = ("Nome de Usuario já cadastrado")
                        } else {

                            bancoDeDados[indice].user = newuser
                            bancoDeDados[indice].pass = newpass
                            listar()
                        }
                    }
                    else {
                        divresposta.innerHTML = ("As novas senhas devem ser iguais")
                    }

                }
                else {
                    divresposta.innerHTML = ("Senha atual incorreta")
                }

            }
            else {
                divresposta.innerHTML = ("Usuario inexistente")
            }
        }

    }

    function montarvalidar() {
        limpar()
        let divpag2 = document.querySelector('#suprema')//variavel onde fica guardada a div principal
        divpag2.innerHTML = `<br><br><h1>Teste seu usuario</h1><br><br><input type="text" placeholder="Usuario" id="testuser"><br><br>
    <input type="password" placeholder="Senha" id="testsenha"><br><br>
    <input type="button" value="Verificar" id="bottest">`

        let bottro = document.querySelector('#bottest')
        bottro.addEventListener("click", validar)

    }

    function validar() {

        let bottro = document.querySelector('#bottest')
        bottro.addEventListener("click", validar)

        let testeemail1 = document.querySelector('#testuser').value
        let testsenha1 = document.querySelector('#testsenha').value

        let divesquerda = document.querySelector('#res1')
        let divdireita = document.querySelector('#res2')
        let resposta = document.querySelector('#respag2')



        let indexemail = bancoDeDados.findIndex(bancoDeDados => bancoDeDados.user === testeemail1)
        let testandoemail = bancoDeDados.find(bancoDeDados => bancoDeDados.user === testeemail1)
        let testandosenha = bancoDeDados.find(bancoDeDados => bancoDeDados.pass === testsenha1)


  
        
            if (testandoemail) {

                if (testsenha1==bancoDeDados[indexemail].pass) {
                    resposta.innerHTML = ""
                    divesquerda.innerHTML = `<br><h1>Ola ${bancoDeDados[indexemail].user} </h1><br>Login realizado com sucesso`
                    divdireita.innerHTML = `${bancoDeDados[indexemail].imagem}`

                    let bottro = document.querySelector('#bottest')
                    bottro.addEventListener("click", validar)
                }
                else {
                    
                    divdireita.innerHTML = ""
                    divesquerda.innerHTML = ""
                    resposta.innerHTML = ("A senha digitada está incorreta")

                    let bottro = document.querySelector('#bottest')
                    bottro.addEventListener("click", validar)
                }

            }
            else {
                divdireita.innerHTML = ""
                divesquerda.innerHTML = ""
                resposta.innerHTML = ("Usuario não existe")
                let bottro = document.querySelector('#bottest')
                bottro.addEventListener("click", validar) 
            }
        



    }





}


