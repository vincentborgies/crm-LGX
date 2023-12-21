<body>
  <div class="calendar">
  <form method="post" id="dateForm" action="getDataByDate.php">
      <label for="start_date" id="start-date-label">Début de la période </label>
      <input type="date" id="start_date" name="start_date" style="margin-left: 8px;" required>

      <label for="end_date" id="end-date-label" style="margin-left: 10px;">Fin de la période </label>
      <input type="date" id="end_date" name="end_date" style="margin-left: 8px; margin-top: 5px; margin-bottom:8px;" required>

    <input type="submit" value="Submit">
    </form>
    <button id="return">Retour</button>
  </div>
    <?php require_once('scripts.php'); ?>
</body>