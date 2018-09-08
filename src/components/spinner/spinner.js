import React from 'react';
import { DotLoader} from 'react-spinners';
import './spinner.css';

export default class Spinner extends React.Component {
    render() {
        return (
            <div className='sweet-loading'>
                <DotLoader 
                    color={'#f91b37'}
                    loading={this.props.loading}
                />
            </div>
        );  
    }
}