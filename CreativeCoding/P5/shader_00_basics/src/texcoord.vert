
attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 vTexCoord;

void main() {
  vTexCoord = aTexCoord;
  
  gl_Position = vec4(aPosition.xy * 2.0 - 1.0, 0.0, 1.0);
}