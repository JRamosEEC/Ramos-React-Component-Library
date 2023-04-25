export const Box = ( { size="medium", shape="", color="lightblue", children}) => {
    return <div className={`box ${size} ${shape}`} style={{ backgroundColor: `${color}`}}>{children}</div>; 
}