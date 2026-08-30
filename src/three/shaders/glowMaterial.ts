import * as THREE from 'three';

export const CoreShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color('#8b5cf6') }, // Violet
    uColor2: { value: new THREE.Color('#06b6d4') }, // Cyan
    uColor3: { value: new THREE.Color('#ec4899') }, // Magenta
    uIntensity: { value: 1.2 },
  },
  vertexShader: `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    uniform float uTime;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      
      // Subtle vertex pulse
      vec3 pos = position;
      float displacement = sin(pos.x * 3.0 + uTime * 1.5) * cos(pos.y * 3.0 + uTime * 1.5) * 0.05;
      pos += normal * displacement;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    uniform float uIntensity;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;

    void main() {
      // Fresnel glow
      vec3 viewDirection = normalize(-vPosition);
      float fresnel = pow(1.0 - max(0.0, dot(viewDirection, vNormal)), 2.5);
      
      // Color interpolation
      float wave = sin(vPosition.y * 2.0 + uTime * 1.2) * 0.5 + 0.5;
      vec3 baseColor = mix(uColor1, uColor2, wave);
      baseColor = mix(baseColor, uColor3, fresnel * 0.5);

      vec3 finalColor = baseColor * (fresnel * uIntensity + 0.25);
      gl_FragColor = vec4(finalColor, fresnel * 0.85 + 0.15);
    }
  `,
};
