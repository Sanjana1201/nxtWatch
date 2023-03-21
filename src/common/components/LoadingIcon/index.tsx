import { ThreeDots } from "react-loader-spinner"
import WrapperComponent from "../../../NxtWatch/components/Wrapper";
import { LoadingWrapper } from "./styledComponents";


const Loader =() =>{

    const renderWrappedComponent = () =>{
        return (
            <LoadingWrapper>
                <div className="loader-container" data-testid="loader">
                    <ThreeDots
                      color = "black"
                      height={80}
                      width={80}
                    />

                </div>
            </LoadingWrapper>
        )
    }

    return (
        <>
            <WrapperComponent renderWrappedComponent={renderWrappedComponent} />
        </>
    )
}

export default Loader;