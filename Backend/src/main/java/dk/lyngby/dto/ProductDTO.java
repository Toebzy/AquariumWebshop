package dk.lyngby.dto;

import dk.lyngby.model.Product;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
public class ProductDTO {
    private Integer id;
    private String productName;
    private Integer productPrice;

    public ProductDTO(Product product){
        this.id=product.getProductId();
        this.productName=product.getProductName();
        this.productPrice=product.getProductPrice();

    }
    public static List<ProductDTO> toProductDTOList(List<Product> products) {
        return products.stream().map(ProductDTO::new).collect(Collectors.toList());
    }

}
