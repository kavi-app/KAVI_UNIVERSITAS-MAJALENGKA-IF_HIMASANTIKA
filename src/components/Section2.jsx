import fikar from '../assets/images/people/5.png'
import septian from '../assets/images/people/1.png'
import ina from '../assets/images/people/2.png'
import putra from '../assets/images/people/3.png'
import roni from '../assets/images/people/4.png'
import dimas from '../assets/images/people/6.jpeg'
import { useDevice } from '../hooks/useDevice'

export default function Section2() {

    const device = useDevice()

    const data = [
        {name: "Fikar M. Istiqlalulwathon", role: "Superman", ig: "@andkjsnd", img: fikar},
        {name: "Septian Triana", role: "Ketua", ig: "@andkjsnd", img: septian},
        {name: "Ade Roni Pratama", role: "Anggota", ig: "@andkjsnd", img: roni},
        {name: "Ina Dina", role: "Anggota", ig: "@andkjsnd", img: ina},
        {name: "Dimas Candra Febrianto", role: "Anggota", ig: "@andkjsnd", img: dimas},
        {name: "Moch Noordin Saputra", role: "Anggota", ig: "@andkjsnd", img: putra},
    ]

    return (
        <section className="border-b border-(--line) pb-20!">
            {device === 'mobile' ? (
                <div className={`grid-cols grid px-10! my-20!`}>
                    <h1>FASILITAS AKADEMIK.</h1>
                    <h2 className="p-5! text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, blanditiis voluptatum? Autem voluptates nisi asperiores mollitia quasi aliquam, fugit voluptatem quas impedit nobis quaerat recusandae laudantium tempora! Animi, voluptatibus tempora.</h2>
                </div>
            ) : (
                <div className={`grid-cols-2 grid px-10! my-20!`}>
                    <div >
                    <h2 className="font-bold text-4xl">FASILITAS AKADEMIK.</h2>

                    <p>Untuk menunjang kegiatan belajar mengajar yang berorientasi pada kompetensi rekayasa teknologi, Program Studi S1 Teknik Informatika menyediakan sarana yang memadai :</p>
                    </div>
                    <h2 className="p-5! text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, blanditiis voluptatum? Autem voluptates nisi asperiores mollitia quasi aliquam, fugit voluptatem quas impedit nobis quaerat recusandae laudantium tempora! Animi, voluptatibus tempora.</h2>
                </div>
            )}
          <div className={`${device === 'mobile' ? 'grid-cols' : 'grid-cols-2'} w-full grid`}>
            {data.map((item, index) => {
                if(device === 'mobile'){
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