package io.swagger.api;

import io.swagger.model.*;
import io.swagger.api.SubscriptionApiService;
import io.swagger.api.factories.SubscriptionApiServiceFactory;

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

@Path("/subscription")


@io.swagger.annotations.Api(description = "the subscription API")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaJerseyServerCodegen", date = "2017-04-11T15:09:05.390Z")
public class SubscriptionApi  {
   private final SubscriptionApiService delegate = SubscriptionApiServiceFactory.getSubscriptionApi();

    @GET
    @Path("/{subscriptionId}")
    
    @Produces({ "application/json", "application/xml" })
    @io.swagger.annotations.ApiOperation(value = "", notes = "Gets `Subscription` object by id. ", response = Subscription.class, tags={  })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "successful operation", response = Subscription.class),
        
        @io.swagger.annotations.ApiResponse(code = 400, message = "Invalid subscription id value", response = Subscription.class) })
    public Response getSubscriptionById(@ApiParam(value = "ID of subscription that needs to be fetched",required=true) @PathParam("subscriptionId") Long subscriptionId
,@Context SecurityContext securityContext)
    throws NotFoundException {
        return delegate.getSubscriptionById(subscriptionId,securityContext);
    }
}
