package io.swagger.api;

import io.swagger.model.*;
import io.swagger.api.SubscriptionsApiService;
import io.swagger.api.factories.SubscriptionsApiServiceFactory;

import io.swagger.annotations.ApiParam;
import io.swagger.jaxrs.*;

import io.swagger.model.Subscription;

import java.util.List;
import io.swagger.api.NotFoundException;

import java.io.InputStream;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.*;
import javax.validation.constraints.*;

@Path("/subscriptions")


@io.swagger.annotations.Api(description = "the subscriptions API")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaJerseyServerCodegen", date = "2017-04-11T15:09:05.390Z")
public class SubscriptionsApi  {
   private final SubscriptionsApiService delegate = SubscriptionsApiServiceFactory.getSubscriptionsApi();

    @GET
    
    
    @Produces({ "application/json", "application/xml" })
    @io.swagger.annotations.ApiOperation(value = "", notes = "Gets all `Subscription` objects. Optional query param of **size** determines size of returned array ", response = Subscription.class, responseContainer = "List", tags={  })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "successful operation", response = Subscription.class, responseContainer = "List"),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Invalid subscription id value", response = Subscription.class, responseContainer = "List") })
    public Response getAllSubscriptions(@Context SecurityContext securityContext)
    throws NotFoundException {
        return delegate.getAllSubscriptions(securityContext);
    }
}
