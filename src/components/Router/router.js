import Vue from "vue";
import VueRouter from "vue-router";
import ContactsList from "../Contacts/ContactsList.vue";
import ContactInfo from "../Contacts/ContactInfo.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: ContactsList },
  { path: "/contact-info", name: 'contact-info', component: ContactInfo, props: true }
  //{path: '*', component: ContactsList}
];

export default new VueRouter({
  mode: "history",
  routes
});
