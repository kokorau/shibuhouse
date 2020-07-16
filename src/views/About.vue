<template>
  <div>
    <canvas class="canvas" ref="canvas" />
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
  mounted(): void {
    const { innerWidth, innerHeight } = window
    const canvas = this.$refs.canvas
    const renderer = new THREE.WebGLRenderer({ canvas })
    renderer.setSize(window.innerWidth, window.innerHeight)
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(
      -innerWidth / 2,
      innerWidth / 2,
      innerHeight / 2,
      -innerHeight / 2,
      1,
      1000
    )
    const clock = new THREE.Clock()
    const loader = new THREE.TextureLoader()
    const uniforms = {
      time: { value: 0 },
      resolution: { value: new THREE.Vector2(innerWidth, innerHeight) },
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
        float sigmoid(float x, float k) {
          return 1. / (1.+exp(-(k * x)));
        }
        float wave(float x) {
          return sin(x) * 0.2 + sin(0.5 * x) * 0.3 + sin(0.2 * x) * 0.4 + sin(1.3 * x) * 0.1;
        }
        void main(){
          vec2 p = (vUv - 0.5) * 50.0;
          // p = vec2(p.x + wave(p.x + sin(p.y)) * 5.0, p.y + wave(p.x) * 10.0 * exp(-p.y * 0.13));
          p = vec2(p.x + wave(p.y + sin(p.x)) * 3.0, p.y + wave(p.x) * 10.0 * exp(-p.y * 0.13));
          float sig_sin = wave(
            (p.x + sigmoid(-p.y + p.y, 1.0)
              * wave(-p.y * sigmoid(p.x, 0.1) - time * 1.0))
              * sigmoid(p.x, 0.045)
              * 15.0
          );
          sig_sin = sig_sin * sigmoid(p.x-p.y, 0.2); // 全体を斜めに減衰
          // vec3 color = vec3(sig_sin);
          vec2 uv = vUv + sig_sin * 0.4;
          vec3 color = texture2D(uTex, uv).rgb;
          gl_FragColor = vec4(color, 1.0);
        }`,
      })
    )
    screen.position.set(0, 0, -1)
    scene.add(screen)

    const onResize = () => {
      console.log('resize')
      renderer.setSize(innerWidth, innerHeight)
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
