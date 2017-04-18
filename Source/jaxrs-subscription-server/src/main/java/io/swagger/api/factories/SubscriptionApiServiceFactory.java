package io.swagger.api.factories;

import io.swagger.api.SubscriptionApiService;
import io.swagger.api.impl.SubscriptionApiServiceImpl;

@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaJerseyServerCodegen", date = "2017-04-11T15:09:05.390Z")
public class SubscriptionApiServiceFactory {
    private final static SubscriptionApiService service = new SubscriptionApiServiceImpl();

    public static SubscriptionApiService getSubscriptionApi() {
        return service;
    }
}
