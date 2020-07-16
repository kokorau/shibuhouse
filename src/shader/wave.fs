varying vec2 vUv;
uniform float time;
uniform vec2 resolution;
float sigmoid(float x, float k) {
  return 1. / (1.+exp(-(k * x)));
}
void main(){
  vec2 p = vUv * resolution;
  float w_d = 0.5;
  float w_l = 0.2;
  float w_a = 6.0;
  vec2 wave = vec2(p.x + w_a * sin(p.y * w_l + time * 20.0), p.y);
  vec3 color = vec3(sin(wave.x * w_d));
  float min = 0.05;
  color = color * (1.0 - min) + min;

  gl_FragColor = vec4(color, 1.0);
}
