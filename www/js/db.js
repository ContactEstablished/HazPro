
 

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
	// alert(len);
	
    //for (var i=0; i<len; i++) {
		//alert(i);
    	////var incident = results.rows.item(i);
		//alert(incident.title);
		 //document.getElementById('HazardList').append('<li>' + incident.id+'<p>' + incident.title + '- ' + incident.description + '</p></li>');
   // }
	 
	// db = null;
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
		"imageURL VARCHAR(200), " + 
		"gpscord VARCHAR(50), " +
		"priority VARCHAR(20))";
    tx.executeSql(sql);

    tx.executeSql("INSERT INTO incidents (id,Name,title,description,phone,priority,gpscord) VALUES (1,'Steven','Gas Leak','hello world', '617-000-0012','Low','33.9342677, -81.0501171')");
	tx.executeSql("INSERT INTO incidents (id,Name,title,description,phone,priority,gpscord) VALUES (2,'Steven2','Gas Leak2','hello world2', '617-000-0013','Low','33.9567038, -81.0517176')");
	tx.executeSql("INSERT INTO incidents (id,Name,title,description,phone,priority,gpscord) VALUES (3,'Steven3','Gas Leak3','hello world3', '617-000-0014','Low','33.9532923, -81.0479975')");
	tx.executeSql("INSERT INTO incidents (id,Name,title,description,phone,priority,gpscord) VALUES (4,'Steven4','Gas Leak4','hello world4', '617-000-0015','Low','33.9568409, -81.0463385')");
    
}
 
function insertData(name,title,description,phone,priority,gpscord,imagepath)
{
	var sql="INSERT INTO incidents (Name,title,description,phone,priority,gpscord,imageURL) VALUES (?,?,?,?,?,?,?)";
	 // alert(imagepath.length);
	  try {
		  	db.transaction(function(tx){
				  tx.executeSql(sql,[name,title,description,phone,priority,gpscord,imagepath],getHazards);
			  })
	  } catch (error) {
		  alert(error)
	  }

	  //sql = "select * from incidents";
	 
	//db.transaction.executeSql(sql, [], getHazards_success);
}
function getData(sql) {
	 
	db.transaction(function(transaction) {
		transaction.executeSql(sql, [], getHazards_success);;
	});
}