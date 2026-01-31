"use client";

import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function ShapeFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Slow follow settings
  const springX = useSpring(mouseX, { damping: 40, stiffness: 50 });
  const springY = useSpring(mouseY, { damping: 40, stiffness: 50 });

  const [shape, setShape] = useState<"circle" | "square" | "triangle" | "polygon">("circle");
  const [isMoving, setIsMoving] = useState(false);
  const rotateValue = useMotionValue(0);
  const smoothRotate = useSpring(rotateValue, { damping: 20, stiffness: 100 });

  const lastPos = useRef({ x: 0, y: 0 });
  const moveTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Pick random shape on reload
    const shapes: Array<"circle" | "square" | "triangle" | "polygon"> = ["circle", "square", "triangle", "polygon"];
    setShape(shapes[Math.floor(Math.random() * shapes.length)]);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);

      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        setIsMoving(true);
        // Rotate while moving
        rotateValue.set(rotateValue.get() + (Math.abs(dx) + Math.abs(dy)) * 0.5);
        
        if (moveTimeout.current) clearTimeout(moveTimeout.current);
        moveTimeout.current = setTimeout(() => {
          setIsMoving(false);
        }, 150);
      }

      lastPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (moveTimeout.current) clearTimeout(moveTimeout.current);
    };
  }, [mouseX, mouseY, rotateValue]);

  const shapesStyles = {
    circle: "rounded-full",
    square: "rounded-lg",
    triangle: "clip-path-triangle",
    polygon: "clip-path-polygon"
  };

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        rotate: smoothRotate,
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
      className="hidden sm:block"
    >
      <div className={`w-8 h-8 border-2 border-primary/40 bg-primary/10 backdrop-blur-sm transition-all duration-700 ${shapesStyles[shape]}`} />
      
      <style jsx>{`
        .clip-path-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .clip-path-polygon {
          clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        }
      `}</style>
    </motion.div>
  );
}
