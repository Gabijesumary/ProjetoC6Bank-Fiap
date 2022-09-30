const tooltip = document.querySelector('#tooltip');
const body = document.querySelector("body");
const header = document.querySelector(".top-site");

//Quem é target?
// quem.addEventListener("evento", (evento)=>{});

tooltip.addEventListener("mouseover", (e) => {
    /*console.log(e);
    console.log('Altura da página', body.clientHeight);
    console.log('Largura da página', body.clientWidth);
    console.log('Altura do tooltip', tooltip.clientHeight);
    console.log('Largura da página', tooltip.clientWidth);
    console.log('Altura do mouse', e.clientY);
    console.log('Largura do mouse', e.clientX);*/

    if (document.querySelector(".tooltip")){
        document.querySelector(".tooltip").remove();
    }
    const newDiv = document.createElement("div");

    newDiv.classList.add("tooltip");
        newDiv.innerHTML = "Meu tooltip com várias dicas legais, super top e maravilhosas, que aparece e desaparece.";
        newDiv.style.position = "absolute";
        newDiv.style.top = e.clientY + "px";
        newDiv.style.left = (e.clientX + 200 > body.clientWidth ? e.clientX - 210 : e.clientX + 200) + "px";
        newDiv.style.display = "flex";
        header.appendChild(newDiv);
});

tooltip.addEventListener("mouseout", (e) => {
    if (document.querySelector(".tooltip")){
        document.querySelector(".tooltip").remove();
    }
})