export function Line() {
    return (
        <div className="absolute flex justify-center w-full h-2">
            <div className="w-[50%] h-2 bg-(--line) rotate-180"></div>
        </div>
    )
}

export function Triangle({style}) {
    return (
        <span className={`${style} triangle`}></span>
    )
}