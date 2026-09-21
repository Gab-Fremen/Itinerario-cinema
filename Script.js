const button = document.getElementById("corruptBtn");
const corruption = document.getElementById("corruption");
const fragments = document.querySelector(".corrupt-fragments");


button.addEventListener("click", () => {

    if (document.body.classList.contains("corrupted"))
        return;


    document.body.classList.add("corrupted");


    /* =========================================
       PEGA TEXTOS EXISTENTES NA PÁGINA
       ========================================= */

    const textNodes = [];

    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT
    );


    let node;

    while (node = walker.nextNode()) {

        if (
            node.textContent.trim().length > 2 &&
            !node.parentElement.closest("#corruption")
        ) {

            textNodes.push(
                node.textContent.trim()
            );

        }

    }


    /* =========================================
       CRIA 30 FRAGMENTOS CORROMPIDOS
       ========================================= */

    for (let i = 0; i < 30; i++) {

        const fragment =
            document.createElement("div");

        fragment.className =
            "corrupt-fragment";


        /* escolhe texto aleatório */

        let text =
            textNodes[
                Math.floor(
                    Math.random() * textNodes.length
                )
            ] || "VOCÊ NÃO DEVERIA TER CLICADO";


        /* corta o texto */

        if (text.length > 28) {

            const start =
                Math.floor(
                    Math.random() *
                    Math.max(1, text.length - 15)
                );

            text =
                text.substring(
                    start,
                    start + 15
                );

        }


        /* transforma */

        const distortions = [
            text,
            text.toUpperCase(),
            text.split("").reverse().join(""),
            "ERRO_" + text,
            "///" + text,
            text + "_NULL",
            "VOCÊ NÃO DEVERIA ESTAR AQUI",
            "NÃO CLIQUE",
            "NÃO OLHE",
            "CORROMPIDO",
            "ERRO",
            "..."
        ];


        fragment.textContent =
            distortions[
                Math.floor(
                    Math.random() *
                    distortions.length
                )
            ];


        /* posição */

        fragment.style.left =
            Math.random() * 100 + "%";

        fragment.style.top =
            Math.random() * 100 + "%";


        /* tamanho */

        fragment.style.fontSize =
            Math.random() * 18 + 10 + "px";


        /* atraso */

        fragment.style.animationDelay =
            Math.random() * .35 + "s";


        /* velocidade individual */

        fragment.style.animationDuration =
            Math.random() * .35 + .25 + "s";


        fragments.appendChild(fragment);
    }


    /* =========================================
       DESLOCA ELEMENTOS DA PÁGINA
       ========================================= */

    const elements =
        document.querySelectorAll(
            "body > *:not(#corruption)"
        );


    elements.forEach(element => {

        const x =
            Math.random() * 100 - 50;

        const y =
            Math.random() * 60 - 30;

        const rotation =
            Math.random() * 12 - 6;


        element.animate(

            [
                {
                    transform:
                        "translate(0,0)"
                },

                {
                    transform:
                        `translate(
                            ${x}px,
                            ${y}px
                        )
                        rotate(${rotation}deg)`
                },

                {
                    transform:
                        "translate(0,0)"
                }
            ],

            {
                duration: 700,
                easing: "steps(4)",
            }

        );

    });


    /* =========================================
       MORTE TEMPORÁRIA
       ========================================= */

    setTimeout(() => {

        document.body.classList.remove(
            "corrupted"
        );

        fragments.innerHTML = "";

    }, 750);

});



































window.addEventListener("load", () => {

    // Só executa nas páginas marcadas
    if (!document.body.hasAttribute("data-corrupted")) {
        return;
    }

    const fragments =
        document.querySelector(".corrupt-fragments");

    if (!fragments) return;


    /* =========================================
       COLETA OS TEXTOS DA PÁGINA
       ========================================= */

    const textNodes = [];

    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT
    );

    let node;

    while (node = walker.nextNode()) {

        if (
            node.textContent.trim().length > 2 &&
            !node.parentElement.closest("#corruption")
        ) {

            textNodes.push(
                node.textContent.trim()
            );

        }

    }


    /* =========================================
       ATIVA CORRUPÇÃO
       ========================================= */

    document.body.classList.add("corrupted");


    /* =========================================
       CRIA FRAGMENTOS
       ========================================= */

    for (let i = 0; i < 35; i++) {

        const fragment =
            document.createElement("div");

        fragment.className =
            "corrupt-fragment";


        let text =
            textNodes[
                Math.floor(
                    Math.random() *
                    textNodes.length
                )
            ] || "ERROR";


        /* corta pedaços */

        if (text.length > 25) {

            const start =
                Math.floor(
                    Math.random() *
                    (text.length - 15)
                );

            text =
                text.substring(
                    start,
                    start + 15
                );

        }


        /* =====================================
           TEXTOS POSSÍVEIS
           ===================================== */

        const corruptedTexts = [

            text,

            text.toUpperCase(),

            text.split("").reverse().join(""),

            "///" + text,

            text + "_ERROR",

            "ERR_" + text,

            "NULL",

            "ERROR",

            "CORRUPTED",

            "NÃO OLHE",

            "NÃO CLIQUE",

            "VOCÊ ESTÁ AQUI",

            "ENCONTRE-NOS",

            "LIBERTE-NOS",

            "SALVE-NOS",

            "..."

        ];


        fragment.textContent =
            corruptedTexts[
                Math.floor(
                    Math.random() *
                    corruptedTexts.length
                )
            ];


        /* =====================================
           POSIÇÃO
           ===================================== */

        fragment.style.left =
            Math.random() * 100 + "%";

        fragment.style.top =
            Math.random() * 100 + "%";


        /* tamanho */

        fragment.style.fontSize =
            Math.random() * 20 + 10 + "px";


        /* atraso */

        fragment.style.animationDelay =
            Math.random() * .35 + "s";


        fragment.style.animationDuration =
            Math.random() * .4 + .25 + "s";


        fragments.appendChild(fragment);

    }


    /* =========================================
       DESLOCA OS ELEMENTOS
       ========================================= */

    const elements =
        document.querySelectorAll(
            "body > *:not(#corruption)"
        );


    elements.forEach(element => {

        const x =
            Math.random() * 120 - 60;

        const y =
            Math.random() * 80 - 40;

        const rotation =
            Math.random() * 14 - 7;


        element.animate(

            [
                {
                    transform: "translate(0,0)"
                },

                {
                    transform:
                        `translate(
                            ${x}px,
                            ${y}px
                        )
                        rotate(${rotation}deg)`
                },

                {
                    transform: "translate(0,0)"
                }
            ],

            {
                duration: 750,
                easing: "steps(5)"
            }

        );

    });


    /* =========================================
       TERMINA
       ========================================= */

    setTimeout(() => {

        document.body.classList.remove(
            "corrupted"
        );

        fragments.innerHTML = "";

    }, 800);

});