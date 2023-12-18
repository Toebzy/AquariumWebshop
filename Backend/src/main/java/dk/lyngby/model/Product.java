package dk.lyngby.model;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.mindrot.jbcrypt.BCrypt;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@NoArgsConstructor
@Entity
@Table(name="products")

public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id", nullable = false)
    private Integer productId;

    @Setter
    @Column(name="product_name", nullable = false, unique = true)
    private String productName;

    @Setter
    @Column(name="product_price", nullable = false)
    private Integer productPrice;

    @ManyToOne
    private Order order;

    @ManyToMany(mappedBy = "cart_products", fetch = FetchType.EAGER)
    private Set<Cart> carts = new HashSet<>();


}
