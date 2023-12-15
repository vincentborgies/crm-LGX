<?php
require_once('header.php');
require_once('db.php');

// Définir les requêtes SQL et leurs noms associés
$queries = array(
    "Candidats Contactés" => "SELECT COUNT(*) as total FROM fake_prospects WHERE status_id >= 2",
    "Entretiens Réalisés" => "SELECT COUNT(*) as total FROM fake_prospects WHERE status_id >= 7",
    "Prérequis" => "SELECT COUNT(*) as total FROM fake_prospects WHERE status_id >= 6",
    "Demandes en Cours" => "SELECT COUNT(*) as total FROM fake_prospects WHERE status_id = 9",
    "Autorisation CNAPS" => "SELECT COUNT(*) as total FROM fake_prospects WHERE status_id >= 12",
    "Attente Formation" => "SELECT COUNT(*) as total FROM fake_prospects WHERE status_id = 13",
    "Entrés en Formation" => "SELECT COUNT(*) as total FROM fake_prospects WHERE status_id = 14",
    "Échec Test" => "SELECT COUNT(*) as total FROM fake_prospects WHERE status_id = 5",
    "Refusé Entretien" => "SELECT COUNT(*) as total FROM fake_prospects WHERE status_id = 8",
    "Refusé CNAPS" => "SELECT COUNT(*) as total FROM fake_prospects WHERE status_id = 10",
    "Abandon Projet" => "SELECT COUNT(*) as total FROM fake_prospects WHERE status_id = 16"
);

$data = array(); // Tableau pour stocker les résultats des requêtes

// Exécutez chaque requête et stockez les résultats dans le tableau $data
foreach ($queries as $nom => $requete) {
    $resultat = $conn->query($requete); // Utilisez $conn pour exécuter la requête
    $row = $resultat->fetch_assoc();
    $data[] = array(
        "name" => $nom,
        "number" => $row['total']
    );
}

// Fermez la connexion à la base de données
$conn->close();

// Copiez les résultats de $data dans un tableau final
$statusIdFromProspects = array("data" => $data);

header('Content-Type: application/json');
echo json_encode($statusIdFromProspects);
?>
