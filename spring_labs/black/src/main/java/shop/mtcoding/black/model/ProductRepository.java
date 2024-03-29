package shop.mtcoding.black.model;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface ProductRepository {
    
    public int insert(@Param("name") String name, @Param("price") String price, @Param("qty") String qty);

    public List<Product> findAll();

    public Product findById(int id);

    public int updateById(@Param("id") int id, @Param("name") String name, @Param("price") int price,
            @Param("qty") int qty);

    public int deleteById(int id);

}
