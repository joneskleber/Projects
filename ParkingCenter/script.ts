interface Veiculo {
  nome: string;
  placa: string;
  entrada: Date | string;
}

(function () {
  const $ = (query: string): HTMLInputElement | null =>
    document.querySelector(query);

  //** calcula o tempo de estacionamento */
  function calcTempo(mil: number) {
    const min = Math.floor(mil / 60000);
    const sec = Math.floor((mil % 60000) / 1000);

    return `${min} minutos e ${sec} segundos`;
  }
  function patio() {
    /** Manipula o local store */
    function ler(): Veiculo[] {
      return localStorage.patio ? JSON.parse(localStorage.patio) : [];
    }

    //** Salva no localStore */
    function salvar(veiculo: Veiculo[]) {
      localStorage.setItem("patio", JSON.stringify(veiculo));

      // Limpa o campo
      $("#nome").value = "";
      $("#placa").value = "";
    }

    function adicionar(veiculo: Veiculo, salva?: boolean) {
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
            <img src="./images/delete.svg" alt="delete" class="delete thAcoes thAcoes-img" data-placa="${
              veiculo.placa
            }" />     

        </td>
        `;

      row.querySelector(".delete")?.addEventListener("click", function () {
        remover(this.dataset.placa);
      });

      $("#patio")?.appendChild(row);

      if (salva) {
        salvar([...ler(), veiculo]);
      }
    }

    function remover(placa: string) {
      const { entrada, nome } = ler().find(
        (veiculo) => veiculo.placa === placa
      );

      const tempo = calcTempo(
        new Date().getTime() - new Date(entrada).getTime()
      );

      if (
        !confirm(`O veículo ${nome} permaneceu por ${tempo}. Deseja encerrar?`)
      )
        return;

      salvar(ler().filter((veiculo) => veiculo.placa !== placa));
      render();
    }

    function render() {
      $("#patio")!.innerHTML = "";
      // limpa o conteúdo dos campos
      $("#nome")!.innerHTML = "";
      $("#placa")!.innerHTML = "";

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
  $("#cadastrar")?.addEventListener("click", () => {
    const nome = $("#nome")?.value;
    const placa = $("#placa")?.value;

    if (!nome || !placa) {
      alert("Os campos nome e placa são obrigatórios.");
      return;
    }

    patio().adicionar({ nome, placa, entrada: new Date().toISOString() }, true);
  });
})();
function moment(arg0: string, arg1: string) {
  throw new Error("Function not implemented.");
}
