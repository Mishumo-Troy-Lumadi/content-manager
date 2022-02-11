export default function ({ children, className,title }){

    let style = `flex flex-col w-full h-screen overflow-x-hidden bg-white space-y-10 text-slate-600 p-10 ${className}`

    return(
        <div className={style}>
            <h1 className="text-4xl text-purple-700">{title}</h1>
            {children}
        </div>
    )
}