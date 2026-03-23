import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null, radius: 120 };

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      initParticles();
    };

    class Particle {
      constructor() {
        this.size = Math.random() * 2 + 1; // Radius 1-3px (2-6px diameter)
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4; // Slow drifting velocity
        this.vy = (Math.random() - 0.5) * 0.4;
        this.baseAlpha = Math.random() * 0.3 + 0.1; // Baseline opacity 0.1 to 0.4
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        
        let distance = Infinity;
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          distance = Math.sqrt(dx * dx + dy * dy);
        }

        if (distance < mouse.radius) {
          const intensity = 1 - (distance / mouse.radius);
          // Glow intensely near the mouse pointer
          ctx.fillStyle = `rgba(255, 255, 255, ${this.baseAlpha + intensity * 0.6})`;
          ctx.shadowBlur = 10 * intensity;
          ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${this.baseAlpha})`;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around seamlessly
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;

        this.draw();
      }
    }

    const initParticles = () => {
      particles = [];
      const area = canvas.width * canvas.height;
      // Density control: cap maximum particles for performance
      const numberOfParticles = Math.min(Math.floor(area / 12000), 120);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (e.clientX >= rect.left && e.clientX <= rect.right &&
          e.clientY >= rect.top && e.clientY <= rect.bottom) {
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      } else {
        mouse.x = null;
        mouse.y = null;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default ParticleBackground;
