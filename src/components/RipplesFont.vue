<template>
  <canvas id="ripples-text" width="600" height="200"></canvas>
</template>

<script>
import * as THREE from 'three'
import { EffectComposer, RenderPass, GlitchEffect, EffectPass, ChromaticAberrationEffect } from 'postprocessing'
import frag from '@/shader/ripples.frag'
const vert = `
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

export default {
  name: 'RipplesFont',
  props: {
    speed: {
      required: false,
      type: Number,
      default: 1
    },
    ratio: {
      required: false,
      type: Number,
      default: 1
    }
  },
  data() {
    const renderer = null
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 600 / 200, 0.1, 1000)
    const geometry = null
    const material = null
    const textMesh = null
    const composer = null
    const clock = null
    const uniforms = {}
    return {
      renderer,
      scene,
      camera,
      geometry,
      material,
      textMesh,
      composer,
      clock,
      uniforms
    }
  },
  mounted() {
    this.createScene()
    this.assemblyRenderer()
    this.onResize()
    window.addEventListener('resize', this.onResize)
    this.applyPostprocess()
    this.animate()
  },
  methods: {
    createScene() {
      this.clock = new THREE.Clock()
      this.camera.position.set(0, 0, 500)
      // === mesh ===
      this.uniforms = {
        time: { value: 100 },
        resolution: { type: 'v2', value: new THREE.Vector2() },
        mouse: { type: 'v2', value: new THREE.Vector2() }
      }
      const loader = new THREE.FontLoader()
      // this.geometry = new THREE.BoxGeometry(1, 1, 1)
      loader.load('Rubik_Bold.json', this.onLoadFont)
    },
    onLoadFont(font) {
      const shapes = font.generateShapes('SHIBUHOUSE', 200)
      this.geometry = new THREE.ShapeBufferGeometry(shapes)
      this.geometry.computeBoundingBox()
      const xMid = -0.5 * (this.geometry.boundingBox.max.x - this.geometry.boundingBox.min.x)
      const yMid = -0.5 * (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y)
      this.geometry.translate(xMid, yMid, 0)
      this.material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: vert,
        fragmentShader: frag
      })
      this.textMesh = new THREE.Mesh(this.geometry, this.material)
      this.scene.add(this.textMesh)
    },
    assemblyRenderer() {
      const canvas = document.getElementById('ripples-text')
      this.renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true
      })
      this.composer = new EffectComposer(this.renderer)
      this.composer.addPass(new RenderPass(this.scene, this.camera))
    },
    applyPostprocess() {
      // === glitch and noise ===
      const glitch = new EffectPass(this.camera, new GlitchEffect())
      // glitch.renderToScreen = true;
      // === chromatic ===
      const chroma = new EffectPass(
        this.camera,
        new ChromaticAberrationEffect({
          offset: new THREE.Vector2(0.008, 0)
        })
      )
      chroma.renderToScreen = true
      this.composer.addPass(glitch)
      this.composer.addPass(chroma)
    },
    animate() {
      requestAnimationFrame(this.animate)

      if (this.textMesh) {
        this.textMesh.material.uniforms.time.value += 8.0 * this.speed
      }

      this.composer.render(this.clock.getDelta())
    },
    onResize() {
      const canvas = document.getElementById('ripples-text')
      const [width, height] = [canvas.clientWidth, canvas.clientHeight]
      this.renderer.setSize(width, height)
      this.uniforms.resolution.value.x = width / this.ratio
      this.uniforms.resolution.value.y = height / this.ratio
    }
  }
}
</script>
