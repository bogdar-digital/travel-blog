document.getElementById("commentForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
    const imageInput = document.getElementById("imageUpload");

    const commentDiv = document.createElement("div");
    commentDiv.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;

    if(imageInput.files.length > 0){
        const reader = new FileReader();
        reader.onload = function(){
            const img = document.createElement("img");
            img.src = reader.result;
            img.style.width = "100%";
            commentDiv.appendChild(img);
        }
        reader.readAsDataURL(imageInput.files[0]);
    }

    // VALIDACIÓN FORMULARIO CONTACTO
const contactForm = document.getElementById("contactForm");



if(contactForm){
    contactForm.addEventListener("submit", function(e){
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;

        if(nombre && email && mensaje){
            document.getElementById("respuesta").innerHTML =
                "<p style='color:green;'>Mensaje enviado correctamente ✅</p>";
            contactForm.reset();
        }
    });
}



    document.getElementById("commentList").appendChild(commentDiv);

    document.getElementById("commentForm").reset();
});