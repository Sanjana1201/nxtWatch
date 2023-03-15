import { ThreeDots } from "react-loader-spinner"
import { LoadingWrapper } from "./styledComponents";


const Loader =() =>{
    return (
        <>
        <LoadingWrapper>
        <div className="loader-container" data-testid="loader">
                 <ThreeDots
                      color = "black"
                      height={80}
                      width={80}
                    />

            </div>
        </LoadingWrapper>
        </>
    )
}

export default Loader;