document.getElementById('options').addEventListener('change', function () {
    const selectionnerElement = this.value;
    const espaceRectangle = document.getElementById('espaceRectangle');
    const espaceCarre = document.getElementById('espaceCarre');
    const espaceTriangle = document.getElementById('espaceTriangle');
    const espaceParallelogramme = document.getElementById('espaceParallelogramme');
    const espaceTrapeze = document.getElementById('espaceTrapeze');
    const espaceLosange = document.getElementById("espaceLosange");
    const espaceCercle = document.getElementById('espaceCercle');
    const espaceEllipse = document.getElementById('espaceEllipse');
    const resultat = document.getElementById('resultat');

    // Masquer toutes les zones au début
    espaceRectangle.style.display = 'none';
    espaceCarre.style.display = 'none';
    espaceTriangle.style.display = 'none';
    espaceParallelogramme.style.display = 'none';
    espaceTrapeze.style.display = 'none';
    espaceLosange.style.display = 'none';
    espaceCercle.style.display = 'none';
    espaceEllipse.style.display = 'none';
    resultat.style.display = 'none';

    // afficher la zone correspondante
    if (selectionnerElement === 'rectangle') {
        espaceRectangle.style.display = 'block';
    } else if (selectionnerElement === 'carre') {
        espaceCarre.style.display = 'block';
    } else if (selectionnerElement === 'triangle') {
        espaceTriangle.style.display = 'block';
    } else if (selectionnerElement === 'parallelogramme') {
        espaceParallelogramme.style.display = 'block';
    } else if (selectionnerElement === 'trapeze') {
        espaceTrapeze.style.display = 'block';
    } else if (selectionnerElement === 'losange') {
        espaceLosange.style.display = 'block';
    } else if (selectionnerElement === 'cercle') {
        espaceCercle.style.display = 'block';
    } else if (selectionnerElement === 'ellipse') {
        espaceEllipse.style.display = 'block';
    }
});
// rectangle
document.getElementById('espaceRectangle').querySelector('button').addEventListener('click', function () {
    const longueur = parseFloat(document.getElementById('longueur').value);
    const largeur = parseFloat(document.getElementById('largeur').value);
    const resultatDiv = document.getElementById('resultat');

    if (!isNaN(longueur) && !isNaN(largeur)) {
        if (largeur >= longueur) {
            resultatDiv.innerHTML = 'La longueur doit être supérieur à la largeur';
            resultatDiv.style.display = 'block';
        } else {
            const aire = longueur * largeur;
            resultatDiv.innerHTML = 'Aire du rectangle= ' + aire;
            resultatDiv.style.display = 'block';
        }

    } 
    
    else {
        resultatDiv.innerHTML = 'Veuillez entrer des valeurs valides.';
        resultatDiv.style.display = 'block';
    }
})
//carre
document.getElementById('espaceCarre').querySelector('button').addEventListener('click', function () {
    const cote = parseFloat(document.getElementById('cote').value);
    const resultatDiv = document.getElementById('resultat');

    if (!isNaN(cote)) {
        const aire = cote * cote;
        resultatDiv.innerHTML = 'Aire du carré= ' + aire;
        resultatDiv.style.display = 'block';
    } else {
        resultatDiv.innerHTML = 'Veuillez entrer une valeur valide. ';
        resultatDiv.style.display = 'block';
    }
})
// partie triangle
document.getElementById('espaceTriangle').querySelector('button').addEventListener('click', function () {
    const base = parseFloat(document.getElementById('base').value);
    const hauteur = parseFloat(document.getElementById('hauteur').value);
    const resultatDiv = document.getElementById('resultat');

    if (!isNaN(base) && !isNaN(hauteur)) {
        const aire = 0.5 * base * hauteur;
        resultatDiv.innerHTML = 'Aire du triangle= ' + aire;
        resultatDiv.style.display = 'block';
    } else {
        resultatDiv.innerHTML = 'Veuillez entrer une valeur valide. ';
        resultatDiv.style.display = 'block';
    }
})
// parallelogramme
document.getElementById('espaceParallelogramme').querySelector('button').addEventListener('click', function () {
    const base = parseFloat(document.getElementById('baseParallelogramme').value);
    const hauteur = parseFloat(document.getElementById('hauteurParallelogramme').value);
    const resultatDiv = document.getElementById('resultat');

    if (!isNaN(base) && !isNaN(hauteur)) {
        const aire = base * hauteur;
        resultatDiv.innerHTML = 'Aire du parallélogramme= ' + aire;
        resultatDiv.style.display = 'block';
    } else {
        resultatDiv.innerHTML = 'Veuillez entrer une valeur valide. ';
        resultatDiv.style.display = 'block';
    }
})
// trapeze
document.getElementById('espaceTrapeze').querySelector('button').addEventListener('click',function(){
    const petiteBase = parseFloat(document.getElementById('petiteBaseTrapeze').value);
    const grandeBase = parseFloat(document.getElementById('grandeBaseTrapeze').value);
    const hauteur = parseFloat(document.getElementById('hauteurTrapeze').value);
    const resultatDiv = document.getElementById('resultat');
    
    if(!isNaN(petiteBase)&& !isNaN(grandeBase)&& !isNaN(hauteur)){
        if(petiteBase >= grandeBase){
            resultatDiv.innerHTML='La petite base doit être inférieur a la grande base.';
            resultatDiv.style.display = 'block';
        }else{
            const aire = (petiteBase+ grandeBase)/2 *hauteur;
            resultatDiv.innerHTML= 'Aire du trapeze= '+aire;
            resultatDiv.style.display= 'block';
        }
    }else{
        resultatDiv.innerHTML= 'Veuillez entrer des valeurs valides.';
        resultatDiv.style.display= 'block';
    }
})
// losange
document.getElementById('espaceLosange').querySelector('button').addEventListener('click', function(){
    const petiteDiagonale= parseFloat(document.getElementById('petiteDiagonale').value);
    const grandeDiagonale= parseFloat(document.getElementById('grandeDiagonale').value);
    const resultatDiv= document.getElementById('resultat');

    if(!isNaN(petiteDiagonale) && !isNaN(grandeDiagonale)){
        if(petiteDiagonale >= grandeDiagonale){
            resultatDiv.innerHTML= 'La petite diagonale doit être inférieur a la grande diagonale.';
            resultatDiv.style.display= 'block';
        }else{
            const aire= (grandeDiagonale * petiteDiagonale)/2;
            resultatDiv.innerHTML='Aire du losange= '+aire;
            resultatDiv.style.display='block';
        }
    }else{
        resultatDiv.innerHTML= 'veuillez entrer des valeurs valides.';
        resultatDiv.style.display='block';
    }
})
//cercle
document.getElementById('espaceCercle').querySelector('button').addEventListener('click', function(){
    const rayon= parseFloat(document.getElementById('rayon').value);
    const resultatDiv= document.getElementById('resultat');

    if(!isNaN(rayon)){
        const aire= Math.PI * rayon * rayon;
        resultatDiv.innerHTML= 'Aire du cercle= '+aire.toFixed(2);
        resultatDiv.style.display='block';
    }else{
        resultatDiv.innerHTML= 'Veuillez entrer une valeur valide.';
        resultatDiv.style.display='block';
    }
})
//ellipse
document.getElementById('espaceEllipse').querySelector('button').addEventListener('click', function(){
    const grandAxe= parseFloat(document.getElementById('grandAxe').value);
    const petitAxe= parseFloat(document.getElementById('petitAxe').value);
    const resultatDiv= document.getElementById('resultat');

    if(!isNaN(grandAxe) && !isNaN(petitAxe)){
        const aire= Math.PI * grandAxe * petitAxe;
        resultatDiv.innerHTML= 'Aire de l\'ellipse= '+aire.toFixed(2);
        resultatDiv.style.display='block';
    }else{
        resultatDiv.innerHTML= 'Veuillez entrer des valeurs valides.';
        resultatDiv.style.display='block';
    }
})