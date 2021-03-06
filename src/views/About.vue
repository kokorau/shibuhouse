<template>
  <div>
    <canvas class="canvas" ref="canvas" />
    <app-menu />
    <article class="article">
      <h1 class="title">ABOUT</h1>
      <div class="paragraph">
        <p class="text">
          人間関係とインターネットの中間くらい、アーティーストとクリエイターが会す秘密基地。 ここが渋家。
        </p>
        <p class="text">一人では何者にもなれない僕らのための居場所。</p>
        <p class="text">
          いつでもメンバーを募集しているし、誰も友達がいなくても、特に目的がなくても、24時間365日いつでも遊びに来て大丈夫。
        </p>
        <p class="text">いつでも連絡を待ってます。</p>
      </div>
      <div class="paragraph">
        <a href="mailto:shibuhouseinfo@gmail.com" class="text">shibuhouseinfo@gmail.com</a>
        <a href="tel:080-3367-6582" class="text">080 3367 6582</a>
        <p class="text">shibuhouseinfo@gmail.com</p>
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
        float sigmoid(float x, float k) {
          return 1. / (1.+exp(-(k * x)));
        }
        float wave(float x) {
          return sin(x) * 0.2 + sin(0.5 * x) * 0.3 + sin(0.2 * x) * 0.4 + sin(1.3 * x) * 0.1;
        }
        void main(){
          vec2 p = (vUv - 0.5) * 50.0;
          // p = vec2(p.x + wave(p.x + sin(p.y)) * 5.0, p.y + wave(p.x) * 10.0 * exp(-p.y * 0.13));
          p = vec2(
            p.x + wave(p.y + sin(p.x)) * 3.0,
            p.y + wave(p.x) * 10.0 * exp(-p.y * 0.13)
          );
          float sig_sin = wave(
            (p.x + sigmoid(p.y, 1.0)
              * wave(
                -p.y * sigmoid(p.x, 0.1) * 6.0
                - (time + wave(time)) * (wave(p.x) * 0.3 + 2.0) * 0.5)
              )
              * sigmoid(p.x + p.y, 0.035)
              * 9.478
          );
          sig_sin = sig_sin * sigmoid(p.x-p.y, 0.1); // 全体を斜めに減衰
          // vec3 color = vec3((sig_sin + 0.5) * 0.5); // 確認用(-1 ~ 1)
          float timer = sigmoid(time - 12.0, 0.7);
          vec2 uv = vUv + sig_sin * timer * 0.8; // filterの強度
          vec3 color = vec3(
            texture2D(uTex, uv + wave(p.y - time * 3.0) * timer * 0.004).r,
            texture2D(uTex, uv + wave(p.x - time * 3.0) * timer * 0.004).g,
            texture2D(uTex, uv + wave(p.x + p.y - time * 1.0) * timer * 0.004).b
          );
          gl_FragColor = vec4(color, 1.0);
        }`,
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
  bottom: 20%
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
  width: 60%
.text
  font-weight: bold
  font-size: 20px
  line-height: 1.3em
  text-shadow: 0 0 1px #001b47
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
  .paragraph
    width: 80%
  .text
    font-size: 16px
    margin-bottom: 4px
  .ruby
    font-size: 16px
@media screen and (min-width: 481px) and (max-width: 768px)
  .title
    font-size: 36px
    margin-bottom: 18px
    border-bottom: 6px solid #151515
  .paragraph
    width: 80%
  .text
    font-size: 14px
  .ruby
    font-size: 18px
</style>
