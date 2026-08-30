import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraControllerProps {
  scrollProgress: number; // 0.0 to 1.0 representing total page scroll
  activeSectionIndex: number;
}

// Camera waypoints corresponding to each of the 8 sections
const cameraWaypoints: {
  pos: [number, number, number];
  lookAt: [number, number, number];
}[] = [
  // 0: Home / Hero - Close, epic view of Digital Core
  { pos: [0, 0, 4.8], lookAt: [0, 0, 0] },
  // 1: About Me - Camera pans right, tilting toward core
  { pos: [1.8, 0.4, 4.4], lookAt: [-0.5, 0, 0] },
  // 2: Resume - Camera aligns near vertical timeline pillar
  { pos: [-1.6, 0.2, 4.6], lookAt: [1.0, 0, -1] },
  // 3: Skills - Centered view of 3D Constellation
  { pos: [0, 0.1, 5.4], lookAt: [0, 0, 0] },
  // 4: Projects - Camera glides into Vasavi Traders 3D layers
  { pos: [0.2, -0.2, 4.6], lookAt: [0, 0, 0] },
  // 5: Certificates - Camera focuses on floating hologram shields
  { pos: [-0.8, 0.3, 4.8], lookAt: [0, 0, 0] },
  // 6: Achievements - Dynamic elevated perspective
  { pos: [1.0, -0.3, 4.5], lookAt: [0, 0, 0] },
  // 7: Contact - Majestic wide pull-back
  { pos: [0, 0.2, 6.4], lookAt: [0, 0, 0] },
];

export const CameraController: React.FC<CameraControllerProps> = ({ scrollProgress, activeSectionIndex }) => {
  const currentPos = useRef(new THREE.Vector3(0, 0, 5));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(({ camera, pointer }) => {
    // Determine target waypoint based on continuous scroll progress or active section
    const totalSections = cameraWaypoints.length;
    const progressIndex = scrollProgress * (totalSections - 1);
    const lowerIdx = Math.floor(progressIndex);
    const upperIdx = Math.min(lowerIdx + 1, totalSections - 1);
    const segmentT = progressIndex - lowerIdx;

    const p1 = cameraWaypoints[lowerIdx];
    const p2 = cameraWaypoints[upperIdx];

    if (p1 && p2) {
      // Interpolate position between waypoints
      const targetX = THREE.MathUtils.lerp(p1.pos[0], p2.pos[0], segmentT) + pointer.x * 0.25;
      const targetY = THREE.MathUtils.lerp(p1.pos[1], p2.pos[1], segmentT) + pointer.y * 0.2;
      const targetZ = THREE.MathUtils.lerp(p1.pos[2], p2.pos[2], segmentT);

      // Interpolate lookAt target
      const lookAtX = THREE.MathUtils.lerp(p1.lookAt[0], p2.lookAt[0], segmentT);
      const lookAtY = THREE.MathUtils.lerp(p1.lookAt[1], p2.lookAt[1], segmentT);
      const lookAtZ = THREE.MathUtils.lerp(p1.lookAt[2], p2.lookAt[2], segmentT);

      // Smooth dampening
      currentPos.current.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.06);
      currentLookAt.current.lerp(new THREE.Vector3(lookAtX, lookAtY, lookAtZ), 0.06);

      camera.position.copy(currentPos.current);
      camera.lookAt(currentLookAt.current);
    }
  });

  return null;
};
