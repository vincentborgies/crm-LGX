<body>
  <form method="post" id="dateForm" action="getDataByDate.php">
    <label for="start_date" id="start-date-label">Start Date:</label>
    <input type="date" id="start_date" name="start_date" required>

    <label for="end_date" id="end-date-label">End Date:</label>
    <input type="date" id="end_date" name="end_date" required>

    <input type="submit" value="Submit">
    </form>
    <?php require_once('scripts.php'); ?>
</body>