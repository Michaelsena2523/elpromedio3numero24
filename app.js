const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const contenedor = document.getElementById("contenedor");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
   
    const num1 = parseFloat(n1.value);
    const num2 = parseFloat(n2.value);
    const num3 = parseFloat(n3.value);
    
 
    const resultado = num1 + num2 + num3;

    const total = resultado / 3;
    

    contenedor.textContent = `Total suma: ${resultado}, porciento: ${total}`;
});
