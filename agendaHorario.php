<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Horário e data</title>
    <link rel="icon" href="img/serra.png">
    <link rel="stylesheet" href="css/navBar.css">
    <link rel="stylesheet" href="css/agendaHorario.css"><link rel="stylesheet" href= "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
    <link rel="stylesheet" href="css/calendario.css">
    <script src="js/calendario.js" defer></script>
    <script src="js/agendarHorario.js" defer></script>
</head>
<body>
    <header>
        <!-- menu -->
        <div class="nav">

            <div id="logo"><a href="pagPrincipal.php">+SUS</a></div>
            <ul class="navlist">
                <li class="nav-item">
                    <a class="nav-link active" href="pagPrincipal.php">Página Principal</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="meusAgendamentos.php">Meus Agendamentos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="perfil.php">Perfil</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="index.php">Sair</a>
                </li>
            </ul>
            
        </div>
    </header>

    <section>
        
        <div class="conteudo">
            <div class="agendamento">
                <!-- calendario -->
                <div class="calendario">
                    <label class="item" for="id">1. Escolha uma data:</label>

                    <div class="calendar-container">
                        <header class="calendar-header">
                            <p class="calendar-current-date"></p>
                            <div class="calendar-navigation">
                                <span id="calendar-prev" class="material-symbols-rounded">chevron_left</span>
                                <span id="calendar-next" class="material-symbols-rounded">chevron_right</span>
                            </div>
                        </header>
                
                        <div class="calendar-body">
                            <ul class="calendar-weekdays">
                                <li>Dom</li>
                                <li>Seg</li>
                                <li>Ter</li>
                                <li>Qua</li>
                                <li>Qui</li>
                                <li>Sex</li>
                                <li>Sab</li>
                            </ul>
                            <ul class="calendar-dates"></ul>
                        </div>
                    </div>
                </div>
                
                <!-- Botoes de escolher a hora -->
                <div class="escolheHora">
                    <label class="item" for="id">2. Escolha um horário:</label>
                    <div id="horarios">
                        <div class="item-EscolheHora">08:00</div>
                        <div class="item-EscolheHora">08:20</div>
                        <div class="item-EscolheHora">08:40</div>
                        <div class="item-EscolheHora">09:00</div>
                        <div class="item-EscolheHora">09:20</div>
                        <div class="item-EscolheHora">09:40</div>
                        <div class="item-EscolheHora">10:00</div>
                        <div class="item-EscolheHora">10:20</div>
                        <div class="item-EscolheHora">10:40</div>
                        <div class="item-EscolheHora">11:00</div>
                        <div class="item-EscolheHora">11:20</div>
                        <div class="item-EscolheHora">11:40</div>
                        <div class="item-EscolheHora">12:00</div>
                        <div class="item-EscolheHora">12:20</div>
                        <div class="item-EscolheHora">12:40</div>
                        <div class="item-EscolheHora">13:00</div>
                        <div class="item-EscolheHora">13:20</div>
                        <div class="item-EscolheHora">13:40</div>
                
                    </div>
                </div>
            </div>
            <!-- botoes de voltar e prosseguir -->
            <div class="botoes">
                <button class="btnfinais" name="btnvoltar" onclick="history.back()">Voltar</button>
                <button class="btnfinais" name="btnprosseguir"><a href="fimAgendamento.php">Finalizar agendamento</a></button>
            </div>
        </div>
        
    </section>
</body>
</html>