import { FaBeer } from "react-icons/fa";

const IconComponent = () => {
  return (
    <div>
      <FaBeer />
      <FaBeer size={30} />
      <FaBeer size={50} color="gold" />

      {/* <FaBeer style={{fontSize: "50px", color: "gold"}}/> */}
    </div>
  )
}

export default IconComponent
