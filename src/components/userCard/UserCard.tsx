"use client";
import { IUser } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

const UserCard: FC<IUser> = ({ age, image, firstName, lastName, id }) => {
	return (
		<Link href={`/${id}`}>
			<CardContainer className="shadow-md">
				<Image
					width={100}
					height={100}
					src={image}
					alt={`user-${firstName}`}
					className="justify-self-center"
				/>
				<div className="w-full mt-2 flex flex-col items-center justify-center">
					<UserName>
						{firstName} {lastName}
					</UserName>
					<div className="flex flex-row items-center">
						<h6 className="text-gray-600">Age:</h6>
						<p className="font-medium text-gray-700">{age}</p>
					</div>
				</div>
			</CardContainer>
		</Link>
	);
};

export default UserCard;

const CardContainer = styled.div`
	width: 100%;
	background-color: #fff;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 40px 20px;
	border: 0.4px solid #eeeeee;
`;

const UserName = styled.h6`
	font-size: 1.5rem;
	color: #2b2b2b;
	font-weight: 600;
`;
