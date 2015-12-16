
 

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    db = window.openDatabase("HAZPRODB", "1.0", "DemoDB", 200000);
	 
    if (dbCreated)	 
    	db.transaction(getHazards, transaction_error);

    else 
    	db.transaction(populateDB, transaction_error, populateDB_success);
	
}

function transaction_error(tx, error) {
	//$('#busy').hide();
    alert("Database Error: " + error);
}

function populateDB_success() {
	dbCreated = true;
	
    db.transaction(getHazards, transaction_error);
}

function getHazards(tx) {
	var sql = "select * from incidents";
	tx.executeSql(sql, [], getHazards_success);
}

function getHazards_success(tx, results) {
	//$('#busy').hide();
	
	dbresults=results;
    var len = dbresults.rows.length;
	//alert(len);
	
    //for (var i=0; i<len; i++) {
		//alert(i);
    	////var incident = results.rows.item(i);
		//alert(incident.title);
		 //document.getElementById('HazardList').append('<li>' + incident.id+'<p>' + incident.title + '- ' + incident.description + '</p></li>');
   // }
	 
	db = null;
}

function populateDB(tx) {
	//$('#busy').show();
	
	
	tx.executeSql('DROP TABLE IF EXISTS incidents');
	var sql = 
		"CREATE TABLE IF NOT EXISTS incidents ( "+
		"id INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"Name VARCHAR(50), " +
		"description VARCHAR(500), " +
		"title VARCHAR(50), " +
		 
		"phone VARCHAR(30), " + 
		
		"gpscord VARCHAR(30), " +
		"priority VARCHAR(20))";
    tx.executeSql(sql);

    tx.executeSql("INSERT INTO incidents (id,Name,title,description,phone,priority) VALUES (1,'Steven','Gas Leak','hello world', '617-000-0012','Low')");
	tx.executeSql("INSERT INTO incidents (id,Name,title,description,phone,priority) VALUES (2,'Steven2','Gas Leak2','hello world2', '617-000-0013','Low')");
	tx.executeSql("INSERT INTO incidents (id,Name,title,description,phone,priority) VALUES (3,'Steven3','Gas Leak3','hello world3', '617-000-0014','Low')");
	tx.executeSql("INSERT INTO incidents (id,Name,title,description,phone,priority) VALUES (4,'Steven4','Gas Leak4','hello world4', '617-000-0015','Low')");
    
}
 
function insertData(name,title,description,phone,priority)
{
	db.transaction(function(transaction) {
		transaction.executeSql("INSERT INTO incidents (Name,title,description,phone,priority) VALUES ('" + name +"','"+title+"',"+description+"'"+phone+"',"+priority+"')");
	});
}
function getData(sql) {
	 
	db.transaction(function(transaction) {
		transaction.executeSql(sql, [], getHazards_success);;
	});
}