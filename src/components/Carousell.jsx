export default function Carousell() {

    const data = [1, 2, 3, 4, 5, 6, 7]
    const duration = 20

    return (
        <div className="w-full overflow-hidden">
            <div className="marquee" style={{["--slide-duration"]: `${duration}s`}}>
                <div className="flex gap-10">
                    {[...data, ...data].map((item, index) => (
                    <div  key={index} className="shrink-0 p-2 bg-(--background)">
                        <div className="p-2 text-3xl mt-5">
                            <p>INFORMATIKA - UNIVERSITAS MUHAMMADIYAH CIREBON</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// style={{
//   ["--from" as any]: direction === "right" ? "-50%" : "0%",
//   ["--to" as any]: direction === "right" ? "0%" : "-50%",
// }}