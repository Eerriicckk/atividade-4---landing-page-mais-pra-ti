function customHeader() {
    element = document.getElementById("customHeader");
    if (!element) return;
    element.innerHTML = `
    <div class="container">
        <img src="images/logo.png" alt="logo baití" id="baitiLogo">
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"
        aria-controls="offcanvas" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end bg-primary" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasLabel"><img src="images/logo.png" alt="logo baití" id="baitiLogo"> Baití</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="d-flex align-items-center navbar-nav flex-grow-1 justify-content-between text-primary">
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="produtos.html">Produtos</a></li>
            <li class="nav-item"><a class="nav-link" href="avaliacoes.html">Avaliações</a></li>
            <li class="nav-item"><a class="nav-link" href="sobre.html">Sobre</a></li>
            <li class="nav-item"><a class="nav-link" href="contato.html">Contato</a></li>
          </ul>
        </div>
      </div>
    </div>
    `;
}

function customFooter() {
    element = document.getElementById("customFooter");
    if (!element) return;
    element.innerHTML = `
    <div class="row">
      
      <div class="col-6 col-md">
        <h5>Sobre</h5>
        <ul class="list-unstyled text-small">
          <li><a class="link-info text-decoration-none" href="sobre.html">Nossa história</a></li>
          <li><a class="link-info text-decoration-none" href="contato.html">Entre em contato</a></li>
          <li><a class="link-info text-decoration-none" target="_blank" href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm">Privacidade</a></li>
          <li><a class="link-info text-decoration-none" target="_blank" href="https://www.linkedin.com/in/erickrumpel/">Linkedin</a></li>
          <li><a class="link-info text-decoration-none" target="_blank" href="https://www.youtube.com/@erickrumpel9702">Youtube</a></li>
        </ul>
      </div>
    </div>
    `;
}
// function customFooter() {
//     element = document.getElementById("customFooter");
//     if (!element) return;
//     element.innerHTML = `<span><img src="images/logo.png" alt="logo baití" id="baitiLogo"></span>
//     <a href="#produtosLink" class="linkHeader">Produtos</a>
//     <a href="#precosLink" class="linkHeader">Preços</a>
//     <a href="#historiaLink" class="linkHeader">Nossa caminhada</a>
//     <a href="#contatoLink" class="linkHeader">Contato</a>`;
// }