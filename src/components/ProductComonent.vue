<template>
  <h1>Product Component</h1>
  <p v-if="error">{{ error }}</p>
  <div>
    <div
      v-for="(product, index) in products"
      v-bind:item="product"
      v-bind:index="index"
      v-bind:key="product.id"
    >
    <p>{{product.id}}</p>
    <p>{{product.name}}</p>
    <p>{{product.price}}</p>
    <p>{{product.createdAt}}</p>
    </div>
  </div>
</template>

<script>
import ProductService from '../ProductService';
export default {
  name: 'ProductComponent',
  data() {
    return {
      products: [],
      error: '',
    };
  },
  async created() {
    try {
      this.products = await ProductService.getProducts();
    } catch (error) {
      this.error = error.message;
    }
  },
};
</script>
