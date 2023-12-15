let chart;

async function fetchData(stats) {
    try {
        const response = await fetch(`http://cda-php/graphique/${stats}`)
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`)
        }
        const data = await response.json()
        const labels = data.data.map((item) => item.name)
        const number = data.data.map((item) => item.number)
        
        const backgroundColors = generateRandomColors(data.data.length) // Appel à la fonction pour générer des couleurs aléatoires pour chaque barre
        const ctx = document.getElementById('statistics')
        chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: number,
                        backgroundColor: backgroundColors // Utilisation des couleurs aléatoires
                    }
                ]
            }
        })
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error)
    }
}

// Fonction pour générer des couleurs aléatoires
function generateRandomColors(count) {
    const colors = []
    for (let i = 0; i < count; i++) {
        const randomColor = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.6)`
        colors.push(randomColor)
    }
    return colors
}

$(document).ready(function () {
    fetchData('getData.php')
})

$('#dateForm').submit(function (event) {
    event.preventDefault() // Prevent the default form submission

    var startDate = $('#start_date').val()
    var endDate = $('#end_date').val()

    // Perform validation as needed
    if (startDate && endDate && startDate > endDate) {
        toastr.error('La date de début doit être avant la date de fin', 'Erreur')
        return false // Prevent form submission
    }

    $.ajax({
        url: 'getDataByDate.php',
        method: 'POST',
        dataType: 'json', // 'json' doit être une chaîne de caractères
        data: { start_date: startDate, end_date: endDate },
        success: function (data) {
            console.log(data.data)
            const labels = data.data.map((item) => item.name)
            const number = data.data.map((item) => item.number)
            const ctx = document.getElementById('statistics')
            const backgroundColors = generateRandomColors(data.data.length)

            chart.destroy();

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels,
                    datasets: [
                        {
                            label: 'Acquisitions by year',
                            data: number,
                            backgroundColor: backgroundColors // Utilisation des couleurs aléatoires
                        }
                    ]
                }
            })
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
