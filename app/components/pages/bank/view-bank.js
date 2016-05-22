import React, { Component, PropTypes } from 'react';
import PageTitleBox from '../page-title-box'

class ViewBank extends Component {
    constructor() {
        super(...arguments)
    }

    render() {
        return ( 
        < div class="container">
            <PageTitleBox pageTitle="View Bank"></PageTitleBox> 
		</div>
        )
    }
}

export default ViewBank;
