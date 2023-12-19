<!DOCTYPE html>
<html>
<head>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
     <div id="wrapper">
            <div class="sidebar">
                <div class="sidebar-1">
                    <img src="msj.png" />
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
    <script src="script.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://kit.fontawesome.com/e22be2b0db.js" crossorigin="anonymous"></script>
</body>
</html>
