package controladores;

import entidades.Usuario;
import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author jose
 */
@ManagedBean
@RequestScoped
public class UsuarioBean {

    /**
     * Creates a new instance of UsuarioBean
     */
    private EntityManagerFactory emf;
    public UsuarioBean() {
    }

    public void save(Usuario usuarioObj) {
        emf=Persistence.createEntityManagerFactory("ServidorCafeteraPU");
        UsuarioJpaController ctrl= new UsuarioJpaController(emf);
        ctrl.create(usuarioObj);
    }

    public List<Usuario> getUsuarios() {
        emf=Persistence.createEntityManagerFactory("ServidorCafeteraPU");
        UsuarioJpaController ctrl= new UsuarioJpaController(emf);
        return ctrl.findUsuarioEntities();
    }

    public Usuario autentificacionUsuario(String login) {
        emf=Persistence.createEntityManagerFactory("ServidorCafeteraPU");
        UsuarioJpaController ctrl= new UsuarioJpaController(emf);
        List<Usuario> usuarios= ctrl.findUsuarioEntities();
        Usuario objUsuario2=null;
        for(Usuario objUsuario:ctrl.findUsuarioEntities()){
            if(objUsuario.getLogin().equals(login)){
                objUsuario2=objUsuario;
                break;
            }
        }
        return objUsuario2;
    }
    
}
