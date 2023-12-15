<?php
require_once('../header.php');
require_once('../db.php');

$queryPeriod = " AND `date` BETWEEN '$start_date' AND '$end_date'";
$selectTable = "historique_modif_statut";

// Define the SQL queries and their associated names
$queries = array(
    "Candidats Contactés" => "SELECT COUNT(*) as total FROM $selectTable WHERE statut >= 2 $queryPeriod",
    "Entretiens Réalisés" => "SELECT COUNT(*) as total FROM $selectTable WHERE statut >= 7 $queryPeriod",
    "Prérequis" => "SELECT COUNT(*) as total FROM $selectTable WHERE statut >= 6 $queryPeriod",
    "Demandes en Cours" => "SELECT COUNT(*) as total FROM $selectTable WHERE statut = 9 $queryPeriod",
    "Autorisation CNAPS" => "SELECT COUNT(*) as total FROM $selectTable WHERE statut >= 12 $queryPeriod",
    "Attente Formation" => "SELECT COUNT(*) as total FROM $selectTable WHERE statut = 13 $queryPeriod",
    "Entrés en Formation" => "SELECT COUNT(*) as total FROM $selectTable WHERE statut = 14 $queryPeriod",
    "Échec Test" => "SELECT COUNT(*) as total FROM $selectTable WHERE statut = 5 $queryPeriod",
    "Refusé Entretien" => "SELECT COUNT(*) as total FROM $selectTable WHERE statut = 8 $queryPeriod",
    "Refusé CNAPS" => "SELECT COUNT(*) as total FROM $selectTable WHERE statut = 10 $queryPeriod",
    "Abandon Projet" => "SELECT COUNT(*) as total FROM $selectTable WHERE statut = 16 $queryPeriod"
);

$data = array(); // Array to store query results

// Execute each query and store the results in the $data array
foreach ($queries as $nom => $requete) {
    $resultat = $conn->query($requete); // Use $conn to execute the query
    if ($resultat) {
        $row = $resultat->fetch_assoc();
        $data[] = array(
            "name" => $nom,
            "number" => $row['total']
        );
    }
}

// Close the database connection
$conn->close();

// Create a final array with the results
$statusIdFromProspects = array("data" => $data);

header('Content-Type: application/json');
echo json_encode($statusIdFromProspects);
?>
