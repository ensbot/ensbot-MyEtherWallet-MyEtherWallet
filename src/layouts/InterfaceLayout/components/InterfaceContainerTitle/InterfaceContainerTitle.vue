<template lang="html">
  <div class="interface-container-title">
    <div class="desktop-title">
      <h2>{{ title }} <slot></slot></h2>
      <slot name="right"></slot>
      <div class="side-menu-button">
        <round-button
          :title="$t('interface.menu.string')"
          @click.native="startToggleSideMenu"
        />
      </div>
    </div>
    <div class="mobile-title">
      <mobile-menu :title="title" />
    </div>
  </div>
</template>

<script>
import RoundButton from '@/components/Buttons/RoundButton';
import InterfaceMobileMenu from '@/layouts/InterfaceLayout/components/InterfaceMobileMenu';
import { mapActions } from 'vuex';

export default {
  components: {
    'round-button': RoundButton,
    'mobile-menu': InterfaceMobileMenu
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions('main', ['toggleSideMenu']),
    startToggleSideMenu() {
      this.toggleSideMenu();
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'InterfaceContainerTitle.scss';
</style>
