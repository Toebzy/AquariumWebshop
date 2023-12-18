package dk.lyngby.config;


import dk.lyngby.controller.impl.UserController;
import dk.lyngby.dao.impl.UserDao;
import dk.lyngby.model.User;
import jakarta.persistence.EntityManagerFactory;

public class Populate {
    public static void main(String[] args) {

        EntityManagerFactory emf = HibernateConfig.getEntityManagerFactory();

        try (var em = emf.createEntityManager()) {
            em.getTransaction().begin();
            User user = new User("user", "user");
            User admin = new User("admin", "admin");
            UserDao dao = UserDao.getInstance(emf);
            dao.createRole("admin");
            dao.createRole("user");


            em.persist(user);
            em.persist(admin);
            em.getTransaction().commit();
        }
    }
}
