<template>
  <div class="add-field-wrapper">
    <select class="drop-down" @change="changeFieldTitle($event)">
      <option value selected disabled>Choose</option>
      <option
        v-for="fieldTitle in fieldTitles"
        :value="fieldTitle.id"
        :key="fieldTitle.id"
      >{{ fieldTitle.name }}</option>
    </select>

    <input type="text" placeholder="Example: hi@mail.com" v-model="fieldValue" />
    <button class="contact-list__btn add-btn" @click="addField">Add field</button>
    <info-component v-for="param in contact" :key="param.id" :info="param" :contact="contact"></info-component>
  </div>
</template>

<script>
import InfoComponent from "./InfoComponent/InfoComponent";
export default {
  name: "contact-info",
  components: { InfoComponent },
  props: ["contact"],
  data() {
    return {
      fieldValue: "",
      fieldTitles: [
        { id: 0, name: "E-mail" },
        { id: 1, name: "Phone" },
        { id: 2, name: "Address" },
      ],
      selectedFieldTitle: null,
      index: 1,
    };
  },
  methods: {
    changeFieldTitle: function (event) {
      this.selectedFieldTitle =
        event.target.options[event.target.options.selectedIndex].text;
      console.log(this.selectedFieldTitle);
    },
    addField: function () {
      switch (this.selectedFieldTitle) {
        case "E-mail":
          this.contact[this.selectedFieldTitle] = this.fieldValue;
          break;
        case "Phone":
          this.contact[this.selectedFieldTitle] = this.fieldValue;
          break;
        case "Address":
          this.contact[this.selectedFieldTitle] = this.fieldValue;
          break;
      }
      this.fieldValue = "";
      this.selectedFieldTitle = null;
      this.index++;
    },
  },
};
</script>

<style lang="scss" scoped>
.drop-down {
  width: 100px;
  height: 40px;
  border-radius: 10px;
}
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