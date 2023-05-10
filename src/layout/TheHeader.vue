<template>
  <header>
    <HeaderMenu></HeaderMenu>
    <div class="header">
      <div class="header-left__container">
        <div class="header__icon">
          <i class="fa-solid fa-bars"></i>
        </div>
        <div class="header__company-name">
          CÔNG TY THHH SẢN XUẤT - THƯƠNG MẠI QUY PHÚC
        </div>
        <div class="header__company-more">
          <img src="../assets/icons/Layer2-2.png" alt="" />
        </div>
      </div>
      <div class="header-right__container">
        <div class="header__notification">
          <i class="fa-regular fa-bell"></i>
        </div>
        <div class="header__profile-user">
          <div class="profile-user__avatar">
            <img
              src="../assets/icons/avatar-default.png"
              alt=""
              class="profile-user__avatar-img"
            />
          </div>
          <div class="profile-user__name">Nguyễn Văn Dũng</div>
          <div class="profile-user__more">
            <img src="../assets/icons/Layer2-2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderMenu from "../components/Mheadermenu/HeaderMenu.vue";

export default {
  name: "TheHeader",
  components: {
    HeaderMenu,
  },
};
</script>

<style scoped></style>
