export default function Loading() {
    return (
        <>
            <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
                <div className="animate-pulse mx-auto flex w-full flex-col gap-4 md:max-w-[52rem]">
                    <h2 className="w-full h-16 bg-slate-300 rounded-md"></h2>
                    <p className="max-w-[85%] h-7 bg-slate-300 rounded-md"></p>
                </div>
                <div className="grid w-full h-48 items-start rounded-md-lg border border-slate-200 md:grid-cols-[1fr_200px]">
                    <div className="animate-pulse grid gap-6">
                        <h3 className="w-3/5 h-8 bg-slate-300 rounded-md"></h3>
                    </div>
                    <ul className="animate-pulse grid gap-3 sm:grid-cols-2">
                        {[...Array(6).keys()].map((i) => (
                            <li key={i}
                                className="flex items-center w-1/4 h-5 bg-slate-300 rounded-md"
                            ></li>
                        ))}
                    </ul>
                    <div className="animate-pulse flex flex-col gap-4 text-center">
                        <div>
                            <div className="w-full h-20 bg-slate-300 rounded-md"></div>
                            <div className="w-full h-5 bg-slate-300 rounded-md"></div>
                        </div>
                        <div className="h-11 px-8 bg-slate-300 rounded-md"></div>
                    </div>
                </div>
                <div className="animate-pulse mx-auto flex w-full flex-col gap-4 md:max-w-[52rem]">
                    <p className="max-w-[85%] h-7 bg-slate-300 rounded-md sm:leading-7"></p>
                </div>
            </section>
        </>
    )
}