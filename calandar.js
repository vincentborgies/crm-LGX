$(document).ready(function () {})

$('#dateForm').submit(function (event) {
    event.preventDefault() // Prevent the default form submission

    var startDate = $('#start_date').val()
    var endDate = $('#end_date').val()

    console.log('ici')

    // Perform validation as needed
    if (startDate && endDate && startDate > endDate) {
        toastr.error('La date de début doit être avant la date de fin', 'Erreur')
        return false // Prevent form submission
    }

    $.ajax({
        url: 'getDataByDate.php',
        method: 'POST',
        dataType: 'json', // 'json' doit être une chaîne de caractères
        data: { startDate: startDate, endDate: endDate },
        success: function (data) {
            console.log(data)
        }
    })

   
})

toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    showMethod: 'slideDown',
    timeOut: 4000
}
