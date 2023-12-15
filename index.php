<!DOCTYPE html>
<html>
<head>
    <title>Statistiques CRM</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php require_once('calendrier.php')?>
    <div id="container">
        <canvas id="statistics"></canvas>
    </div>

    <? require_once('getData.php') ?>

    <div id="resultableau" ></div>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="fetchData.js"></script>
</body>
</html>
