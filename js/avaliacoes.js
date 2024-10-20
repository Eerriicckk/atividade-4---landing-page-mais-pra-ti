const fazerRequisicao = async () => {
    try {
        const request = await fetch("https://dummyjson.com/comments?limit=10&skip=6");
        const data = await request.json();     
        let innerHtmlComents = "";
        for (let index = 0; index < data.comments.length; index++) {
            const comment = data.comments[index];
            const innetHtmlComent = `
            <div class="d-md-flex flex-md-equal w-100 my-5">
                <div class="d-flex align-items-center me-md-3 p-3 px-md-5 text-center overflow-hidden " data-aos="zoom-in-down">
                    <img src="https://api.dicebear.com/9.x/lorelei/svg?seed=${comment.user.username}" class="img-fluid rounded" style="width:150px;height:150px" alt="Imagem de perfil ${comment.user.username}">
                </div>
                <div class="d-flex align-items-center pt-3 px-3 pt-md-5 px-md-5 text-center text-secondary overflow-hidden"
                    data-aos="zoom-in-up">
                    <div>
                        <div class="my-1 py-1">
                            <h2 class="display-5">
                            ${comment.user.fullName}
                            </h2>
                        </div>
                        <div class="pt-3 px-3 pd-md-5 px-md-5 text-start text-secondary overflow-hidden">
                            ${comment.body}
                        </div>
                    </div>
                </div>
            </div>
            `;
            innerHtmlComents+=innetHtmlComent;
            console.log(innetHtmlComent)
        }
        document.getElementById("comentarios").innerHTML = innerHtmlComents;
    } catch (error) {
        console.log(error)
        alert("Algum erro ocorreu, tente novamente em alguns instantes");
        // window.location.href = "index.html";
    }
}



window.onload = async () => {
    await fazerRequisicao();
}

