<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// ❌ DO NOT DISPLAY ERRORS IN API
error_reporting(E_ALL);
ini_set('display_errors', 0);

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// POST only
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Only POST method allowed"]);
    exit;
}

// File check
if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode([
        "error" => "No valid file uploaded",
        "file_error" => $_FILES['file']['error'] ?? 'No file'
    ]);
    exit;
}

$file = $_FILES['file'];
$documentType = $_POST['documentType'] ?? 'unknown';
$mobileNumber = $_POST['mobileNumber'] ?? 'unknown';

// Allowed types
$mimeFolders = [
    'image/jpg' => 'uploads/images/',
    'image/jpeg' => 'uploads/images/',
    'image/png' => 'uploads/images/',
    'image/webp' => 'uploads/images/',
    'application/pdf' => 'uploads/documents/',
    'text/plain' => 'uploads/text/',
    'text/csv' => 'uploads/text/'
];

// Detect MIME
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mimeType = finfo_file($finfo, $file['tmp_name']);
finfo_close($finfo);

if (!isset($mimeFolders[$mimeType])) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid file type", "received" => $mimeType]);
    exit;
}

// Folder setup
$userFolder = preg_replace('/[^0-9]/', '', $mobileNumber);
$userFolder = $userFolder ?: 'user_' . time();

$uploadDir = $mimeFolders[$mimeType] . $userFolder . '/' . $documentType . '/';
$absoluteDir = __DIR__ . '/' . $uploadDir;

if (!is_dir($absoluteDir) && !mkdir($absoluteDir, 0777, true)) {
    http_response_code(500);
    echo json_encode(["error" => "Failed to create upload directory"]);
    exit;
}

if (!is_writable($absoluteDir)) {
    chmod($absoluteDir, 0777);
}

// Size limit (10MB)
if ($file['size'] > 10 * 1024 * 1024) {
    http_response_code(400);
    echo json_encode(["error" => "File too large (max 10MB)"]);
    exit;
}

// Safe filename
$name = pathinfo($file['name'], PATHINFO_FILENAME);
$ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
$safe = preg_replace('/[^a-zA-Z0-9_-]/', '_', $name);

// ✅ SAFE random string
$rand = substr(md5(uniqid(mt_rand(), true)), 0, 8);

$newName = "{$safe}_" . time() . "_{$rand}.{$ext}";
$destination = $absoluteDir . $newName;

if (!move_uploaded_file($file['tmp_name'], $destination)) {
    http_response_code(500);
    echo json_encode(["error" => "File upload failed"]);
    exit;
}

chmod($destination, 0644);

// URL
$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https://' : 'http://';
$baseUrl = $protocol . $_SERVER['HTTP_HOST'] . '/web_paisaonsalary/api/';
$fileUrl = $baseUrl . $uploadDir . $newName;




// ✅ SUCCESS
echo json_encode([
    "success" => true,
    "message" => "File uploaded successfully",
    "data" => [
        "fileName" => $newName,
        "filePath" => '/' . $uploadDir . $newName,
        "mimeType" => $mimeType,
        "size" => $file['size']
    ]
]);


