package uk.co.webwright.db;

import com.mongodb.DB;
import com.mongodb.MongoClient;


/**
 * Mondo config:
 * 
 * db = dbsubs
 * collection = subs
 * 
 * @author mjrw
 *
 */

public class DBTestClient {
	
	public  DBTestClient(){
		MongoClient mongoClient = new MongoClient( "db" , 27017 );
		System.out.println("MongoClient  " + mongoClient);
	
		DB db = mongoClient.getDB( "dbsubs" );
		System.out.println("DB: " + db);
	}

}
