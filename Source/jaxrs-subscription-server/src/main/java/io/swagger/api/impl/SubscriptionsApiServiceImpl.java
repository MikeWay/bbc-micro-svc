package io.swagger.api.impl;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

import com.mongodb.DB;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;

import io.swagger.api.NotFoundException;
import io.swagger.api.SubscriptionsApiService;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaJerseyServerCodegen", date = "2017-04-11T15:09:05.390Z")
public class SubscriptionsApiServiceImpl extends SubscriptionsApiService {
	
	private MongoClient mongoClient;
	private DB db;
	
	public SubscriptionsApiServiceImpl(){
		mongoClient = new MongoClient( "db" , 27017 );
	
		System.out.println("MongoClient  " + mongoClient);
	
		db = mongoClient.getDB( "dbsubs" );
		System.out.println("DB: " + db);
	}
	
    @Override
    public Response getAllSubscriptions(SecurityContext securityContext) throws NotFoundException {
        // do some magic!
//    	Subscription s1 = new Subscription();
//    	Subscription s2 = new Subscription();
//    	List<Subscription> subs = new ArrayList<Subscription>();
//    	subs.add(s1);
//    	subs.add(s2);
    	DBCursor results = db.getCollectionFromString("subs").find();
    	//results.
        return Response.ok().entity(results.toArray()).build();
    }
}
