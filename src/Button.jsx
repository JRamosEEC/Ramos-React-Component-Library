export const Button = ( { textColor="white", backgroundColor="gray", event, children }) => {
    return <button style={{color: `${textColor}`, backgroundColor: `${backgroundColor}`}} onClick={ event }>{children}</button>; 
}