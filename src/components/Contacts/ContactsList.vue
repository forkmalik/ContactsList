<template>
  <div class="contact-list">
    <input type="text" v-model="newName" />
    <button v-on:click="addNewContact" class="contact-list__btn add-btn">Add contact</button>
    <contacts-item v-for="contact in contacts" :key="contact.id" :contact="contact"></contacts-item>
  </div>
</template>

<script>
import ContactsItem from "./ContactsItem";
export default {
  name: "contacts-list",
  data() {
    return {
      newName: "",
      contacts: [
        { id: 0, name: "Ivan Ivanov", phone: "556984", email: "ivan@mail.com" },
        { id: 1, name: "Ivan Ivanov", phone: "556984", email: "ivan@mail.com" },
        { id: 2, name: "Ivan Ivanov", phone: "556984", email: "ivan@mail.com" },
        { id: 3, name: "Ivan Ivanov", phone: "556984", email: "ivan@mail.com" },
        { id: 4, name: "Ivan Ivanov", phone: "556984", email: "ivan@mail.com" },
        { id: 5, name: "Ivan Ivanov", phone: "556984", email: "ivan@mail.com" },
        { id: 6, name: "Ivan Ivanov", phone: "556984", email: "ivan@mail.com" },
        { id: 7, name: "Ivan Ivanov", phone: "556984", email: "ivan@mail.com" },
        { id: 8, name: "Ivan Ivanov", phone: "556984", email: "ivan@mail.com" },
        { id: 9, name: "Ivan Ivanov", phone: "556984", email: "ivan@mail.com" },
        {
          id: 10,
          name: "Ivan Ivanov",
          phone: "556984",
          email: "ivan@mail.com",
        },
        {
          id: 11,
          name: "Ivan Ivanov",
          phone: "556984",
          email: "ivan@mail.com",
        },
        {
          id: 12,
          name: "Ivan Ivanov",
          phone: "556984",
          email: "ivan@mail.com",
        },
      ],
    };
  },
  components: {
    ContactsItem,
  },
  methods: {
    addNewContact: function () {
      this.$data.contacts.push({
        id: this.$data.contacts.lenth - 1 + 1,
        name: this.newName,
      });
      this.newName = "";
    }
  },
};
</script>

<style lang="scss">
.contact-list {
  font-family: "Trebuchet MS", "Lucida Sans";
  letter-spacing: 2px;
  width: 100%;
  max-width: 1800;
  margin-left: 5px;
  .contact-list__btn {
    border: none;
    margin-top: 10px;
    border-radius: 20px;
    background-color: #f05d22;
    color: white;
  }
  .add-btn {
    width: 100px;
    height: 50px;
    font-size: 16px;
  }
  input {
    border-radius: 10px;
    height: 30px;
    font-size: 16px;
  }
}
</style>