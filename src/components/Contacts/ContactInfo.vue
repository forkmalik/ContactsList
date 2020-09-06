<template>
  <div class="add-field-wrapper">
    <p>Name: {{ contact.name }}</p>
    <input type="text" placeholder="Example: e-mail" v-model="fieldName" />
    <input type="text" placeholder="Example: hi@mail.com" v-model="fieldValue" />
    <button class="contact-list__btn add-btn" @click="addField">Add field</button>
     <p v-for="param in contact" :key="param.id">{{ contact[fieldValue] }}</p>
  </div>
</template>

<script>
export default {
  name: "contact-info",
  data() {
    return {
      fieldName: "",
      fieldValue: "",
    };
  },
  props: ["contact"],
  methods: {
    addField: function () {
      if (
        this.fieldName == "" ||
        this.fieldName == undefined ||
        this.fieldValue == "" ||
        this.fieldValue == undefined
      ) {
        alert("Nothing to add");
      } else {
        let arr = this.contact;
        arr[this.fieldName] = this.fieldValue;
      }

      this.newName = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-list__btn {
  width: 100px;
  height: 40px;
  border: none;
  margin-top: 10px;
  border-radius: 20px;
  background-color: #f05d22;
  color: white;
  font-size: 16px;
}
input {
  border-radius: 10px;
  height: 30px;
  font-size: 16px;
}
</style>