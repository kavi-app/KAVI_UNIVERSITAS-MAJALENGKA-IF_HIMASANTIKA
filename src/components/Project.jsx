import { Line } from "./Line"

export default function ProjectSection() {

    const project = [1, 2, 3, 4]

    return (
        <section className='w-full h-[400vh] relative flex justify-center border-b border-(--line)'>
          <Line/>
          <div className='w-[60%] sticky top-0 h-screen flex justify-center items-center'>
            <div className='w-[70%]'>
              <h1>Ideas I've Turned Into Reality.</h1>
              <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non optio in quas nesciunt dolores aperiam vero totam labore voluptatem recusandae pariatur laborum, id nam harum alias soluta ipsa. Ut, atque!</p>
            </div>
          </div>
          <div className='w-[40%] h-full flex flex-col'>
            {project.map((item, index) => (
                <div key={index} className='w-80 h-90 m-auto! border border-(--line) rounded-3xl p-3!'>
                  <div className='w-full h-full rounded-2xl bg-cyan-200'>{item}</div>
                </div>
            ))}
          </div>
        </section>
    )
}