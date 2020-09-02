<template>
  <ol class="contact-list__item">
    <li>
      <router-link>
        <a>{{ contact.name }}</a>
      </router-link>
      <button @click="showModal" class="contact-list__btn">X</button>
    </li>
    <modal class="contact-list__modal" :visibility="isModalVisible" :close="closeModal" :remove="remove" :index="contact.id" v-show="isModalVisible"></modal>
  </ol>
</template>

<script>
import Modal from "../Modal/Modal"

export default {
  name: "contacts-item",
  components: {
    Modal,
  },
  data () {
    return {
      isModalVisible: false
    };
  },
  props: ["contact", "remove"],

  methods: {
    showModal() {
        this.isModalVisible = true;
      },
      closeModal () {
        this.isModalVisible = false
    },
  }
};
</script>


<style lang="scss">
.contact-list__item {
  list-style: none;
  padding: 0;
  li {
    position: relative;
    font-family: "Trebuchet MS", "Lucida Sans";
    padding: 7px 20px;
    margin-bottom: 10px;
    border-radius: 5px;
    border-left: 10px solid #f05d22;
    box-shadow: 2px -2px 5px 0 rgba(0, 0, 0, 0.1),
      -2px -2px 5px 0 rgba(0, 0, 0, 0.1), 2px 2px 5px 0 rgba(0, 0, 0, 0.1),
      -2px 2px 5px 0 rgba(0, 0, 0, 0.1);
    font-size: 20px;
    letter-spacing: 2px;
    transition: 0.3s all linear;
    button {
      position: absolute;
      right: 20px;
      top: 0;
      &:hover {
        cursor: pointer;
      }
    }

    &:hover {
      border-right: 10px solid green;
      cursor: pointer;
    }
  }
 .contact-list__modal {
   margin: auto;
  }
}
</style>