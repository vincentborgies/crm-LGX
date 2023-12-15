<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
</head>
<body>
  <form method="post" id="dateForm" action="getDataByDate.php">
    <label for="start_date">Start Date:</label>
    <input type="date" id="start_date" name="start_date" required>

    <label for="end_date">End Date:</label>
    <input type="date" id="end_date" name="end_date" required>

    <input type="submit" value="Submit">
    </form>

    <script src="script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</body>



