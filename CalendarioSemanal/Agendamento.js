
function diasDS(){

    // Obter a data atual
    let dataAtual = new Date();
    
    // Obter o dia da semana (0 = Domingo, 1 = Segunda, ...)
    let diaDaSemana = dataAtual.getDay();
    
    // Definir a data de início da semana subtraindo o dia da semana atual da data atual
    let diaInicial = new Date(dataAtual);
    diaInicial.setDate(dataAtual.getDate() - diaDaSemana);
    
    // Criar um array para armazenar os meses
    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Outubro','Novembro','Setembro','Dezembro'];
    
    //Define no calendario o mes
    document.getElementById('mes').textContent =meses[new Date(diaInicial).getMonth()+1];
    
    // Criar um loop para definir os dias da semana
    for (let i = 0; i < 7; i++) {
        // Calcular a data para cada dia da semana
        let date = new Date(diaInicial);
    
        date.setDate(diaInicial.getDate() + i);
    
        // Obter o nome do dia da semana e a data formatada
        let formattedDate = `${date.getDate()}`;
    
        let dayText = document.getElementById(`dayT${i}`);
        dayText.innerHTML = `${formattedDate}`;
    }

}
