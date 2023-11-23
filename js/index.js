const divPrev = document.getElementById("btn-prev");
const divNext = document.getElementById("btn-next");
const divPrev2 = document.getElementById("btn-prev-2");
const divNext2 = document.getElementById("btn-next-2");


function hideButton(x) {
    switch (x) {
        case 1:
            divNext.innerHTML = `
                            <button onclick="hideButton(2)" class="carousel-control-next"
                                style="background-color: #398143; width: 70px; border-radius: 10px 10px 10px;"
                                type="button" data-bs-target="#bannerstop" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Próximo</span>
                            </button>
            `
            divPrev.innerHTML = ``
            break
        
        case 2:
            divPrev.innerHTML = `
                            <button onclick="hideButton(1)" class="carousel-control-prev"
                                style="background-color: #398143; width: 70px; border-radius: 10px 10px 10px;"
                                type="button" data-bs-target="#bannerstop" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Anterior</span>
                            </button>
            
            `
            divNext.innerHTML = ``
            break

        case 3:
            divNext2.innerHTML = `
                            <button onclick="hideButton(4)" class="carousel-control-next"
                                style="background-color: #398143; width: 70px; border-radius: 10px 10px 10px;"
                                type="button" data-bs-target="#pdtBottom" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Próximo</span>
                            </button>
            `
            divPrev2.innerHTML = ``
            break
        
        case 4:
            divPrev2.innerHTML = `
                            <button onclick="hideButton(3)" class="carousel-control-prev"
                                style="background-color: #398143; width: 70px; border-radius: 10px 10px 10px;"
                                type="button" data-bs-target="#pdtBottom" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Anterior</span>
                            </button>
            
            `
            divNext2.innerHTML = ``
            break
    }
}