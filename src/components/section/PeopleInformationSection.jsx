
import { useDeviceType } from '../../hooks/useDeviceType'

export default function PeopleInformationSection({data}) {

    const {isMobile, isDesktop} = useDeviceType()

    return (
        <section className="border-b border-(--line) pb-20!">
            {isMobile && (
                <div className={`grid-cols grid px-10! my-20!`}>
                    <h1>The Minds Behind the Work.</h1>
                    <h2 className="p-5! text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, blanditiis voluptatum? Autem voluptates nisi asperiores mollitia quasi aliquam, fugit voluptatem quas impedit nobis quaerat recusandae laudantium tempora! Animi, voluptatibus tempora.</h2>
                </div>
            )}
            
            {isDesktop && (
                <div className={`grid-cols-2 grid px-10! my-20!`}>
                    <h1>The Minds Behind the Work.</h1>
                    <h2 className="p-5! text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, blanditiis voluptatum? Autem voluptates nisi asperiores mollitia quasi aliquam, fugit voluptatem quas impedit nobis quaerat recusandae laudantium tempora! Animi, voluptatibus tempora.</h2>
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