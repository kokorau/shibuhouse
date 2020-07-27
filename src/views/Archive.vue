<template>
  <div>
    <canvas class="canvas" ref="canvas" />
    <app-menu />
    <article class="article">
      <h1 class="title">ARCHIVE</h1>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as THREE from 'three'
import AppMenu from '@/components/AppMenu.vue'

export default Vue.extend({
  components: { AppMenu },
  data() {
    return {
      width: 0,
      height: 0,
    }
  },
  mounted(): void {
    const { innerWidth, innerHeight } = window
    this.width = innerWidth
    this.height = innerHeight
    const canvas = this.$refs.canvas
    const renderer = new THREE.WebGLRenderer({ canvas })
    renderer.setSize(window.innerWidth, window.innerHeight)
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(
      -this.width / 2,
      this.width / 2,
      this.height / 2,
      -this.height / 2,
      1,
      1000
    )
    const clock = new THREE.Clock()
    const loader = new THREE.TextureLoader()
    const uniforms = {
      time: { value: 0 },
      resolution: { value: new THREE.Vector2(this.width, this.height) },
      uTex: { value: loader.load(require('@/assets/sky.jpg')) },
    }
    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({
        uniforms,
        vertexShader: `
        varying vec2 vUv;
        void main(){
          vUv = uv;
          gl_Position = vec4( position, 1.0 );
        }`,
        fragmentShader: `
        varying vec2 vUv;
        uniform float time;
        uniform vec2 resolution;
        uniform sampler2D uTex;
        void main() {
            vec2 p = vUv * resolution;
            vec3 color = vec3(vUv.x);
            color = vec3(color.r * 0.3, color.g, color.b);
            gl_FragColor = vec4(color, 1.0);
        }
        `,
      })
    )
    screen.position.set(0, 0, -1)
    scene.add(screen)

    const onResize = () => {
      console.log('resize')
      this.width = window.innerWidth
      this.height = window.innerHeight
      renderer.setSize(this.width, this.height)
      uniforms.resolution.value = new THREE.Vector2(this.width, this.height)
    }

    window.addEventListener('resize', onResize)

    const animate = () => {
      requestAnimationFrame(animate)
      uniforms.time.value += clock.getDelta()
      renderer.render(scene, camera)
    }

    animate()
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
.canvas
  width: 100%
  height: 100%
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
