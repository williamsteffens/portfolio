const Hero = () => {
    return (
        <header className="max-w-6xl mx-auto px-6 md:px-10 pt-12 pb-20 relative z-10">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest mb-8">
                <span className="w-2 h-2 bg-rust rounded-full animate-pulse" />
                Available for opportunities
            </div>

            <h1 className="font-body uppercase font-black leading-[0.8] text-[clamp(56px,11vw,170px)]">
                William<br />
                <span className="text-rust">Steffens</span>
            </h1>

            <div className="grid md:grid-cols-[1fr_380px] gap-10 mt-10 border-t border-ink pt-8">
                <div>
                    <p className="text-xl md:text-2xl leading-snug max-w-3xl font-medium">
                        Software engineer building reliable systems and thoughtful
                        digital experiences.
                    </p>

                    <p className="text-sm leading-relaxed max-w-xl mt-6">
                        BSc Software Technology graduate from DTU and currently studying for an MSc in Software at AAU. I enjoy working across the
                        stack — designing backend services, APIs, and user interfaces.
                        Currently looking for Full-Stack or Backend roles where I can
                        keep building, learning, and solving challenging problems.
                    </p>

                    {/* <div className="flex flex-wrap gap-3 mt-8 font-mono text-xs uppercase">
                        {["Backend", "Full-Stack", "TypeScript", "Java", "Cloud"].map(
                            (item) => (
                                <span
                                    key={item}
                                    className="border border-ink px-3 py-2"
                                >
                                    {item}
                                </span>
                            )
                        )}
                    </div> */}
                </div>

                <div className="bg-ink text-paper p-5 font-mono text-xs h-fit">
                    <div className="flex justify-between text-paper/50 mb-5">
                        <span>profile</span>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <p className="text-paper/50">CURRENTLY</p>
                            <p className="mt-1">MSc Software @ AAU</p>
                        </div>

                        <div>
                            <p className="text-paper/50">FOCUS</p>
                            <p className="mt-1">
                                Backend · APIs · Cloud
                            </p>
                        </div>

                        <div>
                            <p className="text-paper/50">OPEN TO</p>
                            <p className="mt-1 ">
                                Student positions / Full-Stack / Backend
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;