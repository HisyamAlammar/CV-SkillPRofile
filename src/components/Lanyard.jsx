import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import profileImg from '../assets/profile.jpeg';
import pythonLogo from '../assets/python.svg';
import cppLogo from '../assets/cpp.svg';
import reactLogo from '../assets/react.svg';
import sqlLogo from '../assets/database.svg';

const Lanyard = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const cardRef = useRef(null);

    // Physics refs
    const engineRef = useRef(null);
    const runnerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current || !canvasRef.current) return;

        // Module aliases
        const Engine = Matter.Engine,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint,
            Constraint = Matter.Constraint;

        // Create engine
        const engine = Engine.create();
        const world = engine.world;
        engineRef.current = engine;

        // Create bodies
        // 1. Anchor (Top point) - Static
        const anchor = Bodies.circle(200, 20, 5, {
            isStatic: true,
            render: { visible: false }
        });

        // 2. Card Body - The heavy object
        const cardBody = Bodies.rectangle(200, 250, 220, 320, {
            chamfer: { radius: 20 },
            density: 0.005, // Lighter
            frictionAir: 0.01, // Less air resistance (flies better)
            restitution: 0.5,
            render: { visible: false }
        });

        // 3. The Rubber Band (Spring Constraint)
        const elastic = Constraint.create({
            bodyA: anchor,
            bodyB: cardBody,
            pointA: { x: 0, y: 0 },
            pointB: { x: 0, y: -160 },
            stiffness: 0.01,
            damping: 0.05,
            length: 150,
            render: { visible: false }
        });

        Composite.add(world, [anchor, cardBody, elastic]);

        // Mouse Interaction
        const mouse = Mouse.create(containerRef.current);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });

        Composite.add(world, mouseConstraint);

        // Runner
        const runner = Runner.create();
        runnerRef.current = runner;
        Runner.run(runner, engine);

        // Render Loop
        let animationFrameId;
        const ctx = canvasRef.current.getContext('2d');

        // Rotation State for smooth interpolation
        let currentRotationY = 0;

        const updateLoop = () => {
            if (!cardRef.current || !canvasRef.current) return;

            // 1. Physics -> Visual Mapping
            const { position, angle, velocity } = cardBody;

            // NEW LOGIC: Position-based rotation (Displacement from center 200)
            const displacementX = position.x - 200;

            // Map displacement to rotation. 
            // 0px -> 0deg
            // Pulling to side keeps it rotated
            const targetRotationY = displacementX * 1.5;

            // Linear interpolation (Lerp) for smoothness
            currentRotationY += (targetRotationY - currentRotationY) * 0.1;

            cardRef.current.style.transform = `translate(${position.x}px, ${position.y}px) rotate(${angle}rad)`;

            // Apply the Y-rotation to the INNER card container (which is the first child of cardRef)
            const innerCard = cardRef.current.children[0];
            if (innerCard) {
                innerCard.style.transform = `rotateY(${currentRotationY}deg)`;
            }

            // 2. Draw the Lanyard Strap
            ctx.clearRect(0, 0, 400, 600);

            const attachPointX = cardBody.position.x + (-160 * Math.sin(-angle));
            const attachPointY = cardBody.position.y + (-160 * Math.cos(-angle));

            // Strap Geometry
            const deltaX = attachPointX - anchor.position.x;
            const deltaY = attachPointY - anchor.position.y;
            const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const strapAngle = Math.atan2(deltaY, deltaX);

            ctx.save();
            ctx.translate(anchor.position.x, anchor.position.y);
            ctx.rotate(strapAngle);

            // Draw Strap Background
            ctx.fillStyle = '#111';
            ctx.fillRect(0, -12, dist, 24); // 24px wide strap

            // Draw Strap Text
            ctx.font = 'bold 12px monospace';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Clip to rect
            ctx.beginPath();
            ctx.rect(0, -12, dist, 24);
            ctx.clip();

            // Draw text multiple times to cover length
            for (let i = 0; i < dist; i += 150) {
                ctx.fillText("ML ENGINEER", i + 75, 0);
            }

            ctx.restore();

            // Draw Clip/Hardware at anchor and attachment
            // Anchor
            ctx.beginPath();
            ctx.arc(anchor.position.x, anchor.position.y, 8, 0, 2 * Math.PI);
            ctx.fillStyle = '#333';
            ctx.fill();

            // Attachment
            ctx.beginPath();
            ctx.arc(attachPointX, attachPointY, 8, 0, 2 * Math.PI);
            ctx.fillStyle = '#333';
            ctx.fill();

            animationFrameId = requestAnimationFrame(updateLoop);
        };

        updateLoop();

        return () => {
            Runner.stop(runner);
            Engine.clear(engine);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} style={{ position: 'relative', width: '400px', height: '600px', overflow: 'visible', margin: '0 auto', userSelect: 'none' }}>
            <canvas ref={canvasRef} width={400} height={600} style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 1 }} />

            <div
                ref={cardRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '240px',
                    height: '340px',
                    marginTop: '-170px',
                    marginLeft: '-120px',
                    zIndex: 2,
                    cursor: 'grab',
                    perspective: '1000px'
                }}
            >
                <div style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transition: 'transform 0.1s', // Physics-driven
                    transformStyle: 'preserve-3d',
                    // rotationY is set in loop
                }}>
                    {/* Front Face */}
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        background: '#0a0a0a',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }}>
                        <div style={{ width: '100%', height: '100px', background: 'linear-gradient(135deg, var(--accent-color) 0%, #2a2a2a 100%)', position: 'absolute', top: 0 }}></div>

                        <div style={{
                            width: '130px',
                            height: '130px',
                            borderRadius: '50%',
                            border: '4px solid #0a0a0a',
                            marginTop: '35px',
                            zIndex: 2,
                            background: '#222',
                            overflow: 'hidden'
                        }}>
                            <img
                                src={profileImg}
                                alt="Profile"
                                draggable={false}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        </div>

                        <div style={{ marginTop: '1.5rem', textAlign: 'center', zIndex: 2 }}>
                            <h2 style={{ fontSize: '1.5rem', color: '#fff', margin: 0 }}>Abyan Hisyam</h2>
                            <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginTop: '0.2rem' }}>ML Engineer</p>
                        </div>

                        <div style={{ marginTop: 'auto', marginBottom: '1.5rem', display: 'flex', gap: '8px', zIndex: 2 }}>
                            <Badge text="Python" />
                            <Badge text="PyTorch" />
                            <Badge text="AI" />
                        </div>
                    </div>

                    {/* Back Face */}
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        background: '#151515',
                        borderRadius: '20px',
                        transform: 'rotateY(180deg)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        padding: '20px'
                    }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '20px',
                            marginBottom: '20px',
                            justifyItems: 'center',
                            alignItems: 'center'
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={pythonLogo} alt="Python" draggable={false} style={{ width: '50px', height: '50px', objectFit: 'contain', pointerEvents: 'none' }} />
                                <span style={{ fontSize: '0.7rem', color: '#888', marginTop: '5px' }}>Python</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={cppLogo} alt="C++" draggable={false} style={{ width: '50px', height: '50px', objectFit: 'contain', pointerEvents: 'none' }} />
                                <span style={{ fontSize: '0.7rem', color: '#888', marginTop: '5px' }}>C++</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={reactLogo} alt="React" draggable={false} style={{ width: '50px', height: '50px', objectFit: 'contain', pointerEvents: 'none' }} />
                                <span style={{ fontSize: '0.7rem', color: '#888', marginTop: '5px' }}>React</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={sqlLogo} alt="SQL" draggable={false} style={{ width: '50px', height: '50px', objectFit: 'contain', pointerEvents: 'none' }} />
                                <span style={{ fontSize: '0.7rem', color: '#888', marginTop: '5px' }}>SQL</span>
                            </div>
                        </div>
                        <h3 style={{ marginTop: '5px', color: '#fff', fontSize: '1.2rem', margin: 0 }}>Tech Stack</h3>
                        <p style={{ color: '#666', fontSize: '0.8rem', marginTop: '5px' }}>Core Competencies</p>
                    </div>
                </div>
            </div>

            <p style={{
                position: 'absolute',
                bottom: '20px',
                width: '100%',
                textAlign: 'center',
                color: 'rgba(255,255,255,0.3)',
                fontSize: '0.8rem',
                pointerEvents: 'none'
            }}>
                Drag to swing
            </p>
        </div>
    );
};

const Badge = ({ text }) => (
    <span style={{
        fontSize: '0.75rem',
        background: 'rgba(255,255,255,0.05)',
        color: '#ccc',
        padding: '6px 12px',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)'
    }}>
        {text}
    </span>
);

export default Lanyard;
