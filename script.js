function chkLogin (email,pswrd){
   registros=[
      {email:'adm',senha:'adm'},
      {email:'feliperosademendonca@gmail.com',senha:1234},
      {email:'emanuelaca@gmail.com',senha:1234},
      {email:'joao@gmail.com',senha:1234},
      {email:'maria@gmail.com',senha:1234},
      {email:'danilo@gmail.com',senha:1234},
      {email:'jose@gmail.com',senha:1234}

   ]
   
   let obj_Login = {email: email,senha:pswrd}
   
   $.each(registros, function ( i, element) { 
      let email_reg = registros[i].email
      let senha_reg = registros[i].senha
      let obj_reg = {email:email_reg,senha:senha_reg }
        if( obj_Login.email == obj_reg.email && obj_Login.senha== obj_reg.senha ){

          alert('Bem vindo Usuário:'+obj_Login.email)
          window.location.replace("/pgConfirm.html");

      }else{
         alert('Usuário Não Cadastrado')
      }
      return false;

   })
}

//tabela de registros


//Esperar o documento carregar
$( document ).ready(function() {

   
 $('input[name="submit"]').click(function(){
    let email_Input= $("input[name='email']").val()
    let senha_Input= $("input[name='pswd']").val()
    let usr = {
         email : email_Input,
         senha : senha_Input
               }
    //alert("email: "+usr.email +"senha: "+usr.senha)

   chkLogin(usr.email,usr.senha)

   })

})