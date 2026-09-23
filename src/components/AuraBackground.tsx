"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { voxauraFragmentShader } from "./voxaura-shader";

/** Original VoxAura shader, with a CSS fallback and motion/visibility controls. */
export function AuraBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const home = usePathname() === "/";
  useEffect(() => {
    const element = ref.current;
    const canvas = canvasRef.current;
    if (!element || !canvas || !home) return;
    let inView = false;
    let frame = 0;
    let previousTime = 0;
    let elapsed = 0;
    let lost = false;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const gl = canvas.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: false });
    const shaders: WebGLShader[] = [];
    let program: WebGLProgram | null = null;
    let buffer: WebGLBuffer | null = null;
    let draw: (() => void) | undefined;
    const release = () => {
      if (!gl) return;
      if (buffer) gl.deleteBuffer(buffer);
      if (program) gl.deleteProgram(program);
      shaders.forEach(shader => gl.deleteShader(shader));
    };
    try {
      if (!gl) throw new Error("WebGL unavailable; using CSS atmosphere");
      const compile = (type: number, source: string) => {
        const shader = gl.createShader(type);
        if (!shader) throw new Error("Could not allocate VoxAura shader");
        shaders.push(shader);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader) || "VoxAura shader compile failed");
        return shader;
      };
      program = gl.createProgram();
      if (!program) throw new Error("Could not allocate VoxAura program");
      gl.attachShader(program, compile(gl.VERTEX_SHADER, "attribute vec2 position; void main() { gl_Position = vec4(position, 0.0, 1.0); }"));
      gl.attachShader(program, compile(gl.FRAGMENT_SHADER, voxauraFragmentShader));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program) || "VoxAura program link failed");
      gl.useProgram(program);
      buffer = gl.createBuffer();
      if (!buffer) throw new Error("Could not allocate VoxAura geometry");
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
      const position = gl.getAttribLocation(program, "position");
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
      const time = gl.getUniformLocation(program, "u_time");
      const resolution = gl.getUniformLocation(program, "u_resolution");
      draw = () => {
        if (lost) return;
        // Template uses one drawing pixel per CSS pixel; avoid unnecessary GPU work.
        const width = Math.max(1, Math.round(element.clientWidth));
        const height = Math.max(1, Math.round(element.clientHeight));
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
          gl.viewport(0, 0, width, height);
        }
        gl.uniform2f(resolution, width, height);
        gl.uniform1f(time, elapsed * 0.002); // Exact original template speed.
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      };
      draw();
      element.dataset.renderer = "webgl";
    } catch (error) {
      console.warn("VoxAura animation fallback:", error);
      release();
      draw = undefined;
      element.dataset.renderer = "css";
    }
    const animate = (now: number) => {
      if (previousTime) elapsed += now - previousTime;
      previousTime = now;
      draw?.();
      frame = requestAnimationFrame(animate);
    };
    const update = () => {
      const active = inView && !document.hidden && !motion.matches;
      element.dataset.animate = String(active);
      cancelAnimationFrame(frame);
      previousTime = 0;
      if (active && draw && !lost) frame = requestAnimationFrame(animate);
    };
    const onContextLost = () => {
      lost = true;
      cancelAnimationFrame(frame);
      element.dataset.renderer = "css";
      console.warn("VoxAura WebGL context lost; using CSS atmosphere");
    };
    canvas.addEventListener("webglcontextlost", onContextLost);
    const resize = new ResizeObserver(() => draw?.());
    resize.observe(element);
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; update(); });
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    motion.addEventListener("change", update);
    return () => {
      observer.disconnect();
      resize.disconnect();
      cancelAnimationFrame(frame);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      release();
      element.dataset.animate = "false";
      delete element.dataset.renderer;
      document.removeEventListener("visibilitychange", update);
      motion.removeEventListener("change", update);
    };
  }, [home]);
  return (
    <div ref={ref} className="vox-atmosphere" aria-hidden="true" data-home={home} data-animate="false">
      <div className="vox-plasma" />
      {home && <canvas ref={canvasRef} className="vox-canvas" />}
      <div className="vox-slices">{Array.from({ length: 5 }, (_, i) => <div key={i} />)}</div>
    </div>
  );
}
