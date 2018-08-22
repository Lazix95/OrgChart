# OrgChart

Sa Back end-a je potrebno dostaviti JSON sa nizom objekata ciji su atributi:
name,
surname,
job,
picture (URL do slike),
id,
parentID (Glavni-prvi element, treba da ima parentID = null;)

Uradjen je log in za admina, koji se aktivira na linku " .../#/edit" 

-# sluzi da bi mogli da unosimo url adrese bez obracanja serveru za novu stranu, nego se sve odigrava na index strani.
Ako se server podesi da na svaku kresku 404 vrati index.html, onda # nije potrebna.

Za testove sam kao back za log in i skladistenje podataka koristio Firebase.  

