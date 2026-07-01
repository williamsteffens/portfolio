const Hero = () => {
    return (
        <header className="px-10 pt-10 relative z-10">
            {/* <div className="flex justify-between text-xs tracking-[0.2em] font-mono border-b border-ink pb-3">
                <span>BUILD DEEPER</span>
                <span>EST. 2019</span>
            </div> */}

            <h1 className="font-body uppercase font-black leading-[0.85] text-[clamp(48px,10vw,160px)] mt-6">
                William<br />Steffens
            </h1>

            <div className="grid md:grid-cols-[1fr_260px] gap-8 mt-6 border-t border-ink pt-6">
                <p className="text-sm leading-relaxed max-w-xl">
                    I design and build distributed systems and the tools that keep teams shipping them. Eight years across payments, field research, and internal platforms — currently taking on select consulting work. <strong className="text-rust">distributed systems</strong>.
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