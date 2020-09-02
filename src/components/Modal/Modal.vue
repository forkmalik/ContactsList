<template>
  <transition name="modal-fade">
    <div class="background">
      <div class="modal-body">
        <p class="modal-body__text">Are you sure?</p>
        <button class="modal-body__btn contact-list__btn accept" @click="acceptRemove">Yes</button>
        <button class="modal-body__btn contact-list__btn close" @click="close">No</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: ["visibility", "close", "remove", "index"],
  methods: {
    acceptRemove() {
      this.remove(this.index);
      this.close();
    },
  },
};
</script>

<style>
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-body {
  width: 30%;
  height: 150px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 10px;
}
.modal-body__text {
  text-align: center;
  margin: 0;
  font-size: 18px;
}

.modal-body__btn {
  height: 50px;
  font-size: 16px;
  cursor: pointer;
}

.modal-body__btn:hover {
  background-color: green;
  transition: 0.2s;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
</style>