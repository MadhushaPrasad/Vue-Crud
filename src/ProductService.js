import axios from 'axios';

const url = 'http://localhost:3000/api/products';

class ProductService {
  //getAll Products
  static getProducts() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(url);
        const productData = response.data;
        resolve(
          productData.map((product) => ({
            ...product,
            createdAt: new Date(product.createdAt),
          }))
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  //post products
  static postProduct(product) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(url, product);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  }

  //update products
  static updateProduct(product) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.put(`${url}/${product._id}`, product);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  }

  //delete products
  static deleteProduct(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.delete(`${url}/${id}`);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  }

  //search signle product
  static searchProduct(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(`${url}/${id}`);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default ProductService;
