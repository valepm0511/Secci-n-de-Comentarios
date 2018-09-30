// agregar mensaje
window.sendComment = () => {
    let commentBox = document.getElementById('commentBox');
    let commentTextArea = document.getElementById('commentTextArea').value;
    document.getElementById('commentTextArea').value = '';
    if (commentTextArea.length > 0) {
        let cantDiv = document.getElementsByClassName('contentNewComment').length;
        commentBox.innerHTML += `
		<div class="contentNewComment col-12 px-0" id="newComment${cantDiv}">
            <p>${commentTextArea}</p>
            <button type="button" class="btn btn-danger mb-4" onclick="deleteComment(${cantDiv})">Borrar comentario</button>
		</div>
        `;
    } else {
        alert("Ingrese un comentario");
    };
};

// eliminar mensaje
window.deleteComment = (cantDiv) => {
    let confi = confirm("¿Seguro quiere borrar el mensaje?");
    if (confi == true) {
        let commentBoxDelete = document.getElementById('newComment' + cantDiv);
        commentBoxDelete.innerHTML = ``;
    }
};