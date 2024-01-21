// Env variables
let spanText = document.getElementById("colorCode");
let btn = document.getElementById("generate-button");
let headerTitle = document.querySelector("h1");

// functions
function changeBackground(newColor, spans){
    document.body.style.backgroundColor = newColor;
    headerTitle.style.color = newColor;
    btn.style.backgroundColor = newColor;
    spans.style.color = newColor;
    console.log(newColor + " " + darkenHexColor(newColor, 20));
    btn.style.boxShadow = `0px 5px 5px ${darkenHexColor(newColor, 50)}`;
}

function darkenHexColor(hexColor, percent) {
    // Garante que percent esteja no intervalo [0, 100].
    percent = Math.min(100, Math.max(0, percent));
  
    // Converte o código hexadecimal para valores RGB.
    let r = parseInt(hexColor.substring(1, 3), 16);
    let g = parseInt(hexColor.substring(3, 5), 16);
    let b = parseInt(hexColor.substring(5, 7), 16);
  
    // Calcula a redução de intensidade com base no percentual fornecido.
    let intensityReduction = percent / 100;
  
    // Aplica a redução de intensidade a cada componente RGB.
    r = Math.round(r * (1 - intensityReduction));
    g = Math.round(g * (1 - intensityReduction));
    b = Math.round(b * (1 - intensityReduction));
  
    // Garante que os valores RGB estejam no intervalo [0, 255].
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));
  
    // Converte os valores RGB de volta para hexadecimal.
    let darkenedHexColor = "#" + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
  
    return darkenedHexColor;
  }




// EventListeners

btn.addEventListener("click", function() {
    let newColor = "#" + ((Math.random() * 0xfffff * 1000000).toString(16)).slice(0, 6);
    spanText.innerText = newColor;
    changeBackground(newColor, spanText);
});


