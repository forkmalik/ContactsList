<template>
  <div class="contact-list">
    <input type="text" v-model="newName" />
    <button v-on:click="addNewContact" class="contact-list__btn add-btn">Add contact</button>
    <contacts-item
      v-for="contact in store.contacts"
      :key="contact.id"
      :contact="contact"
      :remove="removeContact"
    ></contacts-item>
  </div>
</template>

<script>
import ContactsItem from "./ContactsItem";
import store from "../store/store";

export default {
  name: "contacts-list",
  data() {
    return {
      newName: "",
      store: store,
    };
  },
  components: {
    ContactsItem,
  },
  methods: {
    addNewContact: function () {
      if (this.newName == "" || this.newName == undefined) {
        alert("Nothing to add");
      } else {
        let index = this.$data.store.contacts.length - 1 + 1;
        let newContact = {
          id: index,
          name: this.newName,
          phone: "",
          email: "",
        };
        let arr = this.$data.store.contacts;
        arr.splice(index, 1, newContact);
      }

      this.newName = "";
    },
    removeContact: function (index, close) {
      let arr = this.$data.store.contacts;
      if (index == arr[index].id) {
        arr.splice(index, 1);
      }
      else{
        alert("Can't be removed")
      }
      arr.forEach(element => {
        if(element.id > index) {
          element.id--
        }
      });
    },
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