
uniform vec2 resolution;
uniform float time;

uniform vec2 mouse;

    // More points of color.
const float mouse_factor    = 56.0;  // Makes it more/less jumpy.
const float mouse_offset    = 55.0;   // Drives complexity in the amount of curls/cuves.  Zero is a single whirlpool.
const float fluid_speed     = 100.0;  // Drives speed, higher number will make it slower.
const float color_intensity = 0.9;

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

vec3 p(vec2 xy, float m, float t)
{
  xy=floor(xy/m)*m + m*.5;
  vec2 p = (2.0*xy-resolution)/max(resolution.x,resolution.y);
  for(int i=1;i<45;i++)
  {
    vec2 newp=p + t*0.02;
    newp.x+=1.2/float(i)*sin(float(i)*p.y+t/fluid_speed+0.6*float(i)) + 1.0; // + mouse.y/mouse_factor+mouse_offset;
    newp.y+=0.6/float(i)*sin(float(i)*p.x+t/fluid_speed+0.3*float(i+10)) - 0.5; // - mouse.x/mouse_factor+mouse_offset;
    p=newp;
  }
  return vec3(color_intensity*sin(0.3*p.x)+color_intensity,color_intensity*sin(8.0*p.y)+color_intensity,color_intensity*sin(p.x+p.y)+color_intensity);
}

void main()
{
  vec3 col = vec3(0.);
  vec2 xy = gl_FragCoord.xy;
  float d = 1.;
  col+=p(xy,d,time);
  d*=2.;
  for (int i=0;i<5;i++) {
     col*=p(xy,d,time+d*.08)*1.;
     xy+=d*=2.;
  }
  gl_FragColor=vec4(col, 1.0);
}
