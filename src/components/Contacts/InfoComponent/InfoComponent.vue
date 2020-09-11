<template>
  <ol class="info-container">
    <li class="info-item">
      <a>{{contactPropsName}}: {{info}}</a>
      <button class="contact-list__btn edit-btn">Edit</button>
      <button @click="removeField(contactPropsName)" class="contact-list__btn">X</button>
    </li>
  </ol>
</template>

<script>
export default {
  name: "info-component",
  props: ["info", "contact"],
  data() {
    return {
      contactPropsName: Object.keys(this.contact).find(
        (key) => this.contact[key] === this.info
      ),
    };
  },
  methods: {
    removeField: function (contactPropsName) {
      let currentPropsName = this.contactPropsName;
      if (currentPropsName == contactPropsName) {
        let contactKeys = Object.values(this.contact);
        let index = contactKeys.indexOf(currentPropsName);
        let contactInfoArr = Object.entries(this.contact);
        contactInfoArr.splice(index, 1);
        this.contact = Object.fromEntries(contactInfoArr)
        console.log(contactInfoArr);
        console.log(this.contact);
      }
    },
  },
};
</script>

<style lang="scss">
.info-container {
  list-style-type: none;
  padding: 0;
}
.info-item {
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
  &:hover {
    border-right: 10px solid green;
    cursor: pointer;
  }
  button {
    position: absolute;
    right: 20px;
    top: 0;
    &:hover {
      cursor: pointer;
    }
  }
  .contact-list__btn {
    border: none;
    margin-top: 10px;
    border-radius: 20px;
    background-color: #f05d22;
    color: white;
  }
  .edit-btn {
    width: 100px;
    height: 20px;
    font-size: 16px;
    margin-right: 50px;
  }
}
</style>