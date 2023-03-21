import React, { Component } from 'react';
import { API_STATUS } from '../../enums/LoadingStateEnum';
import Loader from '../LoadingIcon';
import SomethingWentWrongPage from '../SomethingWentWrong';

interface Props {
    apiStatus: API_STATUS
    apiError: string
    onSuccess: () => void
    onRetry: () => void
}

class LoadingWrapper extends Component<Props> {

    renderFailureView = () => {
        const { onRetry } = this.props;
        return (
        <>
            <SomethingWentWrongPage onRetry={onRetry} />
        </>
        )
    }

    renderLoadingView = () => {
        return <div><Loader/></div>
    }

    renderRespectiveUI = () => {
        const { apiStatus, onSuccess } = this.props
        const { LOADING, SUCCESS, FAILURE } = API_STATUS

        switch  (apiStatus) {
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