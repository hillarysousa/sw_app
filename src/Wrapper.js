import React, { Component } from 'react';
import Header from './Header';
import Datalist from './Datalist';
import Moviedata from './Moviedata';
import Button from './Button';
import './Wrapper.css';

class Wrapper extends Component {
	render() {
		return (
			<div class="wrapper">
				<div class="innerContent">
					<Header />
					<Datalist />
					<Moviedata />
				</div>
				<div class="btn-wrapper">
					<Button />
				</div>
			</div>
		);
	}
}

export default Wrapper;