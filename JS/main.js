$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(00) 00000-0000'
    })

    $('#CPF').mask('000.000.000-00', {
        placeholder:'000.000.000-00'
    })

    $('#CEP').mask('00000-000', {
        placeholder:'00000-000'
    })

    $('form').validate({
        rules: {
            nome: {

                required: true
            },
            email: {

                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            CPF: {
                required: true
            },
            endereco: {

                required:true
            },
            CEP: {

                required:true
            }
        },
        messages: {
            nome: '<span class="mensagemErro">Por favor, insira seu nome corretamente</span>',
            telefone: '<span class="mensagemErro">Por favor, insira seu numero corretamente</span>',
            email: '<span class="mensagemErro">Por favor, insira seu email corretamente</span>',
            CPF: '<span class="mensagemErro">Por favor, insira seu CPF corretamente</span>',
            endereco: '<span class="mensagemErro">Por favor, insira seu endereço completo corretamente</span>',
            CEP: '<span class="mensagemErro">Por favor, insira seu CEP corretamente</span>'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
        }
    })


})