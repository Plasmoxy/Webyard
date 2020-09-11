precision mediump float;

varying vec2 vTexCoord;

void main() {
  vec2 coord = vTexCoord;
  
  gl_FragColor = vec4(0, coord.x, coord.y, 1.0);
}