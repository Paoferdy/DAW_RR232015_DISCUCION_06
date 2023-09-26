document.addEventListener("DOMContentLoaded", function() {
    const filtroInput = document.getElementById("filtro");
    const listaPalabrasSelect = document.getElementById("listaPalabras");
    const areaDefinicion = document.getElementById("areaDefinicion");
    const mostrarDefinicionBtn = document.getElementById("mostrarDefinicion");
    
    
    const diccionario = {
        Montaña: "Elevación natural de la tierra con gran altitud.",
        Playa: "Extensión de tierra cubierta de arena junto al mar o un lago.",
        Río: "Corriente de agua dulce que fluye a través del paisaje.",
        Ciudad: "Área densamente poblada con infraestructura urbana.",
        Campo: "Área de tierra rural con vegetación y paisajes naturales.",
        Volcán: "Montaña que puede entrar en erupción y liberar lava y cenizas.",
        Selva: "Bioma tropical densamente arbolado con una gran biodiversidad.",
        Desierto: "Región árida con escasa vegetación y precipitación.",
        Pueblo: "Comunidad pequeña de personas que viven juntas.",
        Pizza: "Plato italiano con masa, salsa y diversos ingredientes.",
        Sushi: "Plato japonés que incluye arroz y pescado o mariscos.",
        Hamburguesa: "Sandwich de carne entre panes con condimentos.",
        Taco: "Tortilla rellena con ingredientes variados, típica de la cocina mexicana.",
        Ensalada: "Plato de vegetales frescos con aderezo.",
        Pastel: "Postre dulce con capas y cobertura.",
        Helado: "Postre congelado y cremoso, generalmente dulce.",
        Queso: "Producto lácteo con una variedad de sabores y texturas.",
        Uva: "Fruta pequeña y redonda, a menudo utilizada para hacer vino.",
        Manzana: "Fruta de forma redonda o alargada, generalmente roja o verde.",
        Pera: "Fruta jugosa de forma alargada y piel fina.",
        Naranja: "Fruta cítrica de color naranja con un sabor agridulce.",
        Fresa: "Pequeña fruta roja con un sabor dulce y aromático.",
        Sandía: "Gran fruta con pulpa jugosa y dulce, generalmente de color verde y rosa.",
        Kiwi: "Fruta pequeña y peluda de color verde, con pulpa de sabor agridulce.",
        Chocolate: "Producto dulce hecho de cacao.",
        Pan: "Alimento básico hecho de masa de harina y agua.",
        Pasta: "Alimento a base de harina, generalmente en forma de fideos o macarrones.",
        Arroz: "Grano comestible ampliamente utilizado en la alimentación humana.",
        Espagueti: "Tipo de pasta larga y delgada.",
        Lasaña: "Plato de pasta en capas con carne y salsa.",
        Pollo: "Carne de ave ampliamente consumida.",
        Pescado: "Carne de peces, una fuente común de proteínas.",
        Carne: "Tejido muscular de animales, una fuente importante de proteínas.",
        Verdura: "Alimento vegetal, generalmente consumido cocido o crudo.",
        Piano: "Instrumento musical de teclado que produce sonidos mediante cuerdas golpeadas por martillos.",
        Guitarra: "Instrumento musical de cuerdas que se toca con los dedos o una pua.",
        Violín: "Instrumento musical de cuerdas frotadas con arco.",
        Batería: "Instrumento musical de percusión que consta de tambores y platillos.",
        Flauta: "Instrumento musical de viento que se toca soplando aire a través de ella.",
        Saxofón: "Instrumento musical de viento que se toca con una caña y llaves.",
        Trompeta: "Instrumento musical de viento metal que se toca con una boquilla.",
        Acordeón: "Instrumento musical de viento que se toca comprimiendo y expandiendo un fuelle.",
        Televisor: "Dispositivo electrónico que muestra imágenes y sonido transmitidos a través de ondas.",
        Teléfono: "Dispositivo de comunicación que permite conversar a distancia.",
        Computadora: "Máquina electrónica que procesa información y realiza tareas diversas.",
        Automóvil: "Vehículo motorizado de transporte personal.",
        Bicicleta: "Vehículo de transporte con dos ruedas que se impulsa con pedales.",
        Reloj: "Dispositivo que muestra la hora y a menudo otras funciones.",
        Lámpara: "Dispositivo de iluminación que utiliza una fuente de luz.",
        Silla: "Mueble diseñado para sentarse, generalmente con respaldo y patas.",
        Mesa: "Mueble plano con patas utilizado para colocar objetos o comer.",
        Plato: "Utensilio plano utilizado para servir y comer alimentos.",
        Taza: "Recipiente con asa utilizado para beber líquidos.",
    };
    
    for (const palabra in diccionario) {
        const option = document.createElement("option");
        option.value = palabra;
        option.textContent = palabra;
        listaPalabrasSelect.appendChild(option);
    }
    
    function mostrarDefinicion() {
        const palabraSeleccionada = listaPalabrasSelect.value;
        if (diccionario.hasOwnProperty(palabraSeleccionada)) {
            areaDefinicion.value = diccionario[palabraSeleccionada];
        } else {
            areaDefinicion.value = "La definición no está disponible.";
        }
    }
    
    mostrarDefinicionBtn.addEventListener("click", mostrarDefinicion);
    
    listaPalabrasSelect.addEventListener("dblclick", mostrarDefinicion);
    
    filtroInput.addEventListener("input", function() {
        const filtro = filtroInput.value.toLowerCase();
        const opciones = listaPalabrasSelect.options;
        
        for (let i = 0; i < opciones.length; i++) {
            const palabra = opciones[i].value.toLowerCase();
            if (palabra.includes(filtro)) {
                opciones[i].style.display = "block";
            } else {
                opciones[i].style.display = "none";
            }
        }
    });
});
