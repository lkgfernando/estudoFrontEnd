try {
    console.log('Sem Erro')
    console.log(ErroDeExecucao)
} catch (err) {
    console.log('Erro inesperado')
} finally {
    console.log('Finally: Sempre é executado')
}