class ProductManager
{
    products=[];
    idAuto=1;
    getproduct()
    {   console.log(this.products)
        return this.products;

    }

    addproduct(product)
    {
        if(
            !product.title ||
            !product.description ||
            !product.price ||
            !product.thumbnail ||
            !product.code ||
            !product.stock)

        {
            console.error("todos los campos son requeridos");
            return;
        }

        if (this.products.some((p) => p.code === product.code)) {
            console.error("Code must be unique.");
            return;
          }
        
        const newProduct ={
            ...product,
            id:this.idAuto,

        };
        this.products.push(newProduct);
        console.log("Product added:", newProduct);

        this.idAuto=this.idAuto+1;
        

    }

    getProductById(id)
    {
        const product= this.products.find((prod)=>prod.id===id);
        if(!product){
            console.error("no exite el producto con id: ", id);
            return null;
        }

        else{
            console.log("el producto con id:", id , "es",product )
            return ;

        }
        
    }

    getProductByCode(code)
    {
        const product= this.products.find((prod)=>prod.code===code);
        if(!product){
            console.error("no exite el producto con code: ", code);
            return;
        }

        else{
            console.log("el producto con code:", code , "es",product);
            return ;

        }
        
    }
}
const prodManager= new ProductManager();

prodManager.getproduct()
prodManager.addproduct({title: 'producto prueba',description: 'Este es un producto prueba',price:200,thumbnail: 'Sin imagen',code: 'abc123',stock: 25});

prodManager.getproduct()
prodManager.addproduct({title: 'producto prueba 2',description: 'Este es un producto prueba 2',price:300,thumbnail: 'Sin imagen',code: 'abc124',stock: 35});
prodManager.addproduct({title: 'producto prueba 2',description: 'Este es un producto prueba 2',price:300,thumbnail: 'Sin imagen',code: 'abc124',stock: 35});
prodManager.addproduct({title: 'producto prueba 2',description: '',price:300,thumbnail: 'Sin imagen',code: 'abc125',stock: 10});
prodManager.getProductById(1);
prodManager.getProductById(3);
prodManager.getProductByCode('abc123');

