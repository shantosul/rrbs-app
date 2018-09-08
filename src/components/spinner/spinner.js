import React from 'react';
import { BarLoader} from 'react-spinners';
import './spinner.css';

export default class Spinner extends React.Component {
    render() {
        return (
            <div className='sweet-loading'>
                <BarLoader 
                    color={'##f91b37'}
                    loading={this.props.loading}
                />
            </div>
        );  
    }
}