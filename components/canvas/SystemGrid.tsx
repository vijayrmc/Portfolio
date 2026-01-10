"use client";

import { useEffect, useRef } from "react";

export default function SystemGrid({ opacity = 1 }: { opacity?: number }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let time = 0;

        const points: { x: number; y: number; z: number }[] = [];
        const rows = 20;
        const cols = 20;
        const spacing = 100;

        // Initialize points for a grid
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                points.push({
                    x: (c - cols / 2) * spacing,
                    y: (r - rows / 2) * spacing,
                    z: 0
                });
            }
        }

        const animate = () => {
            time += 0.005;

            // Clear with fade effect for trails? No, crisp for this style.
            ctx.clearRect(0, 0, width, height);
            ctx.globalAlpha = opacity * 0.15; // Very subtle
            ctx.strokeStyle = "#ffffff";
            ctx.lineWidth = 1;

            // Perspective projection
            const fov = 300;
            const viewerZ = 500;

            ctx.beginPath();

            // Draw Grid Lines (Rows)
            for (let r = 0; r < rows; r++) {
                // rudimentary wave effect
                const yOffset = Math.sin(r * 0.5 + time) * 20;

                // Move to start of row
                let first = true;
                for (let c = 0; c < cols; c++) {
                    const x = (c - cols / 2) * spacing;
                    const y = (r - rows / 2) * spacing + yOffset;
                    const z = (Math.cos(c * 0.5 + time) * 20);

                    // Project
                    const scale = fov / (fov + z + viewerZ);
                    const px = (x * scale) + width / 2;
                    const py = (y * scale) + height / 2;

                    if (first) {
                        ctx.moveTo(px, py);
                        first = false;
                    } else {
                        ctx.lineTo(px, py);
                    }
                }
            }

            // Draw Grid Lines (Cols)
            for (let c = 0; c < cols; c++) {
                let first = true;
                for (let r = 0; r < rows; r++) {
                    const yOffset = Math.sin(r * 0.5 + time) * 20;

                    const x = (c - cols / 2) * spacing;
                    const y = (r - rows / 2) * spacing + yOffset;
                    const z = (Math.cos(c * 0.5 + time) * 20);

                    const scale = fov / (fov + z + viewerZ);
                    const px = (x * scale) + width / 2;
                    const py = (y * scale) + height / 2;

                    if (first) {
                        ctx.moveTo(px, py);
                        first = false;
                    } else {
                        ctx.lineTo(px, py);
                    }
                }
            }

            ctx.stroke();
            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            if (canvasRef.current) {
                width = canvasRef.current.width = window.innerWidth;
                height = canvasRef.current.height = window.innerHeight;
            }
        };

        window.addEventListener("resize", handleResize);
        const animId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animId);
        };
    }, [opacity]);

    return (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
    );
}
