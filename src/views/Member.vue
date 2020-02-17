<template>
  <div>
    <app-menu />
    <div :class="$style.page">
      <img
        v-for="member of members"
        :key="member.name"
        v-show="selected && member.name === selected.name"
        :class="$style.image"
        :alt="member.name"
        :src="member.image"
        :style="member.style"
      />
      <ul :class="$style.members" @mouseleave="selected = null">
        <li v-for="member of members" :key="member.name" :class="$style.member" @mouseenter="selected = member">
          <p :class="$style.name">{{ member.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppMenu from '../components/AppMenu.vue'

interface Member {
  name: string
  image: string
  style: {}
}

const members: Member[] = [
  {
    name: 'ayano_chan',
    image: require('@/assets/member/ayano_chan.png'),
    style: {
      width: '100%'
    }
  },
  {
    name: '世捨日影',
    image: require('@/assets/member/yosute_hikage.png'),
    style: {
      height: '100vh',
      right: '50%'
    }
  },
  {
    name: 'kokorau',
    image: require('@/assets/member/kokorau.jpg'),
    style: {
      width: '100vw',
      height: '100vh'
    }
  },
  {
    name: 'KENT',
    image: require('@/assets/member/kent.png'),
    style: {
      height: '100vh',
      right: 0
    }
  },
  {
    name: '紫草',
    image: require('@/assets/member/sigsa.png'),
    style: {
      width: '100vw',
      top: 0
    }
  },
  {
    name: 'naoki fujita',
    image: '',
    style: {}
  },
  {
    name: 'かいざー',
    image: require(`@/assets/member/kaizer.png`),
    style: {
      width: '60vw',
      left: '5vw'
    }
  },
  {
    name: 'キタザワキュー',
    image: '',
    style: {}
  },
  {
    name: 'MRMYX',
    image: '',
    style: {}
  },
  {
    name: 'mmsk',
    image: '',
    style: {}
  },
  {
    name: 'ササキソウ',
    image: '',
    style: {}
  },
  {
    name: 'もちこ',
    image: '',
    style: {}
  },
  {
    name: 'ryohei',
    image: '',
    style: {}
  },
  {
    name: 'ちけ',
    image: '',
    style: {}
  }
]

export default Vue.extend({
  components: { AppMenu },
  data(): {
    members: Member[]
    selected: Member
  } {
    return {
      members: members,
      selected: null
    }
  }
})
</script>

<style lang="postcss" module>
.page {
  width: 100vw;
  height: 100vh;
}
.image {
  position: fixed;
  bottom: 0;
}
.members {
  position: fixed;
  bottom: 20px;
  right: 130px;
  list-style: none;
  transform-origin: right bottom;
  transform: rotate(-90deg) translate(100%);
}
.name {
  position: relative;
  display: inline-block;
  font-size: 32px;
  margin-top: 20px;
  transform-origin: left center;
  transform: rotate(25deg);
}
.name::before {
  content: '';
  z-index: -1;
  position: absolute;
  bottom: 25%;
  width: 0;
  height: 20%;
  background: #151515;
  transition: 0.3s ease-out;
}
.name:hover::before {
  width: 100%;
}
</style>
