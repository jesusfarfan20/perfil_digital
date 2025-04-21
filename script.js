const likes = {
    curiosities: 0,
    quote: 0
};

function likeSection(id) {
    likes[id]++;
    document.getElementById(id).textContent = likes[id];
}

function addComment() {
    const comment = document.getElementById("commentBox").value;
    if (comment.trim() !== "") {
        const commentsDiv = document.getElementById("commentsArea");
        const newComment = document.createElement("p");
        newComment.textContent = comment;
        commentsDiv.appendChild(newComment);
        document.getElementById("commentBox").value = "";
    }
}

fetch('guardar_comentario.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `comentario=Hola+desde+otro+usuario`
});


function mostrarImagen(src) {
    document.getElementById("img-ampliada").src = src;
    document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}



function verificarRespuestas() {
    const r1 = document.getElementById('pregunta1').value;
    const r2 = document.getElementById('pregunta2').value;
    const r3 = document.getElementById('pregunta3').value;

    let puntaje = 0;

    if (r1 === "Azul") puntaje++;
    if (r2 === "Lomo") puntaje++;
    if (r3 === "Jugar voleibol") puntaje++;

    const resultado = document.getElementById('resultadoQuiz');

    if (puntaje === 3) {
    resultado.textContent = "🎉 ¡Perfecto! ¡Me conoces muy bien!";
    resultado.style.color = "#00ffcc";
    } else if (puntaje === 2) {
    resultado.textContent = "👍 ¡Casi! Solo te faltó una.";
    resultado.style.color = "#ffcc00";
    } else {
    resultado.textContent = "😅 Ups... ¡necesitas conocerme mejor!";
    resultado.style.color = "#ff0055";
    }
}