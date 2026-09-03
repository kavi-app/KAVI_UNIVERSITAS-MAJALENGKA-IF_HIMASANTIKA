import { useDeviceType } from "../../hooks/useDeviceType"

export default function FirstSection({data}) {
    const {isMobile, isDesktop} = useDeviceType()

    return (
        <section className='flex w-full justify-center h-screen border-(--line) border-b'>
            {isMobile && (
                <div className='h-screen w-[80%] border-(--line) border-l border-r flex justify-center items-center'>
                <div>
                    <div className="relative text-(--text)">
                    <div className='flex justify-center'>
                        <p className="img text-transparent bg-clip-text font-bold text-8xl from-top">{data.title1}</p>
                        <p className="img text-transparent bg-clip-text font-bold text-8xl from-left [--delay:300ms]">{data.title2}</p>
                    </div>
                    <div className="text-[10px] px-2! flex justify-between from-bottom [--delay:600ms]">
                        {data.desc.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                    </div>
                    <div className="flex justify-center items-center mt-15! from-top [--delay:1s]">
                    </div>
                </div>
                </div>
            )}

            {isDesktop && (
                <div className='w-[80%] h-screen border-(--line) border-l border-r flex justify-center items-center'>
                    <div>
                        <div className="relative text-(--text)">
                        <div className='grad-circle [--grad-cr:rgba(255,0,132,0.3)]'></div>
                        <div className='flex'>
                            <p className="img text-transparent bg-clip-text font-bold text-7xl lg:text-[12rem] from-top">{data.title1}</p>
                            <p className="img from-pink-500 to-violet-500 text-transparent bg-clip-text font-bold text-7xl lg:text-[12rem] from-left [--delay:300ms]">{data.title2}</p>
                        </div>
                        <div className="text-xl px-2! flex justify-between from-bottom [--delay:600ms]">
                            {data.desc.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </div>
                        </div>
                        <div className="flex justify-center items-center mt-15! from-top [--delay:1s]">
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}