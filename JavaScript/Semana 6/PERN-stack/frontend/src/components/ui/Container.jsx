export function Container({children,className}){
    return (
        <div className={"max-w-7x1 px-4 mx-auto" + className}>{children}</div>
    )
}

export default Container