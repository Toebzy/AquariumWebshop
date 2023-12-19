package dk.lyngby.config;

import dk.lyngby.model.Product;
import jakarta.persistence.EntityManagerFactory;

import java.util.Set;

public class Populate {
    public static void main(String[] args) {

        EntityManagerFactory emf = HibernateConfig.getEntityManagerFactory();

        try (var em = emf.createEntityManager()) {
            em.getTransaction().begin();
            Product fish1 = new Product("Angelfish", "Fish", "Pterophyllum scalare", 7,"src/assets/images/angelfish.jpg");
            Product fish2 = new Product("Clownfish", "Fish", "Amphiprioninae", 15,"https://www.starfish.ch/photos/fishes-Fische/damselfishes-Riffbarsche/Amphiprion-ocellaris11.jpg");
            Product fish3 = new Product("Royal Gramma", "Fish", "Gramma loreto", 25,"https://freakincorals.com/cdn/shop/products/lg_72329_Royal_Gramma_Basslet_576x.jpg?v=1601919573");
            Product fish4 = new Product("Blue Tang", "Fish", "Paracanthurus hepatus", 30,"https://www.monaconatureencyclopedia.com/wp-content/uploads/2008/08/1-Paracanthurus-hepatus-%C2%A9-Giuseppe-Mazza.jpg");
            Product fish5 = new Product("Garryfish", "Fish", "Garryfish", 4,"http://localhost:5173/src/assets/images/garryfish.png");


            em.persist(fish1);
            em.persist(fish2);
            em.persist(fish3);
            em.persist(fish4);
            em.persist(fish5);
            em.getTransaction().commit();
        }
    }
}
