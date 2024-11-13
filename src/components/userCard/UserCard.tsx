"use client";
import { IUser } from "@/types";
import Image from "next/image";
import React, { FC } from "react";
import styled from "styled-components";

const UserCard: FC<IUser> = ({ age, image, firstName, lastName }) => {
	return (
		<CardContainer className="shadow-md">
			<Image width={100} height={100} src={image} alt={`user-${firstName}`} />
			<div className="w-full mt-2">
				<UserName>
					{firstName} {lastName}
				</UserName>
			</div>
		</CardContainer>
	);
};

export default UserCard;

const CardContainer = styled.div`
	width: 100%;
	background-color: #fff;
	border-radius: 10px;
	display: grid;
	align-content: center;
	justify-content: center;
	padding: 20px;
`;

const UserImage = styled.image``;

const UserName = styled.h6`
	font-size: 1.5rem;
`;
