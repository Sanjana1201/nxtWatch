import { ThreeDots } from "react-loader-spinner"

const Loader =() =>{
    return (
        <>
        <div className="loader-container" data-testid="loader">
                 <ThreeDots
                      color = "black"
                      height={80}
                      width={80}
                    />

            </div>
        </>
    )
}

export default Loader;