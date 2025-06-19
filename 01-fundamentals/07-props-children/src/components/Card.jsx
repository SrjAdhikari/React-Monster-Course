const Card = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}


//* By prop destructuring
// const Card = ({ children }) => {
//   return (
//     <div>
//       {children}
//     </div>
//   )
// }

export default Card
