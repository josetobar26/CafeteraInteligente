/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package servicios;


import com.google.gson.Gson;
import controladores.UsuarioBean;
import entidades.Usuario;
import java.io.BufferedReader;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.DELETE;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.StringReader;
  
/**
 *
 * @author jose
 */

@Path("Usuario")
public class UsuarioRest {
    
    
    private UsuarioBean usuariobean=new UsuarioBean();
    
    @POST
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces({MediaType.APPLICATION_JSON})
    public String createUsuario(String espacioJson) {
        System.out.println("-- " + espacioJson);
        final Gson gson = new Gson();
        final Usuario usuarioObj = gson.fromJson(espacioJson, Usuario.class);
        System.out.println(": " + usuarioObj.getLogin());
        
        this.usuariobean.save(usuarioObj);
        return espacioJson;
    }
       
    @POST
        @Path("autentificacion")
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces({MediaType.APPLICATION_JSON})
    public String autentificacionUsuario(String espacioJson) {
        System.out.println("-- " + espacioJson);
        final Gson gson = new Gson();
        final Usuario usuarioObj = gson.fromJson(espacioJson, Usuario.class);
        System.out.println(": " + usuarioObj.getLogin());
        
        Usuario objUsuario=this.usuariobean.autentificacionUsuario(usuarioObj.getLogin());
        String nuevo=gson.toJson(objUsuario);
        return nuevo;
    }
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public List<Usuario> findAllDeportes(){
        return this.usuariobean.getUsuarios();
       
    }
    
    
    
}
