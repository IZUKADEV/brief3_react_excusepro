import img from '../assets/wave.png';


export default function Wave() {
    return (
        <div className=" bottom-0 left-0 bg-gray-50 dark:bg-gray-900 w-screen h-[580px]">
            <img src={img} alt="wave" className="w-full h-full object-cover" />
        </div>
    )
}