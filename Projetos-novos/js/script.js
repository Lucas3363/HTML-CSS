var visibilidade = true; //Variável que vai manipular o botão Exibir/ocultar

    // function exibir() {
    //     document.getElementById("contato").style.display = "block";
    // }

    // function ocultar() {
    //     document.getElementById("contato").style.display = "none";
    // }

    function ocultarExibir() { // Quando clicar no botão.

        if (visibilidade) {//Se a variável visibilidade for igual a true, então...
            document.getElementById("contato").style.display = "flex";//Exibimos a div
            visibilidade = false;//alteramos o valor da variável para true.
        } else {//ou se a variável estiver com o valor false..
            document.getElementById("contato").style.display = "none";//Ocultamos a div..
            visibilidade = true;//Alteramos o valor da variável para false.
        }
    }