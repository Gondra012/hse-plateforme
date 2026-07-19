window.onerror = function(message, source, lineno, colno, error) {
    alert("Erreur détectée :\n" + message + "\nLigne: " + lineno);
    return false;
};
