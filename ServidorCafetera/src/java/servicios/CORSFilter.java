/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servicios;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.ext.Provider;

/**
 *
 * @author jose
 */
@Provider
public class CORSFilter implements ContainerResponseFilter {



    @Override
    public void filter(ContainerRequestContext creq, ContainerResponseContext cresp){
        cresp.getHeaders().add( "Access-Control-Allow-Origin", "*");
        cresp.getHeaders().add("Access-Control-Allow-Credentials", "true");
        cresp.getHeaders().add("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS, HEAD");
        cresp.getHeaders().add("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With");
    
    }

}
