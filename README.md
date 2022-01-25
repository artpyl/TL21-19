# TL21-19

## Λήψη αρχείων εφαρμογής: 
git clone https://github.com/ntua/TL21-19

## Configuration:
cd TL21-19-master
### Import database:
1. Eγκατάσταση MySql Server και δημιουργία λογαριασμού με όνομα root και κωδικό root.
2. Σύνδεση σε MySql Server και δημιουργία κενού database με όνομα freedomepass:                                                                                                     
cmd:     mysql - u root - p
         (Εισαγωγή κωδικού)                                                                                                                                                         
mysql>   CREATE DATABASE freedomepass;
3. Εντός του φακέλου TL21-19-master/database εκτέλεση στο cmd:                                                                                                                     
mysql -p -u root freedomepass < data-dump.sql

### Εγκατάσταση και εκτέλεση του backend
 1. cd TL21-19-master/api                                                                                                                                                     
 2. npm install body-parser, express, path                                                                   
 3. cd ../backend                                                                                                                                                               
 4. npm install express, mysql, json-2-csv                                     
 5. cd ../api
 6. node ./index.js      
Επίσκεψη ιστοσελίδας https://localhost:9103/interoperability/api

### Εγκατάσταση και εκτέλεση του cli
 1. cd TL21-19-master/cli
 2. npm install commander, fs, chalk, fast-csv, mysql
 3. npm install -g.  
Εκτέλεση εντολής "se2119" για την εμφάνιση όλων των δυνατών επιλογών.

### Εγκατάσταση και εκτέλεση του FrontEnd

#### 1. Εγκατάσταση HTTPS

a) Χρήση Mozilla Firefox  
b) Πλοήγηση σε Ρυθμίσεις->Πιστοποιητικά->Προβολή πιστοποιητικών->Αρχές  
c) Import το αρχείο CA.pem  

#### 2. Εκτέλεση του frontend

a) cd ./frontend/conf  
b) Στο αρχείο httpd του φακέλου αυτού: αλλαγή γραμμής Define SRVROOT "/Apache24" με το path του φακέλου frontend (δηλαδή: "C:\Users\user\TL21-19-master\frontend")  
c) cd ./frontend/bin  
d) httpd.exe   
Σύνδεση στο https://localhost  
 
### Εκτέλεση test.py
1. Εγκατάσταση python3
2. cd /test-cli  
3. python test.py
 

