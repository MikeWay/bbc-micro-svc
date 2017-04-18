package io.swagger.api.factories;

import io.swagger.api.SubscriptionsApiService;
import io.swagger.api.impl.SubscriptionsApiServiceImpl;

@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaJerseyServerCodegen", date = "2017-04-11T15:09:05.390Z")
public class SubscriptionsApiServiceFactory {
    private final static SubscriptionsApiService service = new SubscriptionsApiServiceImpl();

    public static SubscriptionsApiService getSubscriptionsApi() {
        return service;
    }
}
