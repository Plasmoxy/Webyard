#define pi 3.1415926535897932384626433832795

uniform vec3 color;
varying vec3 vPos;
varying float vSecDiff;

void main() {
  gl_FragColor = vec4(color, vSecDiff);
}