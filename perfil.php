<!DOCTYPE html>
<html lang="pt-br">

<head>
    <!-- Definição da codificação de caracteres e escala inicial -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Título da página e ícone na barra de título -->
    <title>Perfil</title>
    <link rel="icon" href="img/serra.png">

    <!-- Referências aos arquivos de estilos CSS -->
    <link rel="stylesheet" href="css/navBar.css">
    <link rel="stylesheet" href="css/perfil.css">

    <!-- Biblioteca de ícones FontAwesome -->
    <link rel="stylesheet" href="https://kit.fontawesome.com/367278d2a4.css" crossorigin="anonymous">
</head>

<body>
    <!-- Cabeçalho da página -->
    <header>
        <!-- Barra de navegação -->
        <div class="nav">
            <!-- Logo +SUS -->
            <div id="logo"><a href="pagPrincipal.php">+SUS</a></div>
            <!-- Lista de links de navegação -->
            <ul class="navlist">
                <li class="nav-item">
                    <a class="nav-link active" href="pagPrincipal.php">Página Principal</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="meusAgendamentos.php">Meus Agendamentos</a>
                </li>
            </ul>
        </div>
    </header>

    <!-- Container principal -->
    <div class="container">
        <!-- Lado esquerdo do container -->
        <div id="nav-l">
            <!-- Ícone de usuário -->
            <i class="fa-solid fa-user"></i>
            <!-- Nome do usuário -->
            <h1 id="nameUser">Fulano da Silva Santos</h1>
        </div>

        <!-- Lado direito do container -->
        <div id="nav-r">
            <!-- Conteúdo do perfil -->
            <div class="content">
                <!-- Título "Dados Pessoais" -->
                <h1>Dados Pessoais</h1>

                <!-- Dados pessoais -->
                <div class="data">
                    <h3 id="nav-subtitles">CPF</h3>
                    <p id="nav-txt">160.616.570-48</p>
                    <h3 id="nav-subtitles">Cartão Nacional de Saúde</h3>
                    <p id="nav-txt">754.891.263.781</p>
                    <h3 id="nav-subtitles">Data de Nascimento</h3>
                    <p id="nav-txt">19/07/1987</p>
                </div>
            </div>

            <!-- Botão para trocar de conta -->
            <div id="nav-button">
                <a href="index.php">
                    <button type="submit" class="green-button">Trocar de conta</button>
                </a>
            </div>
        </div>
    </div>
</body>

</html>