import React, { Component } from 'react';
import { API_STATUS } from '../../enums/LoadingStateEnum';
import Loader from '../LoadingIcon';

interface Props {
    apiStatus: API_STATUS
    apiError: string
    onInitial: () => void
    onSuccess: () => void
    onRetry: () => void
}

class LoadingWrapper extends Component<Props> {

    renderFailureView = () => {
        const { onRetry } = this.props;
        return (<div>
            {onRetry()}
            {/* <p>{apiError}</p>
            <Button buttonText='Retry' onClickButton={onRetry}/> */}
        </div>)
    }

    renderLoadingView = () => {
        return <div><Loader/></div>
    }

    renderRespectiveUI = () => {
        const { apiStatus, onSuccess, onInitial } = this.props
        const { INITIAL, LOADING, SUCCESS, FAILURE } = API_STATUS

        switch  (apiStatus) {
            case INITIAL:
                return onInitial();
            case LOADING:
                return this.renderLoadingView()
            case SUCCESS:
                return onSuccess()
            case FAILURE:
                return this.renderFailureView()
        }
    }

    render() {
        return (
            <div>
                {this.renderRespectiveUI()}
            </div>
        );
    }
}

export default LoadingWrapper;