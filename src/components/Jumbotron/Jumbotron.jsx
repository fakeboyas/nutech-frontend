import React from 'react';
import hero from '../../assets/images/new_logo.png';
import styled from 'styled-components';

const Wrapper = styled.div`
	@media (max-width: 576px) {
		.img {
			width: 200px;
		}
		.section1 {
			padding: 20px;
		}
		.button-start {
			display: flex !important;
			align-items: center !important;
			justify-content: center !important;
			margin-bottom: 60px;
		}
	}
`;

function Jumbotron() {
	return (
		<Wrapper
			className=" container-fluid d-flex justify-content-center"
			style={{
				backgroundColor: 'black',
				height: '100vh'
			}}
		>
			<div className="row m-auto">
				<div className=" section1 row d-flex justify-content-center mt-5">
					<div className="col-sm-5 mt-5">
						<h1
							style={{
								fontFamily: "'Montserrat', sans-serif ",
								color: 'white',
								fontWeight: 'Bolder',
								textAlign: 'left'
							}}
						>
							Test Praktek React JS Programmer
						</h1>
						<br />
						<p
							style={{
								fontFamily: " Roboto', sans-serif",
								color: 'white',
								textAlign: 'left'
							}}
						>
							Create, Read, Update, Delete (Crud)
						</p>
						<div className="button-start d-flex align-items-start mt-5">
							<button
								className="btn font-weight-bold rounded-pill btn-lg text-white"
								style={{
									background: 'rgb(255, 107, 84)',
									padding: '10px 40px 10px 40px'
								}}
							>
								Mulai
							</button>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="d-flex w-100 h-100">
							<img style={{ height: '200px', margin: 'auto' }} src={hero} alt="" />
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default Jumbotron;
