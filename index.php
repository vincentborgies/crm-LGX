<!DOCTYPE html>
<html>
<head>
    <?php require_once('links.php') ?>
</head>
<body>
     <div id="wrapper">
            <div class="sidebar">
                <div class="sidebar-1">
                    <img src="img/msj.png" />
                </div>
                    <div class="sidebar-2">
                        <ul>
                            <li><a href="tableaubord.php"><i class="fa-solid fa-house "></i></a></li>
                            <li class="text">Tableau de bord</li>
                        </ul>
                    </div>
            </div>
            <div id="container">
                <div id="accueil"> 
                    <a href="tableaubord.php">
                        <h1>Tableau de bord</h1>
                        <h2>Accueil<h2>
                    </a>
                </div>
                <div id="content">
                    <div id="contain-cards"></div>
                    <?php require_once('calendrier.php'); ?>
                    <div id="container-stats">
                        <canvas id="statistics"></canvas>
                    </div>
                </div>   
                <div id="resultableau" ></div>
            </div>
            

     </div>
    <?php require_once('scripts.php'); ?>
</body>
</html>
