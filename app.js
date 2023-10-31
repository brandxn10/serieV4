
const imagen = document.getElementById('imagen');
const nombre = document.getElementById('nombre');
const select = document.getElementById('selector');
const selectEstilo = document.getElementById('selectorEstilo');
const links = document.getElementsByClassName('link');

links[0].addEventListener('click', function(event){
    event.preventDefault();
    let selectedIndex = selectEstilo.selectedIndex;
    let parametro;
    if(selectedIndex != -1){
       parametro = selectEstilo.options[selectedIndex].text; 
    }else{
        parametro = "";
    }
    
    window.location.href = 'descripcion.html?opcion='+select.value+'&estilo='+parametro;
});


function cambiar(){
    let opc = select.value;
    switch(opc){
        case '1':
            nombre.innerText = "Eric";
            imagen.src = "img/eric.png";
        break;

        case '2':
            nombre.innerText = "Stan";
            imagen.src = "img/stan.png";
        break;

        case '3':
            nombre.innerText = "Butters";
            imagen.src = "img/butters.png";
        break;

        case '4':
            nombre.innerText = "Kyle";
            imagen.src = "img/kyle.png";
        break;

        case '5':
            nombre.innerText = "Kenny";
            imagen.src = "img/kenny.png";
        break;
        
        case '6':
            nombre.innerText = "Randy";
            imagen.src = "img/randy.png";
        break;

        case '7':
            nombre.innerText = "Toallin";
            imagen.src = "img/toallin.png";
        break;

        case '8':
            nombre.innerText = "Token";
            imagen.src = "img/token.png";
        break;

        case '9':
            nombre.innerText = "Jimmy";
            imagen.src = "img/jimmy.png";
        break;

        default:
            nombre.innerText = "Ike";
            imagen.src = "img/ike.png";
        break;
    }
    llenarSelect(opc);
}

function llenarSelect(personaje){
    limpiaSelect();
    let option = document.createElement('option');

    switch(personaje){
        case '1':
            option.value = '1';
            option.text = 'Hitler';

            selectEstilo.appendChild(option);
            option = document.createElement('option');

            option.value = '2';
            option.text = 'Policia';

            selectEstilo.appendChild(option);
            option = document.createElement('option');

            option.value = '3';
            option.text = 'Mago';

            selectEstilo.appendChild(option);
        break;

        case '2':
            option.value = '1';
            option.text = 'Disfraz';

            selectEstilo.appendChild(option);
            option = document.createElement('option');

            option.value = '2';
            option.text = 'Versión 2';

            selectEstilo.appendChild(option);
            option = document.createElement('option');

            option.value = '3';
            option.text = 'Villano';

            selectEstilo.appendChild(option);
        break;

        case '3':
            option.value = '1';
            option.text = 'Mago';

            selectEstilo.appendChild(option);
            option = document.createElement('option');

            option.value = '2';
            option.text = 'Versión 2';

            selectEstilo.appendChild(option);
            option = document.createElement('option');

            option.value = '3';
            option.text = 'Novio';

            selectEstilo.appendChild(option);
        break;

        case '4':
            option.value = '1';
            option.text = 'Loco';

            selectEstilo.appendChild(option);
            option = document.createElement('option');

            option.value = '2';
            option.text = 'Mago';

            selectEstilo.appendChild(option);
            option = document.createElement('option');

            option.value = '3';
            option.text = 'Versión 2';

            selectEstilo.appendChild(option);
        break;
        
        case '5':
            option.value = '1';
            option.text = 'Flecha';

            selectEstilo.appendChild(option);
            option = document.createElement('option');

            option.value = '2';
            option.text = 'Quemado';

            selectEstilo.appendChild(option);
            option = document.createElement('option');

            option.value = '3';
            option.text = 'Robot';

            selectEstilo.appendChild(option);
        break;

        case '6':
            option.value = '1';
            option.text = 'Versión 2';

            selectEstilo.appendChild(option);
            option = document.createElement('option');

            option.value = '2';
            option.text = 'Versión 3';

            selectEstilo.appendChild(option);
            option = document.createElement('option');
        break;

        case '7':
            option.value = '1';
            option.text = 'Fumando';

            selectEstilo.appendChild(option);
            option = document.createElement('option');

            option.value = '2';
            option.text = 'Musculoso';

            selectEstilo.appendChild(option);
            option = document.createElement('option');
        break;

        case '8':
            option.value = '1';
            option.text = 'White';

            selectEstilo.appendChild(option);
            option = document.createElement('option');

            option.value = '2';
            option.text = 'NickFury';

            selectEstilo.appendChild(option);
            option = document.createElement('option');
        break;

        case '9':
            option.value = '1';
            option.text = 'Versión 2';

            selectEstilo.appendChild(option);
            option = document.createElement('option');

            option.value = '2';
            option.text = 'Timmy';

            selectEstilo.appendChild(option);
            option = document.createElement('option');
        break;

        default:
            option.value = '1';
            option.text = 'Mayor';

            selectEstilo.appendChild(option);
            option = document.createElement('option');

            option.value = '2';
            option.text = 'Versión 2';

            selectEstilo.appendChild(option);
            option = document.createElement('option');

            option.value = '3';
            option.text = 'Hermanos';

            selectEstilo.appendChild(option);
        break;
    }
    selectEstilo.selectedIndex = -1;
}

function limpiaSelect(){
    while(selectEstilo.options.length > 0){
        selectEstilo.remove(0);
    }
}

function cambiaEstilo(){
    let opc = selectEstilo.value;

    switch(select.value){
        case '1':
            if(opc == '1'){
                imagen.src = "img/ericHitler.png";
            }else if(opc == '2'){
                imagen.src = "img/ericPolicia.png";
            }else{
                imagen.src = "img/ericMago.png";
            }
        break;

        case '2':
            if(opc == '1'){
                imagen.src = "img/stanDisfraz.png";
            }else if(opc == '2'){
                imagen.src = "img/stanV2.png";
            }else{
                imagen.src = "img/stanVillano.png";
            }
        break;

        case '3':
            if(opc == '1'){
                imagen.src = "img/buttersMago.png";
            }else if(opc == '2'){
                imagen.src = "img/buttersV2.png";
            }else{
                imagen.src = "img/buttersNovio.png";
            }
        break;

        case '4':
            if(opc == '1'){
                imagen.src = "img/kyleLoco.png";
            }else if(opc == '2'){
                imagen.src = "img/kyleMago.png";
            }else{
                imagen.src = "img/kyleSonriendo.png";
            }
        break;

        case '5':
            if(opc == '1'){
                imagen.src = "img/kennyFlecha.png";
            }else if(opc == '2'){
                imagen.src = "img/kennyQuemado.png";
            }else{
                imagen.src = "img/kennyRobot.png";
            }
        break;
        
        case '6':
            if(opc == '1'){
                imagen.src = "img/randyV2.png";
            }else if(opc == '2'){
                imagen.src = "img/randyV3.png";
            }
        break;

        case '7':
            if(opc == '1'){
                imagen.src = "img/toallinFumando.png";
            }else if(opc == '2'){
                imagen.src = "img/toallinMusculoso.png";
            }
        break;

        case '8':
            if(opc == '1'){
                imagen.src = "img/tokenWhite.png";
            }else if(opc == '2'){
                imagen.src = "img/tokenNick.png";
            }
        break;

        case '9':
            if(opc == '1'){
                imagen.src = "img/jimmyV2.png";
            }else if(opc == '2'){
                imagen.src = "img/timmy.png";
            }
        break;

        default:
            if(opc == '1'){
                imagen.src = "img/ikeMayor.png";
            }else if(opc == '2'){
                imagen.src = "img/ikeV2.png";
            }else{
                imagen.src = "img/kyleIke.png";
            }
        break;
    }
}
