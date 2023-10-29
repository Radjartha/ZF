<script setup>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'

</script>

<template>
    <Navbar class="sticky top-0 z-50 " sticky="top">
      <template #logo>
        <NavbarLogo class="text-[#af4a21]" link="#" alt="ZealoFurr" image-url="../assets/img/ZealoFurr_Interactive_Icon.png">
          <h1 class="font-bold">
          ZealoFurr</h1>
        </NavbarLogo>
      </template>
      <template #default="{isShowMenu}"  class="">
        <NavbarCollapse :isShowMenu="isShowMenu">
          <NavbarLink class="">
            <router-link to="/" class="nav-link text-black hover:text-[#f9872a] transition duration-300 ">Home</router-link>
          </NavbarLink>
          <NavbarLink>
            <router-link to="/about"  class="NavbarLink text-black hover:text-[#f9872a] transition duration-300">About</router-link>
          </NavbarLink>
          <NavbarLink><router-link to="/portfolio" class="NavbarLink text-black hover:text-[#f9872a] transition duration-300">Portfolio</router-link></NavbarLink>
          <NavbarLink><router-link to="/contact" class="NavbarLink text-black hover:text-[#f9872a] transition duration-300">Contact</router-link></NavbarLink>
        </NavbarCollapse>
      </template>

    </Navbar>
  </template>

  <style scoped>
a.router-link-active {
  color: #af4a21;
}
</style>