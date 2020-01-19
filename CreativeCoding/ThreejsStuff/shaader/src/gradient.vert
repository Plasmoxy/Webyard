uniform float uSeconds;
varying float vSecDiff;
varying vec3 vPos;

void main() {
  vSecDiff = uSeconds - floor(uSeconds);
  vPos = position;
  
  vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * modelViewPosition;
}