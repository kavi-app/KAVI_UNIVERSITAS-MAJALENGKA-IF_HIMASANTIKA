
import { useDeviceType } from '../../hooks/useDeviceType'

export default function PeopleInformationSection({data}) {

    const {isMobile, isDesktop} = useDeviceType()

    return (
        <section className="border-b border-(--line) pb-20!">
            {isMobile && (
                <div className={`flex flex-col gap-4 text-wrap max-w-lg px-10! my-20!`}>
                    
                    <h2 className="font-bold text-4xl">FASILITAS AKADEMIK.</h2>

                    <p className="text-ms">
                        Untuk menunjang kegiatan belajar mengajar yang
                    
                        berorientasi pada kompetensi rekayasa teknologi,
                    
                        Program Studi S1 Teknik Informatika menyediakan
                    
                        sarana yang memadai :
                    </p>
                    
                </div>             
            )}
            
            {isDesktop && (
                <div className={`flex flex-col gap-4 text-wrap max-w-lg px-10! my-20!`}>
                    
                    <h2 className="font-bold text-4xl">FASILITAS AKADEMIK.</h2>

                    <p className="text-ms">
                        Untuk menunjang kegiatan belajar mengajar yang
                    
                        berorientasi pada kompetensi rekayasa teknologi,
                    
                        Program Studi S1 Teknik Informatika menyediakan
                    
                        sarana yang memadai :
                    </p>
                    
                </div>
            )}
        <div className={`${isMobile ? 'grid-cols' : 'grid-cols-2'} w-full grid`}>
            {data.map((item, index) => {
                if(isMobile){
                    return (
                        <div key={index} className='w-full p-2!'>
                            <div className='w-full flex justify-center'>
                                <div className='w-80 h-80 bg-white border border-(--line) flex justify-center'>
                                    <img src={item.img} className='h-full grayscale-100' alt="" />
                                </div>
                            </div>
                            <div className="flex-1 relative px-10! h-50 text-md">
                                <div className="h-[50%] flex justify-between">
                                    <p>{item.name}</p>
                                    <p>{item.ig}</p>
                                </div>
                                <div className="flex justify-between h-[50%] items-end">
                                    <p>.</p>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        </div>
                    )
                }else{
                    if(index % 2 === 0){
                        return (
                            <div key={index} className='w-full flex justify-between p-2!'>
                                <div className="flex-1 relative px-5!">
                                    <div className="border-t border-(--line) h-[50%] flex justify-between">
                                        <p className="text-xl">{item.name}</p>
                                        <p className="text-xl">{item.ig}</p>
                                    </div>
                                    <div className="flex justify-between h-[50%] items-end">
                                        <p>.</p>
                                        <p className="text-xl">{item.role}</p>
                                    </div>
                                </div>
                                <div className='w-80 h-80 bg-white border border-(--line) flex justify-center'>
                                    <img src={item.img} className='h-full grayscale-100' alt="" />
                                </div>
                            </div>
                        )
                    }else{
                        return (
                            <div key={index} className='w-full flex justify-between p-2!'>
                                <div className='w-80 h-80 bg-white border border-(--line) flex justify-center'>
                                    <img src={item.img} className='h-full grayscale-100' alt="" />
                                </div>
                                <div className="flex-1 relative px-5!">
                                    <div className="border-t border-(--line) h-[50%] flex justify-between">
                                        <p className="text-xl">{item.ig}</p>
                                        <p className="text-xl">{item.name}</p>
                                    </div>
                                    <div className="flex justify-between h-[50%] items-end">
                                        <p className="text-xl">{item.role}</p>
                                        <p>.</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }   
                }
            })}
        </div>
        </section>
    )
}