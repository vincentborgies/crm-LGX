const containCards = document.getElementById('contain-cards')
const returnButton = document.getElementById('return')
const startDate = document.getElementById('start_date')
const endDate = document.getElementById('end_date')

let initialDatas
let chart

function updateChartData(chartName, response) {
    console.log('Avant la mise à jour', chartName.data.datasets[0].data)
    chartName.data.datasets[0].data = []
    chartName.data.datasets[0].data = response

    console.log('Après la mise à jour', chartName.data.datasets[0].data)

    chartName.update()
}

async function fetchData(stats) {
    try {
        const response = await fetch(`http://cda-php/crm-LGX/${stats}`)
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`)
        }
        const data = await response.json()

        const icons = [
            'fa-solid fa-phone icon',
            'fa-solid fa-handshake icon',
            'fa-solid fa-users icon',
            'fa-solid fa-file-signature icon',
            'fa-solid fa-file-circle-check icon',
            'fa-solid fa-users-gear icon',
            'fa-solid fa-user-graduate icon',
            'fa-solid fa-text-slash icon',
            'fa-solid fa-handshake-slash icon',
            'fa-solid fa-file-circle-xmark icon',
            'fa-solid fa-x icon'
        ]

        const dataWithIcons = data.data.map((item, index) => {
            return { ...item, icon: icons[index] }
        })
        const labels = data.data.map((item) => item.name)
        const number = data.data.map((item) => item.number)

        initialDatas = number

        dataWithIcons.forEach((item) => {
            console.log(item.icon)
            const card = document.createElement('div')
            card.className = 'col-xl-3 col-sm-6'
            card.innerHTML = `<div class="card">
            <div class="card-body">
                <div class="icon-container">
                    <i class="fas ${item.icon}"></i>

                </div>                        
                <div class="data">
                    <h5 class="card-title">${item.name}</h5> 
                    <h3 class="count">${item.number}</h3>                
                </div>
            </div>
            </div>`
            containCards.append(card)
        })

        const ctx = document.getElementById('statistics')
        chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Nombre de prospects',
                        data: number,
                        backgroundColor: [
                            'rgba(8, 63, 240, 0.8)',
                            'rgba(0, 157, 255, 0.8)',
                            'rgba(255, 190, 0, 0.8)',
                            'rgba(250, 124, 23, 0.8)',
                            'rgba(42, 167, 22, 0.8)',
                            'rgba(42, 167, 121, 0.8)',
                            'rgba(144, 41, 166, 0.8)',
                            'rgba(255, 0, 0, 0.8)',
                            'rgba(201, 0, 49, 1)',
                            'rgba(174, 0, 49, 1)',
                            'rgba(147, 5, 45, 1)'
                        ] // Utilisation des couleurs aléatoires
                    }
                ]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: {
                                size: 18,
                                wieight: 'bold' // Définissez la taille de la police pour l'axe des abscisses
                            },
                            color: 'white'
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 18,
                            },
                            color: 'white'
                        }
                    }
                }
            }
        })
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error)
    }
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
        console.log('error')
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
            const number = data.data.map((item) => item.number)

            updateChartData(chart, number)
            returnButton.style.display = 'block'
        },
        error: function (xhr, status, error) {
            console.log('Response Data:', error)
        }
    })
})

returnButton.addEventListener('click', (e) => {
    e.preventDefault
    updateChartData(chart, initialDatas)
    startDate.value = ''
    endDate.value = ''
    returnButton.style.display = 'none'
})

toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    showMethod: 'slideDown',
    timeOut: 4000
}
