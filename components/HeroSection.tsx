'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Star particles with gravitational attraction
    const particles: any[] = [];
    const numStars = 75; // Reduced by 25% (was 100)

    // Center point (where text is)
    const centerX = canvas.width / 2 - 100; // Shifted left
    const centerY = canvas.height / 2;
    const circleRadius = 420; // Increased by 20% (was 350)
    const attractionRadius = 550; // Distance to start being attracted
    const attractionStrength = 0.12; // How much acceleration towards circle

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2, // Horizontal velocity
        vy: (Math.random() - 0.5) * 0.5, // Slight vertical velocity
        size: Math.random() * 2 + 0.5,
        life: 1,
        isAttracted: false,
      });
    }

    const animate = () => {
      // Clear canvas completely (no trail)
      ctx.fillStyle = 'rgba(15, 12, 41, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Calculate distance to center
        const dx = centerX - p.x;
        const dy = centerY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Attraction logic - attracted to circle boundary, NOT inside
        if (distance < attractionRadius && distance > circleRadius) {
          p.isAttracted = true;
          // Pull towards the circle boundary
          const angle = Math.atan2(dy, dx);
          const distanceToCircle = distance - circleRadius;
          const accelMagnitude = attractionStrength * (1 - distanceToCircle / (attractionRadius - circleRadius));
          p.vx += Math.cos(angle) * accelMagnitude;
          p.vy += Math.sin(angle) * accelMagnitude;
        } else if (distance <= circleRadius) {
          // HARD BARRIER: Stars cannot enter the circle - push them out strongly
          p.isAttracted = false;
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * 0.5; // Strong push outward
          p.vy -= Math.sin(angle) * 0.5;
        } else if (p.isAttracted && distance > attractionRadius + 50) {
          // Once it escapes far from circle, mark as no longer attracted
          p.isAttracted = false;
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (speed < 2) {
            // Accelerate away
            const angle = Math.atan2(p.vy, p.vx);
            p.vx = Math.cos(angle) * 2;
            p.vy = Math.sin(angle) * 1;
          }
        } else if (!p.isAttracted) {
          // Reset to normal horizontal movement when far from center
          p.vy *= 0.95; // Dampen vertical movement
          if (Math.abs(p.vy) < 0.1) p.vy = (Math.random() - 0.5) * 0.3;
        }

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen
        if (p.x > canvas.width + 50) {
          p.x = -50;
          p.y = Math.random() * canvas.height;
          p.vx = (Math.random() - 0.5) * 2;
          p.vy = (Math.random() - 0.5) * 0.5;
          p.isAttracted = false;
        } else if (p.x < -50) {
          p.x = canvas.width + 50;
          p.y = Math.random() * canvas.height;
          p.vx = (Math.random() - 0.5) * 2;
          p.vy = (Math.random() - 0.5) * 0.5;
          p.isAttracted = false;
        }

        if (p.y > canvas.height + 50) {
          p.y = -50;
        } else if (p.y < -50) {
          p.y = canvas.height + 50;
        }

        // Draw simple dot stars (no glow, no tail)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Circle is invisible - only used for physics calculations

      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden py-40 px-4 md:px-8">
      {/* Canvas-based Starfield with Gravitational Attraction */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(to bottom right, rgb(15, 12, 41) 0%, rgb(27, 24, 52) 50%, rgb(15, 12, 41) 100%)' }}
      />

      {/* Animated gradient background orbs (very subtle) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2s"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-4s"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-start">
          {/* Left Content - Aligned to Features position */}
          <div className="animate-fade-in max-w-2xl ml-64">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/50 bg-purple-900/20 backdrop-blur-sm mb-6">
              <div className="relative flex items-center justify-center w-8 h-8">
                <span className="absolute text-yellow-300 text-3xl animate-pulse" style={{textShadow: '0 0 10px rgba(253, 224, 71, 0.8), 0 0 20px rgba(253, 224, 71, 0.5)', fontFamily: 'serif', fontWeight: 'bold', animation: 'spin-y 3s linear infinite, pulse 2s ease-in-out infinite'}}>✦</span>
              </div>
              <span className="text-cyan-400 text-sm font-semibold whitespace-nowrap" style={{textShadow: '0 0 8px rgba(6, 182, 212, 0.8), 0 0 16px rgba(6, 182, 212, 0.6), 0 0 24px rgba(6, 182, 212, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.1)'}}>AI-Powered TPRM</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent leading-tight mb-6">
              Enterprise Risk Management Reimagined with AI
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Automate vendor assessments with cutting-edge AI. Monitor risks continuously, maintain compliance, and protect your supply chain with intelligent, autonomous insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/#contact" className="btn-primary text-center shadow-glow">
                Start Free Trial
              </Link>
              <button className="btn-secondary text-center">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-20 pt-20 border-t border-purple-500/20">
          <p className="text-center text-gray-400 text-sm mb-8">Trusted by leading enterprises</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {['Fintech', 'Healthcare', 'Industrial', 'Telecom', 'Blockchain', 'Public'].map((company) => (
              <div key={company} className="text-center font-semibold text-gray-400 hover:text-purple-400 transition">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated CSS for blobs and star */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes spin-y {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2s {
          animation-delay: 2s;
        }
        .animation-delay-4s {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
