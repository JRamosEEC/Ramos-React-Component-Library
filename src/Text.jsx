export const Text = ( { fontSize="14px", color="black", children}) => {
    return <p style={{ fontSize: `${fontSize}`, color: `${color}`}}>{children}</p>; 
}