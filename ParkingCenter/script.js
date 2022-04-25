(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    //** calcula o tempo de estacionamento */
    function calcTempo(mil) {
        const min = Math.floor(mil / 60000);
        const sec = Math.floor((mil % 60000) / 1000);
        return `${min} minutos e ${sec} segundos`;
    }
    function patio() {
        /** Manipula o local store */
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        //** Salva no localStore */
        function salvar(veiculo) {
            localStorage.setItem("patio", JSON.stringify(veiculo));
            // Limpa o campo
            $("#nome").value = "";
            $("#placa").value = "";
        }
        function adicionar(veiculo, salva) {
            var _a, _b;
            const row = document.createElement("tr");
            //   <td>${veiculo.entrada}</td>
            row.innerHTML = `
        <td class="thNome">${veiculo.nome}</td>
        <td class="thPlaca">${veiculo.placa}</td>
        <td class="thEntrada" data-time="${veiculo.entrada}">
        ${veiculo.entrada.toLocaleString("pt-BR", {
                hour: "numeric",
                minute: "numeric",
            })}
        </td>
        <td>
            <img src="./images/delete.svg" alt="delete" class="delete thAcoes thAcoes-img" data-placa="${veiculo.placa}" />     

        </td>
        `;
            (_a = row.querySelector(".delete")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                remover(this.dataset.placa);
            });
            (_b = $("#patio")) === null || _b === void 0 ? void 0 : _b.appendChild(row);
            if (salva) {
                salvar([...ler(), veiculo]);
            }
        }
        function remover(placa) {
            const { entrada, nome } = ler().find((veiculo) => veiculo.placa === placa);
            const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime());
            if (!confirm(`O veículo ${nome} permaneceu por ${tempo}. Deseja encerrar?`))
                return;
            salvar(ler().filter((veiculo) => veiculo.placa !== placa));
            render();
        }
        function render() {
            $("#patio").innerHTML = "";
            // limpa o conteúdo dos campos
            $("#nome").innerHTML = "";
            $("#placa").innerHTML = "";
            // document.getElementById("nome").textContent = "";
            // document.getElementById("placa").textContent = "";
            const patio = ler();
            if (patio.length) {
                patio.forEach((veiculo) => adicionar(veiculo));
            }
        }
        return { ler, adicionar, remover, salvar, render };
    }
    /** fim da função patio */
    /**Renderiza o patio */
    patio().render();
    /** monitora a captura dos inputs vindo do html */
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        const nome = (_a = $("#nome")) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $("#placa")) === null || _b === void 0 ? void 0 : _b.value;
        if (!nome || !placa) {
            alert("Os campos nome e placa são obrigatórios.");
            return;
        }
        patio().adicionar({ nome, placa, entrada: new Date().toISOString() }, true);
    });
})();
function moment(arg0, arg1) {
    throw new Error("Function not implemented.");
}
