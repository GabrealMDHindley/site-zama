"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GOLD = "#C9A227";

/** Builds a wireframe/vein line geometry for a single tropical leaf, roughly
 * monstera-shaped: an outline plus a midrib and a few side veins. Purely
 * procedural — no textures, no imagery of the real space. */
function buildLeafGeometry(size: number) {
  const points: THREE.Vector3[] = [];
  const segments = 28;

  // Outline — an asymmetric lance shape.
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const angle = t * Math.PI * 2;
    const lobe = 1 + 0.18 * Math.sin(angle * 3 + 0.6);
    const r =
      size *
      lobe *
      (0.55 + 0.45 * Math.pow(Math.sin(angle / 2 + Math.PI / 2), 2));
    const x = Math.sin(angle) * r * 0.6;
    const y = -Math.cos(angle) * r;
    points.push(new THREE.Vector3(x, y, 0));
  }
  const outline = new THREE.BufferGeometry().setFromPoints(points);
  const outlineLine = new THREE.LineLoop(
    outline,
    new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 1 })
  );

  // Midrib + side veins.
  const veinPts: THREE.Vector3[] = [];
  veinPts.push(new THREE.Vector3(0, size * 0.95, 0));
  veinPts.push(new THREE.Vector3(0, -size, 0));
  const veinCount = 5;
  for (let i = 1; i <= veinCount; i++) {
    const y = size * 0.8 - (i / veinCount) * size * 1.6;
    const spread = size * (0.15 + (i / veinCount) * 0.32);
    veinPts.push(new THREE.Vector3(0, y, 0));
    veinPts.push(new THREE.Vector3(spread, y - size * 0.18, 0));
    veinPts.push(new THREE.Vector3(0, y, 0));
    veinPts.push(new THREE.Vector3(-spread, y - size * 0.18, 0));
  }
  const veinGeo = new THREE.BufferGeometry().setFromPoints(veinPts);
  const veinLines = new THREE.LineSegments(
    veinGeo,
    new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 1 })
  );

  const group = new THREE.Group();
  group.add(outlineLine, veinLines);
  return group;
}

type LeafDatum = {
  position: [number, number, number];
  rotation: number;
  scale: number;
  speed: number;
  phase: number;
  opacity: number;
};

function Leaf({
  datum,
  reducedMotion,
}: {
  datum: LeafDatum;
  reducedMotion: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const leaf = useMemo(() => buildLeafGeometry(1), []);

  useEffect(() => {
    leaf.children.forEach((child) => {
      const line = child as THREE.LineSegments | THREE.LineLoop;
      (line.material as THREE.LineBasicMaterial).opacity = datum.opacity;
    });
  }, [leaf, datum.opacity]);

  useFrame((state) => {
    if (!group.current) return;
    const t = reducedMotion ? 0 : state.clock.getElapsedTime();
    // ~14s per idle drift cycle.
    const cycle = (t / 14) * Math.PI * 2 + datum.phase;
    group.current.position.y = datum.position[1] + Math.sin(cycle) * 0.18;
    group.current.position.x = datum.position[0] + Math.cos(cycle * 0.7) * 0.1;
    group.current.rotation.z = datum.rotation + Math.sin(cycle * 0.5) * 0.06;
  });

  return (
    <group
      ref={group}
      position={datum.position}
      rotation={[0, 0, datum.rotation]}
      scale={datum.scale}
    >
      <primitive object={leaf} />
    </group>
  );
}

function LeafField({
  count,
  reducedMotion,
}: {
  count: number;
  reducedMotion: boolean;
}) {
  const data = useMemo<LeafDatum[]>(() => {
    const rand = (seed: number) => {
      // simple deterministic pseudo-random so SSR/CSR never mismatch
      const x = Math.sin(seed * 999.7) * 10000;
      return x - Math.floor(x);
    };
    const out: LeafDatum[] = [];
    for (let i = 0; i < count; i++) {
      const leftSide = i % 2 === 0;
      const edgeX = leftSide ? -3.2 - rand(i) * 1.4 : 3.2 + rand(i + 50) * 1.4;
      out.push({
        position: [
          edgeX,
          -1.6 + rand(i + 10) * 3.2,
          -1 - rand(i + 20) * 2,
        ],
        rotation: (rand(i + 30) - 0.5) * 1.4,
        scale: 0.7 + rand(i + 40) * 0.9,
        speed: 0.6 + rand(i + 60) * 0.8,
        phase: rand(i + 70) * Math.PI * 2,
        opacity: 0.08 + rand(i + 80) * 0.14,
      });
    }
    return out;
  }, [count]);

  return (
    <>
      {data.map((d, i) => (
        <Leaf key={i} datum={d} reducedMotion={reducedMotion} />
      ))}
    </>
  );
}

export default function HeroScene() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener?.("change", onChange);

    setIsMobile(window.innerWidth < 768);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);

    return () => {
      mq.removeEventListener?.("change", onChange);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const leafCount = isMobile ? 6 : 12;

  return (
    <Canvas
      dpr={isMobile ? [1, 1.2] : [1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={1} />
      <LeafField count={leafCount} reducedMotion={reducedMotion} />
    </Canvas>
  );
}
