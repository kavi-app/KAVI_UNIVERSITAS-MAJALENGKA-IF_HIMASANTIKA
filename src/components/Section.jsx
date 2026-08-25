import { useEffect, useState } from "react";
import { Triangle } from "./Line";

export default function Section({angle, sectionRef}){
  const circles = [
    {title: "V", value: "Menanamkan nilai-nilai Islam kepada seluruh civitas akademika Program Studi S1 Teknik Informatika secara komperhensif."},
    {title: "IV", value: "Terselenggaranya pendidikan dan pengajaran yang berorientasi pada kompetensi bidang rekayasa teknologi yang sesuai dengan perkembangan kebutuhan dunia usaha dan industri."},
    {title: "III", value: "Terselenggaranya kegiatan penelitian dalam bidang rekayasa teknologi melalui kerjasama dengan pihak industri dan instansi pemerintahan baik dalam maupun luar negeri."},
    {title: "II", value: "Terselenggaranya kegiatan pengabdian kepada masyarakat dalam bidang rekayasa teknologi."},
    {title: "I", value: "Tumbuh kembangnya sikap kewirusahaan dalam bidang rekayasa teknologi di kalangan civitas akademika program Studi S1 Teknik Informatika."},
  ];

    const [activeCircle, setActiveCircle] = useState("A");
    useEffect(() => {
        const circle = circles.find((circle, index) => {
            const itemAngle = (360 / circles.length) * index;
            const rotate = ((-itemAngle - angle) % 360 + 360) % 360;
            return rotate >= 60 && rotate <= 100;
        });

        if (circle) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setActiveCircle(circle.title);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [angle]);

  return (
    <section ref={sectionRef} className='w-full h-[350vh]'>
        <div className='sticky top-0 h-screen flex justify-center items-center border-(--line) border-b'>
          <div className='w-[50%] h-screen border-(--line) border-t border-r'>
            <div className='w-full h-[90%] relative border-(--line) border-b'>
              <div className='flex justify-center items-center h-full'>
                <div className='w-[60%]'>
                  <h1>MISI.</h1>
                  <div>
                    {circles.map((item) => {
                        if(item.title == activeCircle){
                            return (<p key={item.title} className="from-bottom [--delay:0ms] text-justify">{item.value}</p>)
                        }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Triangle style={"absolute rotate-90 left-1/2"}/>
          <div className="w-[50%] h-screen relative overflow-hidden">
            <div className="absolute top-50 -right-30 w-150 h-150 rounded-full bg-white border border-(--line)">
              <div className="absolute inset-0"style={{transform: `rotate(${angle}deg)`}}>
                {circles.map((circle, index) => {
                  const itemAngle = (360 / circles.length) * index;
                  const rotate = ((-itemAngle - angle) % 360 + 360) % 360;

                  return (
                    <div key={circle.title} className="absolute top-1/3 left-1/3" style={{transform: `rotate(${itemAngle}deg) translateY(-300px)`}}>
                      <div className={`bg-white ${rotate <= 100 && rotate >= 60 ? 'w-60 h-60': 'w-50 h-50'} rounded-full border border-(--line) flex items-center justify-center transition-all ease-in-out`} style={{transform: `rotate(${-itemAngle - angle}deg)`, boxShadow: rotate <= 100 && rotate >= 60 && 'var(--shadow)'}}>
                        {`${circle.title}`}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}