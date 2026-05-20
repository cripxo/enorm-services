export interface CardIcon {
    icon:string;
    bottom?: number;
    left?: number;
    className?:string;
}
const CardIcon = ({className="", icon,}:CardIcon) =>{
    return <div className={`absolute w-[100px] h-[100px] flex items-center justify-center bg-[white] rounded-[20px] p-[30px] ${className}`}>
                  <img
                    className="w-[48px] h-[48px]"
                    alt=""
                    src={icon}
                  />
                </div>
}

export default CardIcon;