const Hero = () => {
    return (
        <header className="max-w-6xl mx-auto px-10 pt-10 relative z-10">
            <h1 className="font-body uppercase font-black leading-[0.85] text-[clamp(48px,10vw,160px)] mt-6">
                William<br /> <span className="text-rust">Steffens</span>
            </h1>

            <div className="grid md:grid-cols-[1fr_260px] gap-8 mt-6 border-t border-ink pt-6">
                <p className="text-sm leading-relaxed max-w-xl">
                    A jack of all trades with a passion for software. I recently graduated with a BSc in Software Technology from DTU and enjoy working across the stack, from backend services and APIs to polished user experiences. I'm currently looking for opportunities as a Full-Stack or Backend Developer where I can keep learning, building, and solving interesting problems.
                </p>

                <div className="bg-ink text-paper p-4 font-mono text-xs space-y-3">
                    <div className="flex justify-between">
                        <span>Currently Working on</span>
                    </div>
                    <div className="flex justify-between">
                        {/* Terminal animation */}
                        <span>Fieldnote</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;