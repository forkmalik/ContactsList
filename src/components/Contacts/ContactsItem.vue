<template>
  <div class="contact-list__item">
    <div class="contact-list__card">
      <p>{{ contact.name }}</p>
      <p>Tel: {{contact.phone}}</p>
      <p>E-mail: {{contact.email}}</p>
      <button>More...</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "contacts-item",
  props: ["contact"],
};
</script>


<style lang="scss">
.contact-list__item {
  
  .contact-list__card{
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 20px;
    width: 250px;
    min-height: 200px;
    padding: 10px;
    border-radius: 10px;
    border: solid brown;
  }
}
</style>