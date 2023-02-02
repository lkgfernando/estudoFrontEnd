class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposValidos();
        const senhasValidas = this.senhasValidas();
        // console.log(camposValidos);
        // console.log(senhasValidas);
        if(camposValidos && senhasValidas) {
            alert('Formulário enviado');
            this.formulario.submit();
        }
    }

    camposValidos() {
        let valid = true;
        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }
        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.nextElementSibling.innerText;
            if(!campo.value) {
                this.criaErro(campo, `Campo ${label} não estar em brando.`);
                valid = false;
               
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
                console.log(campo, valid)
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
                console.log(campo, valid)
            }
        }

        return valid;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido');
            return false;
        }
        
        return true
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true
        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid= false
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuário precisar conter letras e numeros.');
            valid = false
        }
        console.log(valid);
        return valid;

    }

    senhasValidas() {
        let valid = true ;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {
            valid = false
            this.criaErro(senha, 'Campos senhas e repetir senha precisam ser iguais.');
            this.criaErro(repetirSenha, 'Campos senhas e repetir senha precisam ser iguais.');
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'Senha precisa ter entre 6 a 12 caracteres.')
        }

        return valid;
    }

}

const valida = new ValidaFormulario();


