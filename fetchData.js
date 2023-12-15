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

document.getElementById('dateForm').addEventListener('submit', function (e) {
    e.preventDefault() // Empêche l'envoi du formulaire par défaut

    var startDate = document.getElementById('start_date').value
    var endDate = document.getElementById('end_date').value

    const jsonData = {
        start_date: startDate,
        end_date: endDate
    }

    console.log(jsonData)

    fetch('getDataByDate.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log({ "dataByDate": data })
        })
        .catch((error) => {
            console.error('Erreur:', error)
        })
})

fetchData('getData.php')



/*
function validateDates() {
    var startDate = $('#start_date').val()
    var endDate = $('#end_date').val()

    console.log(endDate)

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
            // const ctx = document.getElementById('statistics')

            console.log(data)

            // if (window.myChart) {
            //     window.myChart.destroy()
            // }

            // Nettoie le contenu précédent
            var resultTableau = $('#resultableau')
            resultTableau.empty()

            // Crée une liste à puces avec les états et les quantités
            var list = $('<ul>')
            data.forEach(function (entry) {
                list.append($('<li>').text('etat ' + entry.name + ': ' + entry.number + ' candidats'))
            })

            resultTableau.append(list)

            // Vérifie s'il y a des états avec un nombre de candidats égal à zéro
            var hasZeroCount = data.some(function (entry) {
                return entry.number === 0
            })

            // Crée le graphique à barres
            // window.myChart = new Chart(ctx, {
            //     type: 'bar',
            //     data: {
            //         labels: data.map(function (entry) {
            //             if (entry.etat == 1) {
            //                 return 'Candidat entrant'
            //             } else if (entry.etat == 2) {
            //                 return 'RDV telephonique'
            //             } else if (entry.etat == 3) {
            //                 return 'Candidat en cours de test (Experquiz)'
            //             }
            //         }),
            //         datasets: [
            //             {
            //                 label: 'Nombre de candidats par etat',
            //                 data: data.map(function (entry) {
            //                     return entry.count
            //                 }),
            //                 backgroundColor: hasZeroCount ? 'rgba(255, 0, 0, 0.5)' : 'rgba(75, 192, 192, 1)',
            //                 borderColor: 'rgba(75, 192, 192, 1)', // Couleur de la bordure
            //                 borderWidth: 1
            //             }
            //         ]
            //     },
            //     options: {
            //         scales: {
            //             y: {
            //                 beginAtZero: true
            //             }
            //         }
            //     }
            // })
        }
    })

    return false
}*/
