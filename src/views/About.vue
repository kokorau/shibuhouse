<template>
  <div>
    <canvas id="canvas" ref="canvas" />
    <app-menu />
    <article class="article">
      <h1 class="title">ABOUT</h1>
      <div class="paragraph">
        <p class="text">
          SHIBUHOUSE is selling for 500,000,000 yen.
        </p>
        <p class="ruby">渋家、5億で販売中。</p>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as THREE from 'three'
import AppMenu from '@/components/AppMenu.vue'

export default Vue.extend({
  components: { AppMenu },
  data(): {
    renderer: THREE.WebGLRenderer
    scene: THREE.Scene
    camera: THREE.Camera
    cube: THREE.Mesh
  } {
    return {
      renderer: null,
      scene: null,
      camera: null,
      cube: null,
    }
  },
  mounted(): void {
    const canvas = this.$refs.canvas as HTMLCanvasElement

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 1.5

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)

    renderer.setClearColor('#ff00ff', 0)
    const loader = new THREE.TextureLoader()
    const bumpMap = loader.load(require('@/assets/map.jpg'))
    const material = new THREE.MeshNormalMaterial({
      bumpMap,
    })
    const geometry = new THREE.BoxGeometry()
    const cube = new THREE.Mesh(geometry, material)

    scene.add(cube)

    window.addEventListener('resize', this.onResize)

    const animate = function () {
      requestAnimationFrame(animate)

      cube.rotation.x += 0.006
      cube.rotation.y += 0.006

      renderer.render(scene, camera)
    }

    animate()
  },
  methods: {
    onResize() {
      const { innerHeight, innerWidth } = window

      // this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(innerWidth, innerHeight)

      this.camera.aspect = innerWidth / innerHeight
      this.camera.updateProjectionMatrix()
    },
  },
})
</script>

<style scoped lang="sass">
.article
  position: fixed
  bottom: 0
  width: 100%
  padding: 0 0 4vh 20vw
  box-sizing: border-box
.title
  color: #151515
  font-size: 42px
  border-bottom: 8px solid #151515
  margin-bottom: 24px
  padding-left: 12px
.paragraph
  padding-left: 8px
.text
  font-size: 24px
.info
  font-size: 36px
  margin: 6px 0 22px
@media screen and (max-width: 480px)
  .article
    padding: 0 0 4vh 10vw
  .title
    font-size: 30px
    margin-bottom: 18px
    border-bottom: 6px solid #151515
  .text
    font-size: 22px
    margin-bottom: 4px
  .ruby
    font-size: 16px
@media screen and (min-width: 481px) and (max-width: 768px)
  .title
    font-size: 36px
    margin-bottom: 18px
    border-bottom: 6px solid #151515
  .text
    font-size: 24px
  .ruby
    font-size: 18px
</style>
